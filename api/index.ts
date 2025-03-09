import { PROJECTS } from "@shared/schema";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    const { id } = req.query;
    
    // Log the request details for debugging
    console.log("API Request:", { 
      query: req.query,
      id: id,
      idType: typeof id,
      url: req.url
    });
    
    // If no ID is provided, return all projects
    if (!id) {
      console.log("Returning all projects, count:", PROJECTS.length);
      return res.json(PROJECTS);
    }
    
    // Handle both string and array cases (Vercel might pass array)
    const idValue = Array.isArray(id) ? id[0] : id;
    console.log("Processing ID value:", idValue);
    
    // Try to parse as integer, but handle errors
    let projectId: number;
    try {
      projectId = parseInt(idValue as string, 10);
      console.log("Parsed project ID:", projectId);
      
      if (isNaN(projectId)) {
        console.error("Failed to parse ID as integer:", idValue);
        return res.status(400).json({ message: "Invalid project ID format" });
      }
    } catch (error) {
      console.error("Error parsing project ID:", error);
      return res.status(400).json({ message: "Invalid project ID" });
    }
    
    // Find the project
    const project = PROJECTS.find(p => p.id === projectId);
    
    // Log available projects for debugging
    console.log("Available project IDs:", PROJECTS.map(p => p.id));
    
    if (!project) {
      console.error(`Project with ID ${projectId} not found`);
      return res.status(404).json({ message: "Project not found" });
    }
    
    console.log("Returning project:", project.id, project.title);
    return res.json(project);
  }
  
  return res.status(405).json({ message: "Method not allowed" });
}