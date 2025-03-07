export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  content: {
    images: string[];
    summary: string;
    problem: string;
    designProcess: string;
    solution: string;
  };
}