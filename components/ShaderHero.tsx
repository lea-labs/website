"use client";

import { useEffect, useRef } from "react";

const VERTEX_SHADER = `#version 300 es
in vec4 a_position;
void main() {
  gl_Position = a_position;
}`;

const FRAGMENT_SHADER = `#version 300 es
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_pointer;
out vec4 fragColor;

#define S(a, b, t) smoothstep(a, b, t)

float hash21(vec2 p) {
    p = fract(p * vec2(234.34, 435.345));
    p += dot(p, p + 34.23);
    return fract(p.x * p.y);
}

mat2 Rot(float a) {
    float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c);
}

float star(vec2 uv, float flare) {
    float d = length(uv);
    float m = .02 / d;
    float rays = max(0., 1. - abs(uv.x * uv.y * 1000.));
    m += rays * flare;
    uv *= Rot(3.1415 / 4.);
    rays = max(0., 1. - abs(uv.x * uv.y * 1000.));
    m += rays * .3 * flare;
    m *= S(1., .2, d);
    return m;
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash21(i);
    float b = hash21(i + vec2(1, 0));
    float c = hash21(i + vec2(0, 1));
    float d = hash21(i + vec2(1, 1));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
    float f = 0.0;
    float amp = 0.5;
    for(int i = 0; i < 5; i++) {
        f += amp * noise(p);
        p *= 2.0;
        amp *= 0.5;
    }
    return f;
}

void main() {
    vec2 uv = (gl_FragCoord.xy - .5 * u_resolution.xy) / u_resolution.y;
    vec2 mouse = (u_pointer - .5 * u_resolution.xy) / u_resolution.y;
    float t = u_time * 0.15;

    // Deep space base
    vec3 col = vec3(0.0);

    // Nebula clouds — purple
    vec2 nuv = uv * 2.0;
    float n1 = fbm(nuv + t * 0.3 + mouse * 0.1);
    float n2 = fbm(nuv * 1.5 - t * 0.2);
    float n3 = fbm(nuv * 0.8 + vec2(t * 0.1, -t * 0.15));

    // Purple nebula layers
    vec3 purple1 = vec3(0.486, 0.227, 0.929); // #7c3aed
    vec3 purple2 = vec3(0.655, 0.545, 0.980); // #a78bfa
    vec3 purpleDark = vec3(0.298, 0.114, 0.584); // #4c1d95

    col += purple1 * n1 * 0.15;
    col += purpleDark * n2 * 0.1;
    col += purple2 * n3 * 0.08;

    // Central glow from pointer region
    float pointerDist = length(uv - mouse * 0.3);
    col += purple1 * 0.12 * exp(-pointerDist * 3.0);
    col += purple2 * 0.06 * exp(-pointerDist * 1.5);

    // Stars
    for (float i = 0.0; i < 3.0; i++) {
        vec2 starUV = uv * (10.0 + i * 15.0);
        vec2 id = floor(starUV);
        vec2 gv = fract(starUV) - 0.5;

        for (int y = -1; y <= 1; y++) {
            for (int x = -1; x <= 1; x++) {
                vec2 offs = vec2(float(x), float(y));
                float n = hash21(id + offs);
                float size = fract(n * 345.32);
                vec2 p = gv - offs - vec2(n, fract(n * 34.0)) + 0.5;
                float s = star(p, S(.9, .7, size) * 0.5);
                vec3 starColor = mix(purple2, vec3(1.0), 0.7) * (0.5 + size * 0.5);
                col += s * starColor * (0.3 + 0.2 * sin(u_time + n * 6.28));
            }
        }
    }

    // Vignette
    float vig = 1.0 - dot(uv * 0.7, uv * 0.7);
    col *= S(0.0, 0.5, vig);

    // Light energy streaks
    float streak1 = S(0.02, 0.0, abs(uv.y - sin(uv.x * 3.0 + t) * 0.1 - 0.1)) * 0.08;
    float streak2 = S(0.02, 0.0, abs(uv.y + sin(uv.x * 2.5 - t * 0.7) * 0.15 + 0.15)) * 0.05;
    col += purple2 * streak1;
    col += purple1 * streak2;

    fragColor = vec4(col, 1.0);
}`;

export default function ShaderHero({
  title,
  subtitle,
  label,
}: {
  title: string;
  subtitle?: string;
  label?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2", { antialias: true });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(s));
      }
      return s;
    };

    const vs = compile(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = compile(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    const posLoc = gl.getAttribLocation(program, "a_position");
    const resLoc = gl.getUniformLocation(program, "u_resolution");
    const timeLoc = gl.getUniformLocation(program, "u_time");
    const ptrLoc = gl.getUniformLocation(program, "u_pointer");

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pointer = { x: 0, y: 0 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    };

    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio, 2);
      pointer.x = (e.clientX - rect.left) * dpr;
      pointer.y = (rect.height - (e.clientY - rect.top)) * dpr;
    };
    window.addEventListener("mousemove", onMove);

    const start = performance.now();

    const render = () => {
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(program);
      gl.enableVertexAttribArray(posLoc);
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, (performance.now() - start) / 1000);
      gl.uniform2f(ptrLoc, pointer.x, pointer.y);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void/80" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        {label && (
          <p className="font-heading text-[10px] tracking-[0.5em] uppercase text-neon-bright/80 mb-4">
            {label}
          </p>
        )}
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-off-white text-glow-strong max-w-4xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-silver text-lg md:text-xl max-w-2xl mt-6 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
