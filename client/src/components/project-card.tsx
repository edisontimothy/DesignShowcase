import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import type { Project } from "@shared/schema";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/case-study/${project.id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        className="cursor-pointer group"
      >
        <Card className="overflow-hidden border-border/40 transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-lg">
          <div className="relative overflow-hidden">
            <img
              src={project.coverImage}
              alt={project.title}
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary"
                  className="bg-secondary/50 hover:bg-secondary/70"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}