"use client";

import { useState, useEffect, useRef } from "react";
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
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState: Record<number, boolean> = {};
      Object.keys(prev).forEach((key) => {
        if (parseInt(key) !== id) newState[parseInt(key)] = false;
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const relatedItems = getRelatedItems(id);
        const newPulse: Record<number, boolean> = {};
        relatedItems.forEach((relId) => { newPulse[relId] = true; });
        setPulseEffect(newPulse);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoRotate) {
      timer = setInterval(() => {
        setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
      }, 50);
    }
    return () => { if (timer) clearInterval(timer); };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const targetAngle = (nodeIndex / timelineData.length) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));
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
      onClick={handleContainerClick}
    >
      {/* Control panel frame lines */}
      <div className="absolute inset-4 border border-neon/[0.06] rounded-lg pointer-events-none" />
      <div className="absolute inset-8 border border-neon/[0.03] rounded-lg pointer-events-none" />

      {/* Corner accents — spaceship HUD */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-neon/20 rounded-tl-lg pointer-events-none" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-neon/20 rounded-tr-lg pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-neon/20 rounded-bl-lg pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-neon/20 rounded-br-lg pointer-events-none" />

      {/* Status readout — top */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-3 pointer-events-none z-20">
        <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-neon/60">
          LEA Framework — Active
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
      </div>

      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Center node — reactor core */}
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-neon via-neon-glow to-neon-dim animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-neon-bright/20 animate-ping opacity-70" />
            <div className="absolute w-24 h-24 rounded-full border border-neon/10 animate-ping opacity-50" style={{ animationDelay: "0.5s" }} />
            <div className="absolute w-32 h-32 rounded-full border border-neon/[0.05]" />
            <div className="w-8 h-8 rounded-full bg-off-white/90 backdrop-blur-md" />
          </div>

          {/* Orbit ring */}
          <div className="absolute w-96 h-96 rounded-full border border-neon/[0.08]" />
          <div className="absolute w-80 h-80 rounded-full border border-neon/[0.04] border-dashed" />

          {/* Tick marks on orbit ring */}
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i / 24) * 360;
            const r = 192;
            const rad = (a * Math.PI) / 180;
            return (
              <div
                key={`tick-${i}`}
                className="absolute w-px h-2 bg-neon/10 pointer-events-none"
                style={{
                  left: `calc(50% + ${r * Math.cos(rad)}px)`,
                  top: `calc(50% + ${r * Math.sin(rad)}px)`,
                  transform: `rotate(${a}deg)`,
                }}
              />
            );
          })}

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
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Energy field */}
                <div
                  className={`absolute rounded-full -inset-1 ${isPulsing ? "animate-pulse duration-1000" : ""}`}
                  style={{
                    background: `radial-gradient(circle, rgba(124,58,237,0.2) 0%, rgba(124,58,237,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                />

                {/* Node */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    isExpanded
                      ? "bg-neon text-void border-neon-bright shadow-lg shadow-neon/30 scale-150"
                      : isRelated
                        ? "bg-neon/50 text-void border-neon-bright animate-pulse"
                        : "bg-surface text-neon-bright border-neon/30"
                  }`}
                >
                  <Icon size={16} />
                </div>

                {/* Label */}
                <div
                  className={`absolute top-12 whitespace-nowrap text-[10px] font-heading font-semibold tracking-[0.15em] uppercase transition-all duration-300 ${
                    isExpanded ? "text-neon-bright scale-110" : "text-silver/70"
                  }`}
                >
                  {item.title}
                </div>

                {/* Expanded panel — ship's data readout */}
                {isExpanded && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-void/95 backdrop-blur-xl border-neon/20 shadow-xl shadow-neon/10 overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-neon/40" />
                    {/* HUD corners */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-neon/30" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-neon/30" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-neon/30" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-neon/30" />

                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge className={`px-2 text-[9px] tracking-wider ${getStatusStyles(item.status)}`}>
                          {item.status === "completed" ? "ONLINE" : item.status === "in-progress" ? "ACTIVE" : "STANDBY"}
                        </Badge>
                        <span className="text-[9px] font-mono text-neon/50">{item.date}</span>
                      </div>
                      <CardTitle className="text-sm mt-2 text-off-white">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-silver/80">
                      <p>{item.content}</p>

                      <div className="mt-4 pt-3 border-t border-neon/10">
                        <div className="flex justify-between items-center text-[10px] mb-1">
                          <span className="flex items-center text-neon-bright/70">
                            <Zap size={10} className="mr-1" />
                            Power Level
                          </span>
                          <span className="font-mono text-neon-bright">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-surface rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-neon-dim to-neon-bright rounded-full"
                            style={{ width: `${item.energy}%` }}
                          />
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-neon/10">
                          <div className="flex items-center mb-2">
                            <Link size={10} className="text-neon/50 mr-1" />
                            <h4 className="text-[9px] uppercase tracking-[0.2em] font-heading text-neon/50">
                              Connected Nodes
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find((i) => i.id === relatedId);
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-6 px-2 py-0 text-[10px] rounded-none border-neon/20 bg-transparent hover:bg-neon/10 text-silver hover:text-neon-bright transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={8} className="ml-1 text-neon/40" />
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

      {/* Bottom status bar — spaceship HUD */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 pointer-events-none z-20">
        <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-muted/40">SYS:NOMINAL</span>
        <div className="w-px h-3 bg-neon/10" />
        <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-muted/40">NODES:{timelineData.length}</span>
        <div className="w-px h-3 bg-neon/10" />
        <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-muted/40">
          {activeNodeId ? "LOCKED" : "SCANNING"}
        </span>
      </div>
    </div>
  );
}
