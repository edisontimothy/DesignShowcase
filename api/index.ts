import { PROJECTS } from "@shared/schema";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    const { id } = req.query;
    
    if (id) {
      const project = PROJECTS.find(p => p.id === parseInt(id as string));
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      return res.json(project);
    }
    
    return res.json(PROJECTS);
  }
  
  return res.status(405).json({ message: "Method not allowed" });
}