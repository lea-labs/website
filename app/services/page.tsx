import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { FallingPattern } from "@/components/FallingPattern";
import ServiceCard from "@/components/ServiceCard";

interface Chip {
  name: string;
  tip: string;
  retainer: boolean;
}

interface Group {
  label: string;
  chips: Chip[];
}

interface Pillar {
  num: string;
  internal: string;
  name: string;
  desc: string;
  count: number;
  groups: Group[];
}

const pillars: Pillar[] = [
  {
    num: "01",
    internal: "Brand Architecture & Strategic Positioning",
    name: "Build Your Brand",
    desc: "We define who you are, what you stand for, and how the market sees you before you spend a single dirham on marketing.",
    count: 7,
    groups: [
      {
        label: "Core Architecture",
        chips: [
          { name: "Brand Strategy & Positioning", tip: "The master plan for how your brand wins in the market and owns a distinct space in the customer's mind.", retainer: false },
          { name: "Naming, Tagline & Visual Identity", tip: "A memorable name, a hook that sticks, and the full visual soul: logos, colors, typography.", retainer: false },
          { name: "GTM & Growth Strategy", tip: "The tactical roadmap for launching and scaling, from day one to long-term market expansion.", retainer: false },
          { name: "Brand Guidelines Development", tip: "A rulebook ensuring your brand looks, sounds, and feels consistent everywhere it appears.", retainer: false },
        ],
      },
      {
        label: "Research & Intelligence",
        chips: [
          { name: "Market Research & Competitor Analysis", tip: "Deep-diving into industry trends and scouting rivals to keep you two steps ahead, always.", retainer: false },
          { name: "Brand Audit", tip: "A full health check: what's working, what's broken, and what needs rebuilding from scratch.", retainer: false },
          { name: "Customer Persona Development", tip: "Detailed profiles of your ideal buyers so every message feels personal and every campaign lands.", retainer: false },
        ],
      },
    ],
  },
  {
    num: "02",
    internal: "Digital Ecosystem Development",
    name: "Build Your Digital Presence",
    desc: "We design and build your website, apps, and digital systems so your online presence works as hard as you do.",
    count: 7,
    groups: [
      {
        label: "Design & Build",
        chips: [
          { name: "Website Design & Development", tip: "Your high-performance digital home, designed for impact, built for speed, engineered to convert.", retainer: false },
          { name: "E-Commerce Development", tip: "Secure, seamless online stores built to make buying effortless and selling scalable.", retainer: false },
          { name: "UI/UX Design", tip: "Interfaces that are beautiful to look at, intuitive to use, and engineered to retain users.", retainer: false },
          { name: "Web & Mobile App Development", tip: "Custom browser tools and iOS/Android apps built for your specific business needs.", retainer: false },
          { name: "CMS Development", tip: "Systems that give you full control to edit your content without needing a developer.", retainer: false },
        ],
      },
      {
        label: "Ongoing Operations",
        chips: [
          { name: "CRM Integration & Automation", tip: "Connecting your tools and building workflows that permanently eliminate manual work.", retainer: true },
          { name: "Funnel Optimization & Maintenance", tip: "Continuous improvement of the digital path that turns more visitors into paying customers.", retainer: true },
        ],
      },
    ],
  },
  {
    num: "03",
    internal: "Content Engine & Multi-Channel Storytelling",
    name: "Tell Your Story",
    desc: "We create the content, visuals, and media that give your brand a voice and make people stop scrolling.",
    count: 8,
    groups: [
      {
        label: "Written & Social",
        chips: [
          { name: "Content Strategy & Calendars", tip: "Planning what to say, who to say it to, where and when with surgical precision every month.", retainer: true },
          { name: "Copywriting & Ghostwriting", tip: "Persuasive writing that drives action, in your voice or ours, across every format.", retainer: true },
          { name: "Thought Leadership Content", tip: "High-level insights that position you as the undisputed authority in your space.", retainer: true },
          { name: "Social Media Management", tip: "End-to-end management of posts, reels, and stories tailored for every platform.", retainer: true },
        ],
      },
      {
        label: "Visual & Production",
        chips: [
          { name: "Video Production & Motion Graphics", tip: "High-quality filming, editing, and animation for commercials, reels, and explainer content.", retainer: false },
          { name: "Photography & Presentation Design", tip: "Professional brand imagery and decks that tell compelling visual stories.", retainer: false },
          { name: "Podcast Production", tip: "Full-service audio shows from recording to distribution, building your industry authority.", retainer: true },
          { name: "Visual Identity Assets", tip: "Digital graphics, icons, and templates for consistent on-brand daily use.", retainer: false },
        ],
      },
    ],
  },
  {
    num: "04",
    internal: "Revenue Acceleration & Acquisition",
    name: "Grow Your Audience & Revenue",
    desc: "We run your ads, SEO, and campaigns engineered to bring in leads, traffic, and sales that compound.",
    count: 7,
    groups: [
      {
        label: "Get Found & Get Clicks",
        chips: [
          { name: "Technical & Local SEO", tip: "Optimizing your site so Google ranks you higher and local customers find you first.", retainer: true },
          { name: "Google Ads & Search Marketing", tip: "Paid campaigns that put you at the top of results the moment someone is ready to buy.", retainer: true },
          { name: "Meta, LinkedIn & YouTube Ads", tip: "Targeted campaigns across every major platform, built for precise reach and return.", retainer: true },
          { name: "Retargeting Campaigns", tip: "Ads shown to people who already visited, bringing them back until they convert.", retainer: true },
        ],
      },
      {
        label: "Convert & Measure",
        chips: [
          { name: "Email Marketing & Lead Nurturing", tip: "Automated sequences that guide cold prospects all the way to a sale, on autopilot.", retainer: true },
          { name: "Analytics & Reporting", tip: "Full visibility into where your budget goes and what results it generates each month.", retainer: true },
          { name: "Performance Consulting", tip: "Expert guidance on reallocating spend for maximum ROI so not a dirham goes to waste.", retainer: true },
        ],
      },
    ],
  },
  {
    num: "05",
    internal: "Reputation Management & Influence Capital",
    name: "Own Your Space",
    desc: "We build your community, shape your reputation, and position you as the authority in your industry so people come to you, not the other way around.",
    count: 11,
    groups: [
      {
        label: "Community & Influence",
        chips: [
          { name: "Community Building", tip: "Creating dedicated spaces where your audience connects and compounds loyalty over time.", retainer: true },
          { name: "Personal Brand Engineering", tip: "Shaping the public profile and authority of founders, CEOs, and key leaders.", retainer: true },
          { name: "Influencer Strategy", tip: "Identifying and managing creator partnerships that amplify your brand authentically.", retainer: false },
          { name: "Thought Leadership Programs", tip: "Large-scale campaigns to make a person or brand the undisputed go-to expert.", retainer: true },
        ],
      },
      {
        label: "PR & Reputation",
        chips: [
          { name: "PR Strategy & Media Placement", tip: "Getting your brand featured in news, magazines, TV, and high-authority media.", retainer: true },
          { name: "Reputation Management", tip: "Monitoring and protecting your public image proactively, not just when things go wrong.", retainer: true },
          { name: "Corporate Communications", tip: "Professional messaging for stakeholders, investors, partners, and internal teams.", retainer: true },
          { name: "Event & Conference Coverage", tip: "Live digital media, filming, and tech support for exhibitions and brand activations.", retainer: false },
        ],
      },
      {
        label: "Network & Advocacy",
        chips: [
          { name: "Partnership Strategy", tip: "Collaborating with aligned brands on deals structured for compounding mutual growth.", retainer: false },
          { name: "Brand Advocacy Systems", tip: "Turning your happiest customers into a word-of-mouth sales force that works 24/7.", retainer: true },
          { name: "Engagement & Collaboration Systems", tip: "Tools, workflows, and strategy to keep your audience and teams deeply connected.", retainer: true },
        ],
      },
    ],
  },
];

