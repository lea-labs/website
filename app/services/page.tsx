import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

const pillars = [
  {
    num: "01",
    title: "Brand Architecture & Strategic Positioning",
    focus: "Engineering clarity and structure.",
    cats: [
      { name: "Core Architecture", items: ["Brand Strategy", "Brand Positioning", "Naming & Tagline", "Rebranding"] },
      { name: "Intelligence", items: ["Market Research", "Competitor Analysis", "Brand Audit", "Customer Persona"] },
      { name: "Visual Logic", items: ["Brand Identity Design", "Guidelines Development", "GTM Strategy", "Growth Strategy"] },
    ],
  },
  {
    num: "02",
    title: "Digital Ecosystem Development",
    focus: "Building foundations for reality.",
    cats: [
      { name: "Web Systems", items: ["Website Design", "Web Development", "E-Commerce Dev", "Landing Pages"] },
      { name: "Applications", items: ["Web App Development", "Mobile App Dev", "UI/UX Design", "CMS Development"] },
      { name: "Operations", items: ["CRM Integration", "Automation", "Maintenance", "Funnel Optimization"] },
    ],
  },
  {
    num: "03",
    title: "Content Engine & Multi-Channel Storytelling",
    focus: "Communication with intention.",
    cats: [
      { name: "Narrative", items: ["Content Strategy", "Copywriting", "Ghost-writing", "Thought Leadership"] },
      { name: "Visual Assets", items: ["Video Production", "Motion Graphics", "Photography", "Presentation Design"] },
      { name: "Distribution", items: ["Social Media Management", "Podcast Production", "Visual Identity Assets", "Content Calendars"] },
    ],
  },
  {
    num: "04",
    title: "Revenue Acceleration & Acquisition",
    focus: "Accelerating measurable impact.",
    cats: [
      { name: "Visibility", items: ["Technical SEO", "Local SEO", "Search Marketing", "Google Ads"] },
      { name: "Paid Systems", items: ["Meta Ads", "LinkedIn Ads", "YouTube Ads", "Retargeting"] },
      { name: "Optimization", items: ["Email Marketing", "Lead Nurturing", "Analytics & Reporting", "Performance Consulting"] },
    ],
  },
  {
    num: "05",
    title: "Reputation Management & Influence Capital",
    focus: "Leveraging human and network power.",
    cats: [
      { name: "Influence", items: ["Community Building", "Personal Brand Engineering", "Influencer Strategy", "Thought Leadership Programs"] },
      { name: "PR & Comms", items: ["PR Strategy", "Media Placement", "Reputation Management", "Corporate Communications"] },
      { name: "Eco-Systems", items: ["Partnership Strategy", "Brand Advocacy Systems", "Engagement Strategy", "Collaboration Systems"] },
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

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 starfield overflow-hidden">
          <div className="orbital-lines" />
          <div className="glow-ambient top-20 left-1/2 -translate-x-1/2" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Engineered for Growth
            </h1>
            <p className="text-silver text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We don&apos;t just build brands. We architect systems that compound
              influence, trust, and revenue.
            </p>
          </div>
        </section>

        {/* Pillars */}
        {pillars.map((pillar, index) => (
          <section
            key={pillar.num}
            className={`py-20 md:py-28 px-6 relative overflow-hidden ${
              index % 2 === 0 ? "" : "bg-abyss"
            }`}
          >
            <div className="orbital-lines" />
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <ScrollReveal>
                  <span className="font-heading text-6xl md:text-8xl font-bold text-neon/[0.06] select-none block">
                    {pillar.num}
                  </span>
                  <h2 className="font-heading text-2xl md:text-4xl font-bold -mt-6 mb-3">
                    {pillar.title}
                  </h2>
                  <p className="text-muted text-xs tracking-[0.2em] uppercase font-heading">
                    {pillar.focus}
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={150}>
                  <div className="space-y-8">
                    {pillar.cats.map((cat) => (
                      <div key={cat.name}>
                        <h3 className="font-heading text-[10px] font-semibold tracking-[0.3em] uppercase text-neon-bright mb-3">
                          {cat.name}
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {cat.items.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-2 text-sm text-silver/70"
                            >
                              <div className="w-1 h-1 rounded-full bg-neon/30" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        ))}

        {/* Process */}
        <section className="py-24 md:py-32 px-6 relative overflow-hidden starfield">
          <div className="orbital-lines" />
          <div className="max-w-5xl mx-auto relative z-10">
            <ScrollReveal className="text-center mb-14">
              <p className="font-heading text-[10px] tracking-[0.4em] uppercase text-neon-bright mb-3">
                How We Work
              </p>
              <h2 className="font-heading text-3xl md:text-5xl font-bold">
                Our Process
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  {processSteps.map((step, i) => (
                    <div key={step.label} className="text-center relative">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-neon/20 bg-surface flex items-center justify-center relative z-10">
                        <span className="font-mono text-xs text-neon-bright">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-heading text-xs font-semibold tracking-wider mb-1">
                        {step.label}
                      </h3>
                      <p className="text-muted text-[10px]">{step.desc}</p>
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
