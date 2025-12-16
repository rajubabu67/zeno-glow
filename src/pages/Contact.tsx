import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Twitter, Send, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const projectTypes = [
  "Motion Graphics",
  "Video Creatives",
  "YouTube Strategy",
  "Ads Direction",
  "Graphic Design",
  "Full Package",
];

const budgets = [
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", projectType: "", budget: "", message: "" });
  };

  return (
    <Layout>
      <section className="section-padding pt-32 min-h-screen">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm text-primary uppercase tracking-widest mb-4">✦ Contact</p>
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Let's build something <span className="text-gradient">impossible to ignore.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Have a project in mind? We'd love to hear about it. Drop us a line and let's create something amazing together.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email us at</p>
                    <p className="font-semibold">hello@zenocreatives.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold">New York, USA (Remote-first)</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-4">Follow us</p>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <AnimatedSection delay={0.2}>
              <form onSubmit={handleSubmit} className="card-glass p-8 md:p-10">
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-4 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      required
                      className="w-full px-4 py-4 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      required
                      className="w-full px-4 py-4 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      required
                      className="w-full px-4 py-4 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select your budget</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Details</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project, goals, and timeline..."
                      rows={5}
                      required
                      className="w-full px-4 py-4 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full btn-gradient py-5 rounded-xl font-semibold text-lg flex items-center justify-center gap-3"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
