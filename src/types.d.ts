export type Status = "backlog" | "in_progress" | "in_review" | "completed";

export type StatusTextClient =
  | "Backlog"
  | "In Progress"
  | "In Rreview"
  | "Completed";

export interface Task {
  id: number;
  title: string;
  description: string;
  image: string;
  status: Status;
  tags: Array<string>;
  project: number;
}

export interface Project {
  id: number;
  title: string;
}

export interface FormTaskFields {
  title: string;
  description: string;
  status: Status;
  tags: Array<string>;
  project: number;
  image: File;
}
