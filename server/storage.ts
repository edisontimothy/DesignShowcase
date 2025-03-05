import { projects, contactMessages, type Project, type InsertProject, type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  getAllProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  addProject(project: Project): Promise<Project>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project>;
  private messages: Map<number, ContactMessage>;
  private messageId: number;
  private users: Map<number, User>;
  currentId: number;

  constructor() {
    this.projects = new Map();
    this.messages = new Map();
    this.messageId = 1;
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

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.messageId++;
    const newMessage: ContactMessage = { ...message, id };
    this.messages.set(id, newMessage);
    return newMessage;
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