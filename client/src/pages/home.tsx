import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import type { Project } from "@shared/schema";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [filter, setFilter] = useState<string | null>(null);
  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"]
  });

  const allTags = [...new Set(projects.flatMap(p => p.tags))];
  const filteredProjects = filter
    ? projects.filter(p => p.tags.includes(filter))
    : projects;

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-72 bg-muted animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">UX Design Portfolio</h1>
        <p className="text-xl text-muted-foreground">
          Crafting meaningful digital experiences through user-centered design
        </p>
      </motion.div>

      <div className="flex gap-2 mb-8 flex-wrap">
        <Button
          variant={filter === null ? "default" : "outline"}
          onClick={() => setFilter(null)}
        >
          All
        </Button>
        {allTags.map(tag => (
          <Button
            key={tag}
            variant={filter === tag ? "default" : "outline"}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
}
