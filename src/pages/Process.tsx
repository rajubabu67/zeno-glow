import { motion } from "framer-motion";
import { ArrowRight, Search, Lightbulb, Play, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your brand, audience, and goals. Through collaborative sessions, we uncover insights that form the foundation of a winning strategy.",
    icon: Search,
    deliverables: ["Brand Analysis", "Audience Research", "Strategy Document"],
  },
  {
    number: "02",
    title: "Concept & Scripting",
    description: "Our creative team develops concepts that align with your vision. We craft compelling scripts and storyboards that bring ideas to life before production.",
    icon: Lightbulb,
    deliverables: ["Creative Concepts", "Scripts", "Storyboards"],
  },
  {
    number: "03",
    title: "Production",
    description: "This is where the magic happens. Our skilled team produces high-quality content with meticulous attention to detail and craftsmanship.",
    icon: Play,
    deliverables: ["Motion Graphics", "Video Production", "Sound Design"],
  },
  {
    number: "04",
    title: "Delivery & Optimization",
    description: "We deliver polished assets ready for launch. But we don't stop there—we analyze performance and optimize for maximum impact.",
    icon: Rocket,
    deliverables: ["Final Assets", "Platform Optimization", "Performance Reports"],
  },
];

const Process = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm text-primary uppercase tracking-widest mb-4">✦ Our Approach</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              From Chaos to <span className="text-gradient">Clarity.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Our proven 4-step process ensures every project is delivered on time, on budget, and beyond expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

            {steps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.1}>
                <div className={`relative flex flex-col md:flex-row gap-8 md:gap-16 mb-24 last:mb-0 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 1 ? "md:text-right" : ""}`}>
                    <div className={`card-glass p-8 ${index % 2 === 1 ? "md:ml-auto" : ""} max-w-lg`}>
                      <div className={`flex items-center gap-4 mb-6 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-14 h-14 rounded-2xl btn-gradient flex items-center justify-center">
                          <step.icon className="w-6 h-6" />
                        </div>
                        <span className="font-display text-4xl font-bold text-muted-foreground/30">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{step.description}</p>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                        {step.deliverables.map((item) => (
                          <span key={item} className="px-3 py-1 rounded-full bg-secondary text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-start justify-center">
                    <div className="w-4 h-4 rounded-full btn-gradient ring-4 ring-background" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Ready to start your journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
                Let's turn your vision into reality with our proven process.
              </p>
              <Link
                to="/contact"
                className="btn-gradient px-10 py-5 rounded-full font-semibold text-lg inline-flex items-center gap-3"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Process;
