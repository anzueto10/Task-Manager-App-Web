export const TASK_FIELDS = {
  TITLE: "title",
  DESCRIPTION: "description",
  STATUS: "status",
  TAGS: "tags",
  PROJECT: "project",
  IMAGE: "image",
} as const;

export const TASK_FIELDS_TEXTS = {
  TITLE: "Title",
  DESCRIPTION: "Description",
  TAGS: "Tags",
  IMAGE: "Image",
} as const;

export const PROJECT_FIELDS = {
  TITLE: "title",
  DESCRIPTION: "description",
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
} as const;

export const APP_TITLE = "Task Manager App" as const;

export const ADD_BUTTONS_TEXT = {
  PROJECT: "Create a Project",
  TASK: "Create a Task",
} as const;

export const ICON_SIZES = {
  LARGE: "large",
  MEDIUM: "medium",
  SMALL: "small",
  INHERENT: "inherit",
} as const;

export const MODALS_TITLES = {
  TASK: "Create a New Task",
  PROJECT: "Create a New Project",
} as const;
