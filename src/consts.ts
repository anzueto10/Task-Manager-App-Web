export const TASK_FIELDS = {
  TITLE: "title",
  DESCRIPTION: "description",
  STATUS: "status",
  TAGS: "tags",
  PROJECT: "project",
  IMAGE: "image",
} as const;

export const STATUS_TEXTS = {
  BACK_LOG: "backlog",
  IN_PROGRESS: "in_progress",
  IN_REVIEW: "in_review",
  COMPLETED: "completed",
} as const;

export const STATUS_TEXTS_CLIENT = {
  BACK_LOG: "Backlog",
  IN_PROGRESS: "In Progress",
  IN_REVIEW: "In Rreview",
  COMPLETED: "Completed",
};
