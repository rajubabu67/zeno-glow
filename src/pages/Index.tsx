import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import heroGlow from "@/assets/hero-glow.png";
import abstractChrome from "@/assets/abstract-chrome.png";
import tellUsMore from "@/assets/tell-us-more.png";
import ryanPictures from "@/assets/ryan-pictures.png";
import davidOmari from "@/assets/david-omari.jpg";

const services = [
  {
    title: "Motion Graphics",
    description: "Captivating animations that tell your brand story through movement and visual artistry.",
    icon: "✦",
  },
  {
    title: "Video Creatives",
    description: "High-retention content designed for Shorts, Reels, and long-form that keeps viewers hooked.",
    icon: "◆",
  },
  {
    title: "YouTube Strategy",
    description: "Data-driven approach to thumbnails, titles, and channel growth that maximizes views.",
    icon: "●",
  },
];

const youtubers = [
  { name: "Tell Us More", image: tellUsMore },
  { name: "Ryan Pictures", image: ryanPictures },
  { name: "David Omari", image: davidOmari },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.img
            src={heroGlow}
            alt=""
            className="w-[800px] h-[800px] object-contain opacity-60"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>

        <div className="container-wide mx-auto section-padding relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground uppercase tracking-widest">Creative Agency</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
            >
              We Turn{" "}
              <span className="text-gradient">Attention</span>
              <br />
              Into Revenue.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              The creative agency for high-retention video content, motion graphics, and YouTube strategy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="btn-gradient px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2"
              >
                Get a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="px-8 py-4 rounded-full border border-border bg-secondary/50 font-semibold inline-flex items-center gap-2 hover:bg-secondary transition-colors">
                <Play className="w-5 h-5" />
                Watch Showreel
              </button>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute right-12 top-1/3 hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src={abstractChrome}
              alt=""
              className="w-48 h-48 object-contain animate-float"
            />
          </motion.div>
        </div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 right-12 text-right hidden md:block"
        >
          <p className="text-sm text-muted-foreground">Current Location</p>
          <p className="font-display font-semibold">New York, USA</p>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-border bg-card/30">
        <div className="container-wide mx-auto py-12 px-6 md:px-12 lg:px-24">
          <p className="text-sm text-muted-foreground text-center mb-8 uppercase tracking-widest">
            Trusted by top creators
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {youtubers.map((youtuber, index) => (
              <motion.div
                key={youtuber.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-24 h-24 rounded-full border-4 border-primary overflow-hidden">
                  <img 
                    src={youtuber.image} 
                    alt={youtuber.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-display font-semibold text-foreground">
                  {youtuber.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
              <div>
                <p className="text-sm text-primary uppercase tracking-widest mb-3">✦ Our Core Services</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold">
                  What we do, how we help<br />you grow.
                </h2>
              </div>
              <Link
                to="/services"
                className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
              >
                View all services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="card-glass p-8 h-full group hover:border-primary/50 transition-all duration-500">
                  <span className="text-4xl mb-6 block">{service.icon}</span>
                  <h3 className="font-display text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <div className="card-glass p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50" />
              <div className="relative z-10">
                <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                  Ready to dominate<br />your niche?
                </h2>
                <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10">
                  Let's create content that stops the scroll and drives results.
                </p>
                <Link
                  to="/contact"
                  className="btn-gradient px-10 py-5 rounded-full font-semibold text-lg inline-flex items-center gap-3"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
