"use client";

import dynamic from "next/dynamic";
import { Compass, Wrench, Megaphone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const RadialOrbitalTimeline = dynamic(
  () => import("./RadialOrbitalTimeline"),
  { ssr: false }
);

const frameworkData = [
  {
    id: 1,
    title: "Locate",
    date: "Phase 01",
    content:
      "Strategic discovery and positioning. We identify where the brand should exist in the market and what makes it unique through deep research.",
    category: "Discovery",
    icon: Compass,
    relatedIds: [2],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Engineer",
    date: "Phase 02",
    content:
      "Designing and building the brand system — identity, digital presence, structural foundations. Turning strategy into a structured brand system.",
    category: "Build",
    icon: Wrench,
    relatedIds: [1, 3],
    status: "in-progress" as const,
    energy: 80,
  },
  {
    id: 3,
    title: "Amplify",
    date: "Phase 03",
    content:
      "Growth, influence, and scale. Activating the brand through content, marketing systems, and community ecosystems.",
    category: "Scale",
    icon: Megaphone,
    relatedIds: [2],
    status: "pending" as const,
    energy: 65,
  },
];

export default function FrameworkOrbital() {
  return (
    <section className="relative overflow-hidden starfield">
      <div className="orbital-lines" />

      <ScrollReveal className="text-center pt-24 md:pt-32 px-6 relative z-10">
        <p className="font-heading text-[10px] tracking-[0.4em] uppercase text-neon-bright mb-3">
          Command Center
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold">
          The LEA Framework
        </h2>
        <p className="text-muted text-sm mt-3 max-w-md mx-auto">
          Interact with our strategic phases. Click nodes to explore.
        </p>
      </ScrollReveal>

      <RadialOrbitalTimeline timelineData={frameworkData} />
    </section>
  );
}
