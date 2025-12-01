import express, { type Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { PROJECTS } from "@shared/schema";
import path from "path";

export async function registerRoutes(app: Express) {
  // Serve attached assets
  const assetsPath = path.join(process.cwd(), "attached_assets");
  console.log("Serving attached assets from:", assetsPath);
  app.use("/attached_assets", express.static(assetsPath));
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



  return createServer(app);
}
