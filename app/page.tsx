"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Motto from "@/components/Motto";
import FrameworkOrbital from "@/components/FrameworkOrbital";
import PillarsPreview from "@/components/PillarsPreview";
import CTASection from "@/components/CTASection";

const HeroCanvas = dynamic(() => import("@/components/HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="h-svh bg-void flex items-center justify-center">
      <div className="w-3 h-3 rounded-full bg-neon animate-pulse" />
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroCanvas />
        <Motto />
        <FrameworkOrbital />
        <PillarsPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
