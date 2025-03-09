// This file provides direct access to project data in the client bundle
// It serves as a reliable fallback when API requests fail

import { PROJECTS } from "../../../shared/schema";

// Export the projects directly for client-side access
export { PROJECTS };

// Helper function to get a project by ID
export function getProjectById(id: number) {
  return PROJECTS.find(project => project.id === id);
}

// Helper function to get all projects
export function getAllProjects() {
  return PROJECTS;
}

// Helper function to get projects by tag
export function getProjectsByTag(tag: string) {
  return PROJECTS.filter(project => project.tags.includes(tag));
}