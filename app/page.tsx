import { Navbar1 } from "@/components/ui/navbar-1";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Feature108 } from "@/components/ui/feature108";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { TestimonialsSection } from "@/components/ui/testimonials-columns-1";
import { WorldMapSection } from "@/components/ui/world-map";
import { FaqsSection } from "@/components/ui/faqs-1";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <Navbar1 />
      </div>

      {/* Hero Section with 3D Spline Scene */}
      <section id="hero" className="relative w-full">
        <Card className="w-full min-h-[600px] bg-black/[0.96] relative overflow-hidden rounded-none border-x-0">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
          <div className="flex h-full min-h-[600px]">
            <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-white/60 text-sm mb-6 w-fit">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Now accepting pre-orders — ships Q3 2026
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
                The Future of<br />
                <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                  Human Labor
                </span>
              </h1>
              <p className="mt-6 text-neutral-300 max-w-lg text-lg leading-relaxed">
                NOVA-1 is the world&apos;s most advanced general-purpose humanoid robot. Built to work alongside humans in manufacturing, logistics, and healthcare — at a fraction of the cost.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-white/90 transition-colors"
                >
                  Pre-Order Now
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white/5 transition-colors"
                >
                  Watch Demo
                </a>
              </div>
            </div>
            <div className="flex-1 relative hidden md:block">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </section>

      {/* Logo Cloud — Partners */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-8 text-center font-medium text-lg text-muted-foreground tracking-tight md:text-2xl">
            Engineered with{" "}
            <span className="font-semibold text-primary">world-class technology partners</span>
          </h2>
          <LogoCloud />
        </div>
      </section>

      {/* Features Tabs */}
      <section id="features" className="bg-muted/20">
        <Feature108 />
      </section>

      {/* Interactive Evervault Cards */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for the Real World</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              NOVA-1 is engineered to the limits of what&apos;s physically possible. Every number represents years of research and relentless iteration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { text: "42", label: "Actuated Joints", desc: "Full-body articulation for human-equivalent dexterity across every task." },
              { text: "8hr", label: "Battery Life", desc: "Full-day operation on a single charge. Hot-swap systems available for 24/7 deployments." },
              { text: "55lb", label: "Payload Capacity", desc: "Industry-leading lifting strength for real-world industrial and logistics environments." },
            ].map(({ text, label, desc }) => (
              <div
                key={text}
                className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start p-4 relative h-[26rem] rounded-2xl"
              >
                <Icon className="absolute h-6 w-6 -top-3 -left-3 text-foreground" />
                <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-foreground" />
                <Icon className="absolute h-6 w-6 -top-3 -right-3 text-foreground" />
                <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-foreground" />
                <EvervaultCard text={text} />
                <h3 className="text-foreground mt-2 text-sm font-semibold">{label}</h3>
                <p className="text-xs border font-light border-border rounded-full mt-2 text-foreground px-3 py-1">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* World Map — Global Reach */}
      <section className="py-24 bg-muted/20 w-full">
        <div className="max-w-7xl mx-auto text-center px-4">
          <p className="font-bold text-xl md:text-4xl text-foreground mb-2">
            Deployed <span className="text-muted-foreground">Worldwide</span>
          </p>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto py-4 mb-8">
            From Detroit to Dubai, NOVA-1 is already operating in pilot facilities across six continents. Join the manufacturers, logistics leaders, and healthcare systems transforming their operations.
          </p>
          <WorldMapSection />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background">
        <TestimonialsSection />
      </section>

      {/* FAQ */}
      <section className="bg-muted/20 flex justify-center">
        <FaqsSection />
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="url(#footer_grad)" />
              <defs>
                <linearGradient id="footer_grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF9966" />
                  <stop offset="1" stopColor="#FF5E62" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-semibold text-sm">Nova Robotics</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2026 Nova Robotics. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
