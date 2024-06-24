import AppleIcon from "@/components/ui/icons/AppleIcon";
import FacebookIcon from "@/components/ui/icons/FacebookIcon";
import GoogleIcon from "@/components/ui/icons/GoogleIcon";

export const USER_FIELDS = {
  USERNAME: "username",
  EMAIL: "email",
  PASSWORD: "password",
};

export const TASK_FIELDS = {
  TITLE: "title",
  DESCRIPTION: "description",
  STATUS: "status",
  TAGS: "tags",
  PROJECT: "project",
  IMAGE: "image",
} as const;

export const PROJECT_FIELDS_TEXT = {
  TITLE: "Title",
  DESCRIPTION: "Description",
  TITLE_HOLDER: "My new project..",
  DESCRIPTION_HOLDER: "Using task manager app...",
  BUTTON: "Create a new Project",
};

export const PROJECT_FIELDS = {
  TITLE: "title",
  DESCRIPTION: "description",
} as const;

export const STATUS_TEXTS = {
  BACK_LOG: { value: "backlog", text: "Backlog" },
  IN_PROGRESS: { value: "in_progress", text: "In Progress" },
  IN_REVIEW: { value: "in_review", text: "In Review" },
  COMPLETED: { value: "completed", text: "Completed" },
} as const;

export const STATUS_TEXTS_CLIENT = {
  BACK_LOG: "Backlog",
  IN_PROGRESS: "In Progress",
  IN_REVIEW: "In Review",
  COMPLETED: "Completed",
} as const;

export const TASK_FIELDS_TEXTS = {
  TITLE: "Title",
  DESCRIPTION: "Description",
  TAGS: "Tags",
  IMAGE: "Image",
  STATUS: "Status",
  TITLE_HOLDER: "My new task...",
  DESCRIPTION_HOLDER: "Using Task Manager app...",
  BUTTON: "Create a new Task",
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

export const FORM_SIGNUP_EXTERNAL_LINKS = {
  GOOGLE: { text: "Sign Up with Google", Icon: GoogleIcon, href: "google" },
  FACEBOOK: {
    text: "Sign Up with Facebook",
    Icon: FacebookIcon,
    href: "facebook",
  },
  APPLE: { text: "Sign Up with Apple", Icon: AppleIcon, href: "apple" },
};

export const SIGN_UP_FORM_FIELDS = {
  USERNAME: {
    text: "Your Username",
    value: USER_FIELDS.USERNAME,
    placeholder: "example10",
    required: true,
  },
  EMAIL: {
    text: "Your email",
    value: USER_FIELDS.EMAIL,
    placeholder: "name@example.com",
    required: true,
  },
  PASSWORD: {
    text: "Password",
    value: USER_FIELDS.PASSWORD,
    placeholder: "••••••••",
    required: true,
  },
};

export const ERROR_NAMES = {
  INVALID_TITLE: "InvalidTitleError",
  INVALID_DESCRIPTION: "InvalidDescription",
  RESPONSE_ERROR: "ResponseError",
};
