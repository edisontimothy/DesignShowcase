import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { PROJECTS } from "@shared/schema";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  // Initialize with static project data
  PROJECTS.forEach(project => {
    storage.addProject(project);
  });

  app.get("/api/projects", async (_req, res) => {
    const projects = await storage.getAllProjects();
    res.json(projects);
  });

  app.get("/api/projects/:id", async (req, res) => {
    const project = await storage.getProject(parseInt(req.params.id));
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  });

  app.post("/api/contact", async (req, res) => {
    const result = insertContactSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ message: "Invalid request body" });
    }
    
    const message = await storage.createContactMessage(result.data);
    res.json(message);
  });

  return createServer(app);
}