const processSteps = [
  { label: "Discovery Call", desc: "Understanding your vision" },
  { label: "LEA Audit", desc: "Deep-dive analysis" },
  { label: "Strategy Deck", desc: "Custom roadmap" },
  { label: "Execution", desc: "Systematic implementation" },
  { label: "Optimization", desc: "Continuous refinement" },
];

function PillarSection({ pillar, index }: { pillar: Pillar; index: number }) {
  const isOdd = index % 2 !== 0;

  return (
    <section
      className={`py-20 md:py-28 px-6 relative overflow-hidden starfield-dense ${isOdd ? "bg-abyss" : ""}`}
    >
      <div className="orbital-lines" />

      {/* Ambient glow per section */}
      <div
        className="glow-ambient"
        style={{
          top: "30%",
          [index % 2 === 0 ? "right" : "left"]: "-200px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <ScrollReveal>
            <div className="relative">
              {/* Number accent */}
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="font-heading text-5xl md:text-6xl font-bold leading-none tracking-tight select-none"
                  style={{
                    WebkitTextStroke: "1.5px rgba(167,139,250,0.5)",
                    color: "transparent",
                    filter: "drop-shadow(0 0 12px rgba(124,58,237,0.3))",
                  }}
                >
                  {pillar.num}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-neon/30 to-transparent" />
              </div>

              <div className="relative z-10">
                <p className="text-neon-bright/60 text-[10px] font-heading tracking-[0.3em] uppercase mb-3">
                  {pillar.internal}
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-off-white text-glow">
                  {pillar.name}
                </h2>
                <p className="text-silver text-sm md:text-base leading-relaxed max-w-md mb-6">
                  {pillar.desc}
                </p>

                <span className="inline-block px-3 py-1 border border-dashed border-neon/30 text-neon-bright/70 text-[9px] font-heading tracking-[0.2em] uppercase rounded-sm">
                  {pillar.count} Services
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right column — Service names with hover descriptions */}
          <ScrollReveal delay={150}>
            <div className="space-y-8 pt-2">
              {pillar.groups.map((cat) => (
                <div key={cat.label}>
                  <h3 className="font-heading text-[11px] font-semibold tracking-[0.3em] uppercase text-neon-bright mb-4 flex items-center gap-3">
                    {cat.label}
                    <span className="flex-1 h-px bg-neon/10" />
                  </h3>
                  <div className="space-y-2.5">
                    {cat.chips.map((item) => (
                      <ServiceCard
                        key={item.name}
                        name={item.name}
                        tip={item.tip}
                        retainer={item.retainer}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero with falling pattern */}
        <section className="relative min-h-[70vh] overflow-hidden flex items-center justify-center">
          <FallingPattern
            color="#7c3aed"
            backgroundColor="#050510"
            duration={80}
            blurIntensity="0.3em"
            density={1}
          />

          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-void/30 via-transparent to-void/70 pointer-events-none z-[2]" />

          <div className="max-w-4xl mx-auto text-center relative z-10 px-6 py-36">
            <ScrollReveal>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow">
                Engineered for Growth
              </h1>
              <p className="text-silver text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                We don&apos;t just build brands. We architect systems that compound
                influence, trust, and revenue.
              </p>

              {/* Legend */}
              <div className="flex flex-wrap gap-6 items-center justify-center">
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-[1.5px] bg-neon-bright shadow-[0_0_4px_rgba(167,139,250,0.5)]" />
                  <span className="font-heading text-[9px] tracking-[0.2em] uppercase text-silver/50">Monthly Retainer</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-[1.5px] bg-steel/50" />
                  <span className="font-heading text-[9px] tracking-[0.2em] uppercase text-silver/50">One-Time Project</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Scroll indicator */}
            <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
              <span className="font-heading text-[8px] tracking-[0.3em] uppercase text-silver/50">Explore Services</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-neon-bright/50 animate-bounce">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>
        </section>

        {/* Pillars */}
        {pillars.map((pillar, index) => (
          <PillarSection key={pillar.num} pillar={pillar} index={index} />
        ))}

        {/* Process */}
        <section className="py-24 md:py-32 px-6 relative overflow-hidden starfield starfield-dense">
          <div className="orbital-lines" />
          <div className="glow-ambient top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="max-w-5xl mx-auto relative z-10">
            <ScrollReveal className="text-center mb-14">
              <p className="font-heading text-[11px] tracking-[0.4em] uppercase text-neon-bright mb-3">
                How We Work
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-glow">
                Our Process
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/25 to-transparent" />
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  {processSteps.map((step, i) => (
                    <div key={step.label} className="text-center relative group">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-neon/25 bg-surface flex items-center justify-center relative z-10 group-hover:border-neon/50 group-hover:shadow-lg group-hover:shadow-neon/10 transition-all">
                        <span className="font-mono text-sm text-neon-bright font-bold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-heading text-xs font-bold tracking-wider mb-1 text-off-white">
                        {step.label}
                      </h3>
                      <p className="text-silver text-xs">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <CTASection heading="Let's Architect Your Growth System" />
      </main>
      <Footer />
    </>
  );
}
