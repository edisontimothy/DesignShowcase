import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type { Project } from "@/types/project";
import { getAllProjects } from "@/data/projects";

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
  const [isOpen, setIsOpen] = useState(false);
  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api"],
    queryFn: async () => {
      try {
        // First try the API endpoint
        const isVercel = window.location.hostname.includes('vercel.app');
        const url = isVercel ? '/api' : '/api/projects';
        console.log("Attempting to fetch projects from URL:", url);

        const response = await fetch(url);
        console.log("Response status:", response.status);

        if (!response.ok) {
          console.error(`API error: ${response.status} ${response.statusText}`);
          throw new Error(`Network response was not ok: ${response.status}`);
        }

        const data = await response.json();
        console.log("API response data length:", data.length);

        return data;
      } catch (error) {
        console.error("Error fetching projects from API:", error);

        // Fallback to static data if API fails
        console.log("Falling back to static project data");
        return getAllProjects();
      }
    }
  });

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));
  const filteredProjects = filter
    ? projects.filter(p => p.tags.includes(filter))
    : projects;

  if (isLoading) {
    return (
      <div className="content-container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-72 bg-muted animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="content-container py-16 space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/10 rounded-full blur-2xl transform scale-110" />
          <img
            src="/attached_assets/profile.png"
            alt="Timothy Edison"
            className="relative w-full h-full object-cover drop-shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h1 className="text-5xl font-bold mb-6 gradient-heading leading-tight">
          Tim's Portfolio
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          Hey, welcome to my site! Have a look at some of my latest work in UI/UX, Web Design, and Product Design. I'm all about making things look good while actually working well; Functional aesthetics, universal design, and creative problem solving.
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="rounded-full px-8"
            onClick={() => window.open('https://linktr.ee/tedison', '_blank')}
          >
            Get in touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8"
            onClick={() => window.open('https://drive.google.com/file/d/1MSGcsvjPFY-kvg_mC7i7ZnV2eoeYu1LP/view?usp=share_link', '_blank')}
          >
            Portfolio
          </Button>
        </div>
      </motion.div>

      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="flex flex-col items-center space-y-4"
      >
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            Filter Projects
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="w-full">
          <div className="flex gap-2 flex-wrap justify-center">
            <Button
              variant={filter === null ? "default" : "outline"}
              onClick={() => setFilter(null)}
              className="shadow-sm"
            >
              All
            </Button>
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={filter === tag ? "default" : "outline"}
                onClick={() => setFilter(tag)}
                className="shadow-sm"
              >
                {tag}
              </Button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
}