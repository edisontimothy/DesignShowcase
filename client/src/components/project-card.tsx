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
        className="cursor-pointer"
      >
        <Card className="overflow-hidden">
          <img
            src={project.coverImage}
            alt={project.title}
            className="h-48 w-full object-cover"
            loading="lazy"
          />
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">
              {project.description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
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
