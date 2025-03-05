import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import type { Project } from "@shared/schema";

export default function CaseStudy() {
  const [, params] = useRoute("/case-study/:id");
  const { data: project, isLoading } = useQuery<Project>({
    queryKey: [`/api/projects/${params?.id}`]
  });

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="h-96 bg-muted animate-pulse rounded-lg" />
      </div>
    );
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container py-8">
      <Link href="/">
        <Button variant="ghost" className="mb-8">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <div className="prose max-w-none">
          <img
            src={project.content.images[0]}
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          
          <h2>Overview</h2>
          <p>{project.content.overview}</p>

          <h2>Challenge</h2>
          <p>{project.content.challenge}</p>

          <h2>Solution</h2>
          <p>{project.content.solution}</p>

          <h2>Results</h2>
          <p>{project.content.results}</p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {project.content.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} detail ${index + 1}`}
                className="rounded-lg"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
