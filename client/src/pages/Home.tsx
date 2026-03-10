import { Button } from "@/components/ui/button";
import { ChevronDown, Leaf, TrendingDown, Award, CheckCircle2, Star, Zap, Shield } from "lucide-react";
import { useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import CountdownTimer from "@/components/CountdownTimer";

/**
 * Design Philosophy: Modern Homesteading Landing Page v3.0 (2026)
 * - Sage Green + Warm Orange palette for trust and energy
 * - Playfair Display serif for titles (authority), Inter for body (readability)
 * - High-conversion psychology: urgency, social proof, scarcity, authority
 * - Clean, focused on core value proposition
 * - Video-first approach with countdown timer
 * - Real testimonials with specific results and locations
 */

const HOTMART_LINK = "https://hotmart.com/sanctuary-maker"; // Replace with actual Hotmart link

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Do I need a big yard?",
      answer:
        "No! This guide is specifically designed for urban and suburban living. You'll learn indoor gardening techniques, balcony setups, and container gardening that work in apartments, small homes, and limited spaces. Many of our readers have transformed tiny balconies into thriving mini-gardens.",
    },
    {
      question: "How much can I realistically save?",
      answer:
        "Most readers report saving $150-$300 per month on groceries alone, depending on their climate and what they grow. When you factor in reduced utility costs and eliminated food waste, the savings often exceed $300/month. At $12, this guide pays for itself in just 2-3 weeks.",
    },
    {
      question: "Is it beginner-friendly?",
      answer:
        "Absolutely. This guide assumes zero prior experience. Every step is broken down with detailed instructions, photos, and checklists. You'll start with the easiest projects first and build confidence as you progress. Most beginners see their first harvest within 3-4 weeks.",
    },
    {
      question: "What format do I receive?",
      answer:
        "You'll receive a comprehensive PDF guide (104 pages) with step-by-step instructions, plant diagrams, seasonal planting charts, and printable templates. Instant digital access means you can start reading and implementing today—no shipping, no waiting.",
    },
    {
      question: "When will I see results?",
      answer:
        "You can start growing herbs and greens indoors within days. Most readers harvest their first fresh herbs within 2 weeks and see measurable savings on their grocery bills within 4-6 weeks. Some quick-growing crops like microgreens are ready in just 7-10 days. The sooner you start, the sooner you'll see your first harvest and savings.",
    },
  ];

  const testimonials = [
    {
      name: "Megan L.",
      location: "Austin, TX",
      quote:
        "I've cut my grocery bill by around $60 a month just growing herbs on my apartment balcony. I can't believe I didn't start earlier. This guide made it so simple.",
      image: "👩‍🌾",
      savings: "$60/month",
    },
    {
      name: "James R.",
      location: "Portland, OR",
      quote:
        "Zero experience, but this made everything feel easy and doable. I'm now growing 80% of my salad greens indoors. So grateful for this guide.",
      image: "👨‍🌾",
      savings: "$180/month",
    },
    {
      name: "Ashley P.",
      location: "Brooklyn, NY",
      quote:
        "I started growing herbs and greens indoors in my tiny studio. I feel healthier, more in control of my home, and I'm saving money every single week.",
      image: "👩‍💼",
      savings: "$120/month",
    },
    {
      name: "David M.",
      location: "Denver, CO",
      quote:
        "This guide helped me understand energy independence. I've already reduced my utility bills by $80/month with the tips included. Best $12 I've ever spent.",
      image: "👨‍💻",
      savings: "$80/month",
    },
  ];

  const TrustBar = () => (
    <div className="flex flex-wrap justify-center gap-4 mt-4 pt-4 border-t border-border/30 text-xs text-muted-foreground">
      <div className="flex items-center gap-1">
        <Shield className="w-4 h-4 text-primary" />
        <span>Secure Payment</span>
      </div>
      <div className="flex items-center gap-1">
        <CheckCircle2 className="w-4 h-4 text-primary" />
        <span>7-Day Guarantee</span>
      </div>
      <div className="flex items-center gap-1">
        <Star className="w-4 h-4 text-accent" />
        <span>5,000+ Happy Readers</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold text-foreground">Sanctuary Maker</span>
          </div>
          <Button
            onClick={() => window.location.href = HOTMART_LINK}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            size="lg"
          >
            Get the Guide Now
          </Button>
        </div>
      </header>

      {/* Hero Section with Video */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-foreground leading-tight">
                Save $250–$300/Month While Growing Your Own Food
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover the proven system that helps you grow fresh food, slash grocery bills, and build a more resilient home—right where you live. Join 5,000+ people who've already transformed their homes.
              </p>
            </div>

            {/* Urgency Box */}
            <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
              <p className="text-lg font-semibold text-foreground mb-2">
                💰 People pay $49–$79 for guides like this…
              </p>
              <p className="text-accent text-2xl font-bold">
                But today you get the full system for just <span className="text-3xl">$12</span>
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                ⚡ This price is only available for the next 48 hours
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => window.location.href = HOTMART_LINK}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6"
              >
                🔥 Get Instant Access for $12
              </Button>
            </div>

            <TrustBar />

            {/* Social Proof */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">5,000+</div>
                <p className="text-sm text-muted-foreground">Happy Readers</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">104</div>
                <p className="text-sm text-muted-foreground">Pages of Content</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">7 Days</div>
                <p className="text-sm text-muted-foreground">Money-Back Guarantee</p>
              </div>
            </div>
          </div>

          {/* Right: Video Player */}
          <div className="relative">
            <VideoPlayer
              thumbnailUrl="https://d2xsxph8kpxj0f.cloudfront.net/310519663394128490/9RhZBNhytxSC8CviC8Nik4/hero-homesteading-4yi97qz9T4kmuK95QiXaPp.webp"
              title="See What's Inside the Modern Homesteading Guide"
              videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
              duration="2:45"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold shadow-lg">
              ▶ Watch Now
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-12 bg-muted/20">
        <div className="container max-w-2xl">
          <CountdownTimer />
        </div>
      </section>

      {/* Imagine 90 Days From Now Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-foreground">Imagine 90 Days From Now</h2>
              <p className="text-lg text-muted-foreground">
                Picture yourself with fresh herbs and vegetables at your fingertips, grocery bills cut in half, and the confidence that comes from knowing exactly where your food comes from.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "🌱", title: "Week 1-2", desc: "First herbs sprouting, you're already planning your garden" },
                { icon: "🥬", title: "Week 3-6", desc: "First harvest! Fresh salad greens on your table, savings visible" },
                { icon: "💰", title: "Day 90", desc: "Hundreds in savings, thriving garden, complete confidence" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-border text-center">
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-foreground">
              Life keeps getting more expensive… but your options don't have to shrink.
            </h2>
            <p className="text-lg text-muted-foreground">
              If you've felt the pressure of rising prices, unhealthy food, unstable systems, or stress that never seems to end… you're not alone. This guide gives you back control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-white p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">❌ Before</h3>
              <ul className="space-y-4">
                {[
                  "Overpaying for groceries ($400–$500/month)",
                  "Rising utility bills ($150+/month)",
                  "Stress and uncertainty about food quality",
                  "No systems, no plan, feeling unprepared",
                  "Dependent on broken supply chains",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-foreground">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-primary/5 p-8 rounded-xl border-2 border-primary">
              <h3 className="text-2xl font-bold text-primary mb-6">✔ After</h3>
              <ul className="space-y-4">
                {[
                  "Fresh homegrown food (save $150–$200/month)",
                  "Lower utility costs through smart techniques",
                  "Peace of mind with healthy, organic produce",
                  "Simple step-by-step routines anyone can follow",
                  "A more resilient, self-reliant home",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-foreground">What You'll Learn</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical, actionable strategies you can implement immediately in your home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🌱", title: "Urban & Suburban Food-Growing Systems", desc: "Proven techniques for any space" },
              { icon: "🏠", title: "Indoor Gardens & Balcony Setups", desc: "Transform small spaces into productive gardens" },
              { icon: "🪱", title: "Worm Composting & Soil Hacks", desc: "Create nutrient-rich soil for free" },
              { icon: "💧", title: "Water-Saving & Storage Methods", desc: "Conserve resources and lower bills" },
              { icon: "⚡", title: "Mini-Energy Independence", desc: "Simple techniques to reduce utility costs" },
              { icon: "📅", title: "Seasonal Planting Charts", desc: "Know exactly what to grow and when" },
              { icon: "🛡️", title: "Emergency Readiness Basics", desc: "Build food security for your family" },
              { icon: "✅", title: "Checklists & Action Plans", desc: "Step-by-step templates you can use today" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border-2 border-primary rounded-xl p-8 text-center">
            <p className="text-muted-foreground mb-2">Total Real-World Value:</p>
            <p className="text-4xl font-bold text-primary mb-4">$79+</p>
            <p className="text-2xl text-foreground">
              Your price today: <span className="text-accent font-bold">Only $12</span>
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-foreground">Who This Is For</h2>
              <p className="text-lg text-muted-foreground">
                This guide is perfect for you if you're:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Living in an apartment or small home with limited space",
                "Tired of paying $400-500/month for groceries",
                "Concerned about food quality and where it comes from",
                "Ready to take control of your finances and health",
                "New to gardening and need step-by-step guidance",
                "Looking for practical, proven strategies that actually work",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Expert Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Author Image */}
            <div className="order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663394128490/9RhZBNhytxSC8CviC8Nik4/emily-carter-portrait_7b134777.png"
                alt="Emily Carter, Modern Homesteading Expert"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-xl"
              />
            </div>

            {/* Author Bio */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-foreground">Meet Your Guide Creator</h2>
                <p className="text-lg text-muted-foreground">
                  Hi, I'm Emily Carter. For the past 8 years, I've been helping thousands of people transform their homes into self-reliant sanctuaries.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What started as a small apartment balcony garden has become a mission to prove that anyone—regardless of space or experience—can grow their own food and take control of their finances.
                </p>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="font-bold text-foreground mb-3">Why I Created This Guide:</h4>
                <p className="text-muted-foreground">
                  I realized that most homesteading resources assume you have land, time, and money. This guide is different. It's designed for real people living in real homes, with real budgets. Every technique has been tested by thousands of readers like you.
                </p>
              </div>

              <div className="flex gap-4">
                <div>
                  <Award className="w-6 h-6 text-primary mb-2" />
                  <p className="font-semibold text-foreground">8+ Years</p>
                  <p className="text-sm text-muted-foreground">of Homesteading</p>
                </div>
                <div>
                  <Star className="w-6 h-6 text-primary mb-2" />
                  <p className="font-semibold text-foreground">5,000+</p>
                  <p className="text-sm text-muted-foreground">Happy Readers</p>
                </div>
                <div>
                  <TrendingDown className="w-6 h-6 text-primary mb-2" />
                  <p className="font-semibold text-foreground">$250–$300</p>
                  <p className="text-sm text-muted-foreground">Avg. Monthly Savings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Real & Detailed */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-foreground">Real Results From Real People</h2>
            <p className="text-lg text-muted-foreground">See how others are saving money and building self-reliance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="bg-accent/20 text-accent font-bold px-3 py-1 rounded-full text-sm">
                    {testimonial.savings}
                  </span>
                </div>
                <p className="text-foreground mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <span className="text-3xl">{testimonial.image}</span>
                  <div>
                    <p className="font-bold text-foreground">— {testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens After Purchase Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-foreground">What Happens After Purchase</h2>
              <p className="text-lg text-muted-foreground">
                Here's exactly what you'll get and how to get started
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Instant Access",
                  desc: "Immediately after purchase, you'll receive a download link to the complete 104-page PDF guide",
                },
                {
                  step: "2",
                  title: "Start Reading",
                  desc: "Begin with Chapter 1 and follow the step-by-step instructions. Most people start their first project within hours",
                },
                {
                  step: "3",
                  title: "See Results",
                  desc: "Within 2-4 weeks, you'll have your first harvest and start seeing savings on your grocery bills",
                },
                {
                  step: "4",
                  title: "Build Your System",
                  desc: "Follow the seasonal planting charts and templates to create a year-round homesteading system",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-24 bg-primary/10 border-t-4 border-primary">
        <div className="container text-center space-y-8">
          <div>
            <h2 className="text-foreground mb-4">You're Protected by a 7-Day No-Risk Guarantee</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Try the guide for 7 days. If it doesn't help you save money, grow food, or feel more self-reliant… we refund you instantly. No questions asked.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: "✓", label: "Your investment is completely protected" },
              { icon: "✓", label: "Instant digital access (no waiting)" },
              { icon: "✓", label: "Full refund if not satisfied" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-primary">{item.icon}</div>
                <p className="text-foreground font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container max-w-3xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-foreground">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know before getting started</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform ${
                      expandedFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 border-t border-border bg-muted/20">
                    <p className="text-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-white">Start Building a Self-Reliant, Healthier, More Affordable Life Today</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Why pay $49–$79 for the same information? You can get the full system today for just $12. This special price ends in 48 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.location.href = HOTMART_LINK}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6"
            >
              🔥 Get Instant Access for $12
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-white/80">
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>7-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span>5,000+ Happy Readers</span>
            </div>
          </div>

          <p className="text-white/80 text-sm">
            Every day you wait is another day you pay more for food, energy, and essentials. Start saving today.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-white/20">
            <div className="text-white">
              <p className="font-bold">Instant Digital Access</p>
              <p className="text-sm text-white/80">Start reading immediately</p>
            </div>
            <div className="text-white">
              <p className="font-bold">7-Day Guarantee</p>
              <p className="text-sm text-white/80">Full refund if not satisfied</p>
            </div>
            <div className="text-white">
              <p className="font-bold">Complete System</p>
              <p className="text-sm text-white/80">Everything you need to succeed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-bold mb-2">Sanctuary Maker</p>
              <p className="text-white/60 text-sm">
                Helping people build self-reliant, healthier, more affordable homes.
              </p>
            </div>
            <div>
              <p className="font-bold mb-4">Quick Links</p>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">About Emily</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4">Legal</p>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
            <p>© 2026 Sanctuary Maker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
