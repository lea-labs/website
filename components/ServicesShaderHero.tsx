"use client";

import { useEffect, useRef } from "react";

const vertexShader = `#version 300 es
precision highp float;
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const fragmentShader = `#version 300 es
precision highp float;
uniform float uTime;
uniform vec2 uResolution;
out vec4 fragColor;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float val = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 5; i++) {
    val += amp * noise(p);
    p *= 2.0;
    amp *= 0.5;
  }
  return val;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  float t = uTime * 0.15;

  // Warped noise layers
  vec2 q = vec2(fbm(uv * 3.0 + t), fbm(uv * 3.0 + vec2(1.7, 9.2) + t * 0.7));
  vec2 r = vec2(fbm(uv * 4.0 + q + vec2(1.7, 9.2) + t * 0.3), fbm(uv * 4.0 + q + vec2(8.3, 2.8) + t * 0.5));
  float f = fbm(uv * 2.0 + r);

  // Purple palette
  vec3 col = mix(vec3(0.02, 0.0, 0.08), vec3(0.12, 0.04, 0.28), f);
  col = mix(col, vec3(0.3, 0.15, 0.6), smoothstep(0.3, 0.8, f));
  col = mix(col, vec3(0.48, 0.24, 0.93), smoothstep(0.5, 0.95, f) * 0.5);

  // Vignette
  float vig = 1.0 - length((uv - 0.5) * 1.2);
  col *= smoothstep(0.0, 0.7, vig);

  // Stars
  float stars = smoothstep(0.97, 1.0, hash(floor(uv * 200.0)));
  col += stars * vec3(0.6, 0.5, 0.9) * 0.5;

  fragColor = vec4(col, 1.0);
}`;

interface ServicesShaderHeroProps {
  title: string;
  subtitle: string;
}

export default function ServicesShaderHero({ title, subtitle }: ServicesShaderHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2");
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vertexShader));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fragmentShader));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(prog, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "uTime");
    const uRes = gl.getUniformLocation(prog, "uResolution");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const start = performance.now();
    const render = () => {
      const t = (performance.now() - start) / 1000;
      gl.uniform1f(uTime, t);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow">
          {title}
        </h1>
        <p className="text-silver text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
