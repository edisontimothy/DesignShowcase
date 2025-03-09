import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import type { Project } from "@/types/project";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect } from 'react';

export default function CaseStudy() {
  const [, params] = useRoute("/case-study/:id");
  
  // Add console logging to debug the params
  console.log("Route params:", params);
  
  const { data: project, isLoading, error } = useQuery<Project>({    
    queryKey: [`/api/projects/${params?.id}`],
    queryFn: async () => {
      // Check if params.id exists
      if (!params?.id) {
        console.error("No project ID found in URL parameters");
        throw new Error('No project ID found in URL parameters');
      }
      
      // Use relative URL which works in both development and production
      const url = `/api/projects/${params.id}`;
      console.log("Fetching from URL:", url);
      
      const response = await fetch(url);
      if (!response.ok) {
        console.error(`API error: ${response.status} ${response.statusText}`);
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("API response data:", data);
      return data;
    },
    enabled: !!params?.id // Only run the query if we have an ID
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 10000); // Auto-scroll every 10 seconds

      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (isLoading) {
    return (
      <div className="content-container py-8">
        <div className="h-96 bg-muted animate-pulse rounded-lg" />
      </div>
    );
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="content-container py-8">
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

        <div className="relative mb-8">
          <div className="overflow-hidden rounded-lg" ref={emblaRef}>
            <div className="flex">
              {project.content.images.slice(0, 3).map((content, index) => (
                <div key={index} className="relative flex-[0_0_100%] min-w-0">
                  {content.startsWith('<iframe') ? (
                    <div 
                      className="w-full h-[400px] flex items-center justify-center"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  ) : (
                    <img
                      src={content}
                      alt={`${project.title} slide ${index + 1}`}
                      className="w-full h-[400px] object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="prose prose-lg max-w-none space-y-16 dark:prose-invert">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold">Summary</h2>
            <div 
              className="text-lg text-muted-foreground whitespace-pre-wrap leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project.content.summary }}
            />
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-semibold">Problem</h2>
            <p className="text-lg text-muted-foreground whitespace-pre-wrap leading-relaxed">{project.content.problem}</p>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-semibold">Design Process</h2>
            <p className="text-lg text-muted-foreground whitespace-pre-wrap leading-relaxed">{project.content.designProcess}</p>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-semibold">Solution</h2>
            <p className="text-lg text-muted-foreground whitespace-pre-wrap leading-relaxed">{project.content.solution}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}