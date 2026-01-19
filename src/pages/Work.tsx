import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  youtubeId: string;
  image: string;
}

const projects: Project[] = [
  { id: 1, title: "Project 1", youtubeId: "_J-THtTRT4s", image: "from-primary/30 to-orange-end/20" },
  { id: 2, title: "Project 2", youtubeId: "SUr1dKXknQs", image: "from-purple-500/30 to-primary/20" },
  { id: 3, title: "Project 3", youtubeId: "Xn7TTtsoefg", image: "from-blue-500/30 to-primary/20" },
  { id: 4, title: "Project 4", youtubeId: "UQAPZltCcnc", image: "from-green-500/30 to-primary/20" },
  { id: 5, title: "Project 5", youtubeId: "rI5yvzZPE_c", image: "from-pink-500/30 to-primary/20" },
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsVideoOpen(true);
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
              A curated collection of our best work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding pt-8">
        <div className="container-wide mx-auto">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => handleProjectClick(project)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer"
                >
                  {/* YouTube Thumbnail */}
                  <div className="aspect-video relative">
                    <img 
                      src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to hqdefault if maxresdefault is not available
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
                      }}
                    />
                  </div>
                  
                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-background/20 group-hover:bg-background/40 transition-colors duration-300">
                    <div className="w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                      <Play className="w-7 h-7 text-primary fill-primary ml-1" />
                    </div>
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4">
                    <h3 className="font-display text-lg font-bold">{project.title}</h3>
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

          {selectedProject && (
            <div className="w-full">
              {/* YouTube Embed */}
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={selectedProject.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Project Title */}
              <div className="p-6 bg-card/50">
                <h3 className="font-display text-2xl font-bold">{selectedProject.title}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Work;
