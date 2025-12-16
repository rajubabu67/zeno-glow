import { motion } from "framer-motion";
import { ArrowRight, Users, Eye, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  { number: "50+", label: "Clients", icon: Users },
  { number: "10M+", label: "Views Generated", icon: Eye },
  { number: "100%", label: "Remote Team", icon: Globe },
];

const team = [
  { name: "Alex Rivera", role: "Creative Director", avatar: "A" },
  { name: "Sarah Chen", role: "Head of Strategy", avatar: "S" },
  { name: "Marcus Johnson", role: "Lead Editor", avatar: "M" },
];

const values = [
  { title: "Tailored Strategies", description: "We design custom solutions to match your business goals. No templates, just results." },
  { title: "Proven Results", description: "100+ successful projects across multiple industries. We let the numbers speak." },
  { title: "Creative & Data-Driven", description: "A balance of innovation and performance-focused strategies that actually convert." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm text-primary uppercase tracking-widest mb-4">✦ About Us</p>
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
                Creatives who think like <span className="text-gradient">Marketers.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are a full-service digital agency passionate about helping businesses grow online. From motion graphics and video production to YouTube strategy, our team blends creativity with data-driven strategies to deliver results that matter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="card-glass aspect-square flex items-center justify-center">
                <span className="font-display text-[12rem] font-bold text-gradient opacity-50">15</span>
              </div>
              <p className="text-center mt-4 text-muted-foreground">years of work experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <p className="text-sm text-primary uppercase tracking-widest mb-4">✦ Why Choose Us</p>
            <h2 className="font-display text-4xl font-bold mb-12">Why choose our digital agency?</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="card-glass p-8 h-full">
                  <h3 className="font-display text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8"
                >
                  <div className="w-16 h-16 rounded-2xl btn-gradient flex items-center justify-center mx-auto mb-6">
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-5xl md:text-6xl font-bold mb-2 text-gradient">{stat.number}</h3>
                  <p className="text-muted-foreground text-lg">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-sm text-primary uppercase tracking-widest mb-4">✦ The Team</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold">Meet the minds behind the magic.</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full btn-gradient flex items-center justify-center mx-auto mb-6">
                    <span className="font-display text-4xl font-bold">{member.avatar}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
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
            <div className="card-glass p-12 md:p-20 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50" />
              <div className="relative z-10">
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                  Let's work together.
                </h2>
                <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10">
                  Ready to take your brand to the next level? We're here to help.
                </p>
                <Link
                  to="/contact"
                  className="btn-gradient px-10 py-5 rounded-full font-semibold text-lg inline-flex items-center gap-3"
                >
                  Get in Touch
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

export default About;
