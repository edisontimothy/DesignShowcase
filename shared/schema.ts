import { pgTable, text, serial, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  coverImage: text("cover_image").notNull(),
  tags: text("tags").array().notNull(),
  content: jsonb("content").notNull(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const insertProjectSchema = createInsertSchema(projects);
export const insertContactSchema = createInsertSchema(contactMessages);

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactSchema>;

// Static project data
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-commerce Redesign",
    description: "A complete overhaul of an e-commerce platform focusing on user experience",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["UX Design", "E-commerce", "Mobile"],
    content: {
      overview: "Complete redesign of a major e-commerce platform",
      challenge: "Improving conversion rates and user engagement",
      solution: "User-centered design approach with A/B testing",
      results: "40% increase in conversion rate",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
      ]
    }
  },
  {
    id: 2,
    title: "Healthcare App",
    description: "Patient-centered healthcare management application",
    coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    tags: ["UX Design", "Healthcare", "Mobile App"],
    content: {
      overview: "Healthcare management app for patients",
      challenge: "Simplifying complex medical information",
      solution: "Intuitive interface with clear data visualization",
      results: "95% user satisfaction rate",
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
      ]
    }
  },
  {
    id: 3,
    title: "Financial Dashboard",
    description: "Data visualization dashboard for financial analytics",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["Data Visualization", "Finance", "Dashboard"],
    content: {
      overview: "Complex financial data made simple",
      challenge: "Information overload and complex workflows",
      solution: "Clear hierarchy and intuitive navigation",
      results: "30% reduction in task completion time",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
      ]
    }
  }
];
