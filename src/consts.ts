import AppleIcon from "@/components/ui/icons/AppleIcon";
import FacebookIcon from "@/components/ui/icons/FacebookIcon";
import GoogleIcon from "@/components/ui/icons/GoogleIcon";
import SettingsIcon from "@/components/ui/icons/SettingsIcon";
import NotificationsIcon from "@/components/ui/icons/NotificationsIcon";
import HelpIcon from "@/components/ui/icons/HelpIcon";
import UserIcon from "@/components/ui/icons/UserIcon";
import { PaymentPlan } from "./types";

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
  IN_PROGRESS: { value: "inProgress", text: "In Progress" },
  IN_REVIEW: { value: "inReview", text: "In Review" },
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

export const LOGIN_FORM_TITLE = "Explore the best way to manage your projects.";

export const LOGIN_FORM_DESCRIPTION =
  "Millions of designers and agencies around the world showcase their portfolio work on Flowbite - the home to the world’s best design and creative professionals.";

export const DROPDOWN_USER_OPTIONS = {
  ACCOUNT: {
    text: "Account",
    href: "/account/",
    Icon: UserIcon,
  },
  SETTINGS: {
    text: "Settings",
    href: "/settings/",
    Icon: SettingsIcon,
  },
  NOTIFICATIONS: {
    text: "Notifications",
    href: "/notifications/",
    Icon: NotificationsIcon,
  },
  HELP: {
    text: "Help",
    href: "/help/",
    Icon: HelpIcon,
  },
};

export const HOME_NAVBAR_OPTIONS = {
  FEATURES: {
    text: "Features",
    href: "/features/",
  },
  PRICING: {
    text: "Pricing",
    href: "/pricing/",
  },
  ABOUT: {
    text: "About",
    href: "/about/",
  },
  CONTACT: {
    text: "Contact",
    href: "/contact/",
  },
};

export const HOME_PAGE_TEXTS = {
  MAIN_SUBTITLE:
    "Tasker is a powerful task management app that helps you stay organized and productive. Manage projects, track tasks, and collaborate with your team.",
  MAIN_TITLE: "Streamline Your Workflow with Tasker",
};

export const TESTIMONIALS = {
  SARAH_MILLER: {
    name: "Sarah Miller",
    ocupation: "Team Lead",
    message:
      "Tasker has made our team more efficient and collaborative. It's a must-have tool for any organization.",
  },
  JOHN_DOE: {
    name: "John Doe",
    ocupation: "Project Manager",
    message:
      "Tasker has been a game-changer for our team. It's helped us stay organized and on top of our projects.",
  },
};

export const KEY_FEATURES = {
  PROJECT_MANAGMENT: {
    title: "Project Management",
    description:
      "Organize your projects and tasks with ease. Tasker provides a clear overview of your team's progress and deadlines.",
  },
  TASK_TRACKING: {
    title: "Task Tracking",
    description:
      "Keep track of your team's tasks and deadlines. Tasker helps you stay on top of your work and ensure nothing falls through the cracks.",
  },
  COLLABORATION: {
    title: "Collaboration",
    description:
      "Collaborate with your team seamlessly. Tasker allows you to share tasks, comment on progress, and stay in sync.",
  },
};
export const PAYMENT_PERIOD_OPTIONS = {
  MONTH: "month",
  USER: "user",
  YEAR: "year",
} as const;

export const PAYMENT_PLANS: { [key: string]: PaymentPlan } = {
  FREE: {
    name: "Free",
    CTA: {
      text: "Sign Up",
      url: "/signup/",
    },
    description: "Get started with Tasker for free.",
    price: 0.0,
    period: [PAYMENT_PERIOD_OPTIONS.MONTH],
    features: [
      { text: "1 active project", avaible: true },
      { text: "5 team members", avaible: true },
      { text: "Basic task management", avaible: true },
      { text: "No advanced features", avaible: false },
    ],
  },
  PRO: {
    name: "Pro",
    CTA: {
      text: "Start Free Trial",
      url: "/pay/",
    },
    description: "Unlock advanced features for your team.",
    price: 9.0,
    period: [PAYMENT_PERIOD_OPTIONS.MONTH, PAYMENT_PERIOD_OPTIONS.USER],
    features: [
      { text: "Unlimited active projects", avaible: true },
      { text: "Unlimited team members", avaible: true },
      { text: "Advanced task management", avaible: true },
      { text: "Project dashboards and reporting", avaible: true },
    ],
  },
  ENTER_PRICE: {
    name: "Enterprise",
    CTA: {
      text: "Contact Us",
      url: "/contact/",
    },
    description: "Custom solutions for large teams and organizations.",
    price: "Contact Us",
    period: [],
    features: [
      { text: "Unlimited active projects", avaible: true },
      { text: "Unlimited team members", avaible: true },
      { text: "Advanced task management", avaible: true },
      { text: "Project dashboards and reporting", avaible: true },
      { text: "Custom integrations and features", avaible: true },
    ],
  },
} as const;

//Clases

export const TEXT_AREA_CLASSES =
  "flex resize-none w-full rounded-md border border-input bg-background-light border-input-light ring-offset-background-light placeholder:text-mutedForeground-light focus-visible:ring-ring-light dark:bg-background-dark dark:border-input-dark dark:ring-offset-background-dark dark:placeholder:text-mutedForeground-dark dark:focus-visible:ring-ring-dark px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 col-span-3 p-2.5";
