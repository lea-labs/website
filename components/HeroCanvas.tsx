"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  const color = "#7c3aed";
  const particleCount = 120;
  const speed = 0.4;
  const trailOpacity = 0.06;
  const connectionDistance = 150;

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
      : { r: 124, g: 58, b: 237 };
  };

  const initParticles = useCallback(
    (width: number, height: number) => {
      const particles: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          life: Math.random() * 200,
          maxLife: 200 + Math.random() * 200,
          size: Math.random() * 2 + 0.5,
        });
      }
      return particles;
    },
    [particleCount, speed]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      particlesRef.current = initParticles(rect.width, rect.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    window.addEventListener("mousemove", handleMouse);

    const rgb = hexToRgb(color);
    const w = () => canvas.getBoundingClientRect().width;
    const h = () => canvas.getBoundingClientRect().height;

    const animate = () => {
      timeRef.current += 0.005;
      const width = w();
      const height = h();

      ctx.fillStyle = `rgba(0, 0, 0, ${trailOpacity})`;
      ctx.fillRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Flow field influence
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const angle =
          Math.sin(p.x * 0.003 + timeRef.current) * Math.PI +
          Math.cos(p.y * 0.003 + timeRef.current) * Math.PI;
        p.vx += Math.cos(angle) * 0.02;
        p.vy += Math.sin(angle) * 0.02;

        // Mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.vx += (dx / dist) * force * 0.5;
          p.vy += (dy / dist) * force * 0.5;
        }

        // Damping
        p.vx *= 0.98;
        p.vy *= 0.98;

        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Wrap
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Reset if expired
        if (p.life > p.maxLife) {
          p.x = Math.random() * width;
          p.y = Math.random() * height;
          p.life = 0;
          p.maxLife = 200 + Math.random() * 200;
        }

        const lifeRatio = 1 - Math.abs(p.life - p.maxLife / 2) / (p.maxLife / 2);
        const alpha = lifeRatio * 0.8;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
        ctx.fill();

        // Glow for brighter particles
        if (p.size > 1.2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha * 0.1})`;
          ctx.fill();
        }
      }

      // Neural connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Orbital ring overlays (subtle)
      const cx = width / 2;
      const cy = height / 2;
      const t = timeRef.current;
      for (let r = 0; r < 3; r++) {
        const radius = 180 + r * 120;
        const rot = t * (0.2 + r * 0.1);
        ctx.beginPath();
        ctx.ellipse(cx, cy, radius, radius * 0.3, rot, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.04)`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [initParticles, color, trailOpacity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: "transparent" }}
    />
  );
}

export default function HeroCanvas() {
  const [visible, setVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 300);
    const t2 = setTimeout(() => setSubtitleVisible(true), 1200);
    const t3 = setTimeout(() => setTaglineVisible(true), 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="h-svh relative bg-void">
      <NeuralBackground />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-neon/[0.06] blur-[120px]" />
      </div>

      <div className="h-svh items-center w-full absolute z-40 pointer-events-none px-6 flex justify-center flex-col text-center">
        <div
          className="transition-all duration-1000 ease-out flex justify-center w-full"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <Image
            src="/images/text-vector.svg"
            alt="LEA LABS"
            width={800}
            height={186}
            className="w-[80vw] max-w-[400px] md:max-w-[550px] lg:max-w-[700px] h-auto drop-shadow-[0_0_30px_rgba(167,139,250,0.4)]"
            priority
          />
        </div>

        <div
          className="text-sm md:text-xl xl:text-2xl mt-6 text-silver font-heading font-medium tracking-[0.15em] uppercase transition-all duration-1000 ease-out"
          style={{
            opacity: subtitleVisible ? 1 : 0,
            transform: subtitleVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Strategic Growth & Brand Consultancy
        </div>

        <div
          className="mt-5 transition-all duration-1000 ease-out"
          style={{
            opacity: taglineVisible ? 1 : 0,
            transform: taglineVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <span className="px-5 py-2 border border-neon/40 rounded-full text-neon-bright font-heading tracking-[0.2em] text-[11px] md:text-sm uppercase neon-border">
            Engineering Brand Perception
          </span>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-50">
        <button
          className="explore-btn"
          style={{ animationDelay: "2.8s", position: "relative", bottom: "auto", left: "auto", transform: "none" }}
          onClick={() =>
            document.getElementById("content")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Scroll to explore
          <span className="explore-arrow">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="arrow-svg">
              <path d="M11 5V17" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M6 12L11 17L16 12" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
