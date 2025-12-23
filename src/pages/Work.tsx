import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import VideoPlayer from "@/components/VideoPlayer";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const categories = ["All", "Motion", "YouTube", "Ads"];

interface Project {
  id: number;
  title: string;
  category: string;
  result: string;
  image: string;
  videoUrl?: string;
}

const projects: Project[] = [
  { id: 1, title: "David", category: "Motion", result: "+2M Views", image: "from-primary/30 to-orange-end/20", videoUrl: "https://rrwpihpeixhuycrirqxs.supabase.co/storage/v1/object/public/Zeno%20Videos/David.mp4" },
  { id: 2, title: "Jaylen", category: "Motion", result: "50% Conv. Rate", image: "from-purple-500/30 to-primary/20", videoUrl: "https://rrwpihpeixhuycrirqxs.supabase.co/storage/v1/object/public/Zeno%20Videos/Jaylen.mp4" },
  { id: 3, title: "Shaid", category: "YouTube", result: "+500K Subs", image: "from-blue-500/30 to-primary/20", videoUrl: "https://rrwpihpeixhuycrirqxs.supabase.co/storage/v1/object/public/Zeno%20Videos/Shaid.mp4" },
  { id: 4, title: "Stranger Things", category: "Ads", result: "4.2x ROAS", image: "from-green-500/30 to-primary/20", videoUrl: "https://rrwpihpeixhuycrirqxs.supabase.co/storage/v1/object/public/Zeno%20Videos/Stranger%20Things.mp4" },
  { id: 5, title: "Tellus", category: "YouTube", result: "+10M Views", image: "from-pink-500/30 to-primary/20", videoUrl: "https://rrwpihpeixhuycrirqxs.supabase.co/storage/v1/object/public/Zeno%20Videos/Tellus.mp4" },
  { id: 6, title: "Product Launch", category: "Ads", result: "2.8x ROAS", image: "from-yellow-500/30 to-primary/20" },
  { id: 7, title: "Brand Animation", category: "Motion", result: "Award Winner", image: "from-cyan-500/30 to-primary/20" },
  { id: 8, title: "Shorts Strategy", category: "YouTube", result: "+5M Views", image: "from-red-500/30 to-primary/20" },
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const handleProjectClick = (project: Project) => {
    if (project.videoUrl) {
      setSelectedProject(project);
      setIsVideoOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsVideoOpen(false);
    setSelectedProject(null);
  };

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
            <p className="text-sm text-primary uppercase tracking-widest mb-4">✦ Portfolio</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
              Selected <span className="text-gradient">Works.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A curated collection of our best work across motion, YouTube, and advertising.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 md:px-12 lg:px-24 py-8">
        <div className="container-wide mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "btn-gradient"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding pt-8">
        <div className="container-wide mx-auto">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => handleProjectClick(project)}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                    index === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <div className={`aspect-square bg-gradient-to-br ${project.image} flex items-center justify-center`}>
                    <span className="font-display text-6xl text-foreground/10">
                      0{project.id}
                    </span>
                  </div>
                  
                  {/* Play Icon Overlay for videos */}
                  {project.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                        <Play className="w-7 h-7 text-primary fill-primary ml-1" />
                      </div>
                    </div>
                  )}
                  
                  {/* Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-sm text-primary uppercase tracking-widest">{project.category}</span>
                      <h3 className="font-display text-2xl font-bold mt-1">{project.title}</h3>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-primary font-semibold">{project.result}</span>
                        {project.videoUrl && (
                          <div className="w-10 h-10 rounded-full btn-gradient flex items-center justify-center">
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-5xl p-0 bg-background/95 backdrop-blur-xl border-border/50 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedProject?.title || "Project Video"}
          </DialogTitle>
          
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full btn-gradient flex items-center justify-center hover:scale-110 transition-transform"
          >
            <X className="w-5 h-5" />
          </button>

          {selectedProject && selectedProject.videoUrl && (
            <div className="w-full">
              {/* Custom Video Player */}
              <VideoPlayer 
                src={selectedProject.videoUrl} 
                title={selectedProject.title}
              />

              {/* Project Info */}
              <div className="p-6 bg-card/50">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-primary uppercase tracking-widest">{selectedProject.category}</span>
                    <h3 className="font-display text-2xl font-bold mt-1">{selectedProject.title}</h3>
                  </div>
                  <div className="px-4 py-2 rounded-full bg-primary/20 border border-primary/30">
                    <span className="text-primary font-semibold">{selectedProject.result}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Work;
