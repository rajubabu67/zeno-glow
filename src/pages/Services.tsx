import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
  {
    id: 1,
    title: "Motion Graphics",
    subtitle: "Explainers • Lottie • UI Motion",
    description: "We craft stunning motion graphics that bring your brand to life. From explainer videos to micro-interactions, our animations captivate audiences and communicate complex ideas with elegance.",
    features: ["Explainer Videos", "Logo Animations", "Lottie Web Animations", "UI Micro-interactions"],
  },
  {
    id: 2,
    title: "Video Creatives",
    subtitle: "Shorts • Reels • High-Retention Edits",
    description: "High-retention content designed for the modern viewer. We create scroll-stopping Shorts, Reels, and long-form content that keeps audiences engaged from start to finish.",
    features: ["YouTube Shorts", "Instagram Reels", "TikTok Content", "Long-form Editing"],
  },
  {
    id: 3,
    title: "Ads Direction",
    subtitle: "Creative Strategy • Hooks • ROAS",
    description: "Data-driven ad creatives that convert. We develop compelling hooks, strategic storytelling, and performance-optimized content that maximizes your return on ad spend.",
    features: ["Creative Strategy", "Hook Development", "A/B Testing", "ROAS Optimization"],
  },
  {
    id: 4,
    title: "YouTube Strategy",
    subtitle: "Thumbnails • Channel Audit • Retention",
    description: "Comprehensive YouTube growth strategies that drive views and subscribers. From thumbnail design to retention analysis, we optimize every aspect of your channel.",
    features: ["Thumbnail Design", "Channel Audit", "Title Optimization", "Retention Analysis"],
  },
  {
    id: 5,
    title: "Graphic Design",
    subtitle: "Brand Identity • Social Assets",
    description: "Visual identity systems that make lasting impressions. We create cohesive brand experiences across all touchpoints, from logos to social media assets.",
    features: ["Brand Identity", "Logo Design", "Social Media Assets", "Marketing Collateral"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm text-primary uppercase tracking-widest mb-4">✦ What We Offer</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              Our <span className="text-gradient">Expertise.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              We specialize in creating content that doesn't just look good—it performs. Every service is designed to help you grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding pt-12">
        <div className="container-wide mx-auto space-y-24">
          {services.map((service, index) => (
            <AnimatedSection key={service.id}>
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="card-glass aspect-video flex items-center justify-center overflow-hidden group">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
                      <span className="font-display text-8xl text-primary/30 group-hover:scale-110 transition-transform duration-500">
                        0{service.id}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <p className="text-sm text-primary uppercase tracking-widest mb-2">{service.subtitle}</p>
                  <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">{service.description}</p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-4 py-2 rounded-full bg-secondary text-sm text-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="btn-gradient px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Need something custom?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
                We love tackling unique challenges. Let's discuss your project.
              </p>
              <Link
                to="/contact"
                className="btn-gradient px-10 py-5 rounded-full font-semibold text-lg inline-flex items-center gap-3"
              >
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
