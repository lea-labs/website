"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Smooth animation state using refs (no re-renders per frame)
  const angleRef = useRef(0);
  const targetSpeedRef = useRef(0.08); // degrees per frame at 60fps
  const currentSpeedRef = useRef(0.08);
  const autoRotateRef = useRef(true);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef(0);
  const [, forceRender] = useState(0);

  // Smooth lerp for speed transitions
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const tick = useCallback((timestamp: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    const delta = (timestamp - lastTimeRef.current) / 16.667; // normalize to 60fps
    lastTimeRef.current = timestamp;

    // Smoothly interpolate speed (eased start/stop)
    const targetSpeed = autoRotateRef.current ? 0.08 : 0;
    currentSpeedRef.current = lerp(currentSpeedRef.current, targetSpeed, 0.04);

    // Apply rotation
    if (Math.abs(currentSpeedRef.current) > 0.0001) {
      angleRef.current = (angleRef.current + currentSpeedRef.current * delta) % 360;
      forceRender((n) => n + 1);
    }

    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {};
      Object.keys(prev).forEach((key) => {
        if (parseInt(key) !== id) newState[parseInt(key)] = false;
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        autoRotateRef.current = false;
        const relatedItems = getRelatedItems(id);
        const newPulse: Record<number, boolean> = {};
        relatedItems.forEach((relId) => { newPulse[relId] = true; });
        setPulseEffect(newPulse);
        // Smoothly rotate to center the node at top
        const nodeIndex = timelineData.findIndex((item) => item.id === id);
        const targetAngle = 270 - (nodeIndex / timelineData.length) * 360;
        angleRef.current = targetAngle;
      } else {
        setActiveNodeId(null);
        autoRotateRef.current = true;
        setPulseEffect({});
      }

      return newState;
    });
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + angleRef.current) % 360;
    const radius = 220;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.5, Math.min(1, 0.5 + 0.5 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-void bg-neon-bright border-neon-bright";
      case "in-progress":
        return "text-void bg-neon border-neon";
      case "pending":
        return "text-silver bg-surface border-steel";
      default:
        return "text-silver bg-surface border-steel";
    }
  };

  return (
    <div
      className="w-full h-[600px] md:h-[700px] flex flex-col items-center justify-center bg-void overflow-hidden relative"
      ref={containerRef}
    >
      {/* Console frame */}
      <div className="absolute inset-3 border border-neon/[0.08] rounded-2xl pointer-events-none" />
      <div className="absolute inset-6 border border-neon/[0.04] rounded-xl pointer-events-none" />

      {/* Scan lines overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(167,139,250,0.1) 2px, rgba(167,139,250,0.1) 4px)",
        }}
      />

      {/* Corner brackets */}
      {[
        "top-3 left-3 border-l-2 border-t-2 rounded-tl-xl",
        "top-3 right-3 border-r-2 border-t-2 rounded-tr-xl",
        "bottom-3 left-3 border-l-2 border-b-2 rounded-bl-xl",
        "bottom-3 right-3 border-r-2 border-b-2 rounded-br-xl",
      ].map((pos) => (
        <div key={pos} className={`absolute w-10 h-10 ${pos} border-neon/25 pointer-events-none`} />
      ))}

      {/* Status readout */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 flex items-center gap-4 pointer-events-none z-20">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-neon-bright animate-pulse shadow-lg shadow-neon/40" />
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-neon/70">
            SYS:ONLINE
          </span>
        </div>
        <div className="w-px h-3 bg-neon/15" />
        <span className="font-heading text-[10px] tracking-[0.35em] uppercase text-neon-bright/80 font-semibold">
          LEA Framework | Active
        </span>
        <div className="w-px h-3 bg-neon/15" />
        <div className="flex items-center gap-2">
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-neon/70">
            NODES:{timelineData.length}
          </span>
          <div className="w-2 h-2 rounded-full bg-neon-bright animate-pulse shadow-lg shadow-neon/40" />
        </div>
      </div>

      {/* Side readouts */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 flex flex-col gap-3 pointer-events-none z-20">
        {["PWR", "NET", "SIG"].map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <div
              className="w-1 h-6 rounded-full"
              style={{
                background: `linear-gradient(to top, rgba(124,58,237,${0.2 + i * 0.2}), rgba(167,139,250,${0.4 + i * 0.2}))`,
              }}
            />
            <span className="font-mono text-[7px] tracking-[0.2em] text-neon/40">{label}</span>
          </div>
        ))}
      </div>

      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          {/* Center node — reactor core */}
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-neon via-neon-glow to-neon-dim flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-neon-bright/20" style={{ animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite" }} />
            <div className="absolute w-24 h-24 rounded-full border border-neon/10" style={{ animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite 1s" }} />
            <div className="absolute w-32 h-32 rounded-full border border-neon/[0.06]" />
            <div className="absolute w-40 h-40 rounded-full border border-neon/[0.03] border-dashed" style={{ animation: "spin 30s linear infinite" }} />
            <div className="w-8 h-8 rounded-full bg-off-white/90 backdrop-blur-md shadow-lg shadow-neon/20" />
          </div>

          {/* Orbit rings */}
          <div className="absolute w-96 h-96 rounded-full border border-neon/[0.1]" />
          <div className="absolute w-80 h-80 rounded-full border border-neon/[0.05] border-dashed" style={{ animation: "spin 40s linear infinite reverse" }} />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-neon/[0.03]" />

          {/* Tick marks */}
          {Array.from({ length: 36 }).map((_, i) => {
            const a = (i / 36) * 360;
            const r = 192;
            const rad = (a * Math.PI) / 180;
            const isMajor = i % 3 === 0;
            return (
              <div
                key={`tick-${i}`}
                className={`absolute ${isMajor ? "w-px h-3 bg-neon/15" : "w-px h-1.5 bg-neon/8"} pointer-events-none`}
                style={{
                  left: `calc(50% + ${r * Math.cos(rad)}px)`,
                  top: `calc(50% + ${r * Math.sin(rad)}px)`,
                  transform: `rotate(${a}deg)`,
                }}
              />
            );
          })}

          {/* Connection lines from center to nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
            {timelineData.map((item, index) => {
              const pos = calculateNodePosition(index, timelineData.length);
              const cx = pos.x;
              const cy = pos.y;
              return (
                <line
                  key={`line-${item.id}`}
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${cx}px)`}
                  y2={`calc(50% + ${cy}px)`}
                  stroke="rgba(124,58,237,0.08)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              );
            })}
          </svg>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity,
                  transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), z-index 0s",
                }}
                onMouseEnter={() => {
                  // Pause rotation and expand — do NOT snap angle (causes glitch loop)
                  autoRotateRef.current = false;
                  setActiveNodeId(item.id);
                  setExpandedItems({ [item.id]: true });
                  const relatedItems = getRelatedItems(item.id);
                  const newPulse: Record<number, boolean> = {};
                  relatedItems.forEach((relId) => { newPulse[relId] = true; });
                  setPulseEffect(newPulse);
                }}
                onMouseLeave={() => {
                  setExpandedItems({});
                  setActiveNodeId(null);
                  setPulseEffect({});
                  autoRotateRef.current = true;
                }}
              >
                {/* Energy field */}
                <div
                  className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse duration-1000" : ""}`}
                  style={{
                    background: `radial-gradient(circle, rgba(124,58,237,0.25) 0%, rgba(124,58,237,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                />

                {/* Node */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500 ease-out ${
                    isExpanded
                      ? "bg-neon text-void border-neon-bright shadow-lg shadow-neon/40 scale-125"
                      : isRelated
                        ? "bg-neon/50 text-void border-neon-bright animate-pulse"
                        : "bg-surface text-neon-bright border-neon/30 hover:border-neon/50"
                  }`}
                >
                  <Icon size={24} />
                </div>

                {/* Label */}
                <div
                  className={`absolute top-[4.5rem] left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-heading font-bold tracking-[0.15em] uppercase transition-all duration-500 ease-out ${
                    isExpanded ? "text-neon-bright scale-110 text-glow" : "text-silver"
                  }`}
                >
                  {item.title}
                </div>

                {/* Expanded panel */}
                {isExpanded && (
                  <Card className="absolute top-24 left-1/2 -translate-x-1/2 w-72 bg-void/95 backdrop-blur-xl border-neon/25 shadow-xl shadow-neon/15 overflow-visible animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-neon/50" />
                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-neon/40" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-neon/40" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-neon/40" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-neon/40" />

                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge className={`px-2.5 py-0.5 text-[9px] tracking-wider font-heading ${getStatusStyles(item.status)}`}>
                          {item.status === "completed" ? "ONLINE" : item.status === "in-progress" ? "ACTIVE" : "STANDBY"}
                        </Badge>
                        <span className="text-[9px] font-mono text-neon/60">{item.date}</span>
                      </div>
                      <CardTitle className="text-base mt-2 text-off-white font-heading">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-silver/90">
                      <p>{item.content}</p>

                      <div className="mt-4 pt-3 border-t border-neon/15">
                        <div className="flex justify-between items-center text-[10px] mb-1.5">
                          <span className="flex items-center text-neon-bright/80 font-heading tracking-wider">
                            <Zap size={11} className="mr-1" />
                            Power Level
                          </span>
                          <span className="font-mono text-neon-bright font-bold">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-surface rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-neon-dim to-neon-bright rounded-full shadow-sm shadow-neon/30 transition-all duration-1000"
                            style={{ width: `${item.energy}%` }}
                          />
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-neon/15">
                          <div className="flex items-center mb-2">
                            <Link size={10} className="text-neon/60 mr-1" />
                            <h4 className="text-[9px] uppercase tracking-[0.2em] font-heading text-neon/60">
                              Connected Nodes
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find((i) => i.id === relatedId);
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-7 px-3 py-0 text-[10px] rounded-full border-neon/25 bg-transparent hover:bg-neon/10 text-silver hover:text-neon-bright transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={9} className="ml-1 text-neon/50" />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-6 pointer-events-none z-20">
        <div className="flex items-center gap-2">
          <div className={`w-1.5 h-1.5 rounded-full ${activeNodeId ? "bg-neon-bright" : "bg-neon/50"}`} />
          <span className="font-mono text-[8px] tracking-[0.25em] uppercase text-silver/50">
            {activeNodeId ? "TARGET:LOCKED" : "MODE:SCANNING"}
          </span>
        </div>
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />
        <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-silver/40">
          LEA.OS v3.0
        </span>
      </div>
    </div>
  );
}
