"use client";

import { useEffect, useRef } from "react";

export default function CometBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    interface Comet {
      x: number;
      y: number;
      speed: number;
      length: number;
      angle: number;
      opacity: number;
      size: number;
    }

    const comets: Comet[] = [];
    const maxComets = 6;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const spawnComet = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const angle = Math.PI * 0.15 + Math.random() * Math.PI * 0.2; // Roughly diagonal
      comets.push({
        x: -50 + Math.random() * w * 0.3,
        y: -50 + Math.random() * h * 0.3,
        speed: 2 + Math.random() * 3,
        length: 80 + Math.random() * 120,
        angle,
        opacity: 0.3 + Math.random() * 0.5,
        size: 1 + Math.random() * 1.5,
      });
    };

    let lastSpawn = 0;

    const animate = (time: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      ctx.clearRect(0, 0, w, h);

      // Spawn new comets periodically
      if (time - lastSpawn > 2000 + Math.random() * 3000 && comets.length < maxComets) {
        spawnComet();
        lastSpawn = time;
      }

      for (let i = comets.length - 1; i >= 0; i--) {
        const c = comets[i];
        c.x += Math.cos(c.angle) * c.speed;
        c.y += Math.sin(c.angle) * c.speed;

        // Draw comet trail
        const tailX = c.x - Math.cos(c.angle) * c.length;
        const tailY = c.y - Math.sin(c.angle) * c.length;

        const grad = ctx.createLinearGradient(tailX, tailY, c.x, c.y);
        grad.addColorStop(0, `rgba(167, 139, 250, 0)`);
        grad.addColorStop(0.7, `rgba(167, 139, 250, ${c.opacity * 0.3})`);
        grad.addColorStop(1, `rgba(167, 139, 250, ${c.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(c.x, c.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = c.size;
        ctx.lineCap = "round";
        ctx.stroke();

        // Comet head glow
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${c.opacity * 0.5})`;
        ctx.fill();

        // Remove off-screen comets
        if (c.x > w + 200 || c.y > h + 200) {
          comets.splice(i, 1);
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    // Spawn initial comets
    spawnComet();
    spawnComet();
    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}
