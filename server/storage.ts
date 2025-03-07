import { projects, type Project, type InsertProject } from "@shared/schema";

export interface IStorage {
  getAllProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  addProject(project: Project): Promise<Project>;
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project>;

  private users: Map<number, User>;
  currentId: number;

  constructor() {
    this.projects = new Map();

    this.users = new Map();
    this.currentId = 1;
  }

  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async addProject(project: Project): Promise<Project> {
    this.projects.set(project.id, project);
    return project;
  }


    async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
}

export const storage = new MemStorage();

import { users, type User, type InsertUser } from "@shared/schema";