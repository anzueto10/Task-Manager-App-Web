import AppleIcon from "@/components/ui/icons/AppleIcon";
import FacebookIcon from "@/components/ui/icons/FacebookIcon";
import GoogleIcon from "@/components/ui/icons/GoogleIcon";
import SettingsIcon from "@/components/ui/icons/SettingsIcon";
import NotificationsIcon from "@/components/ui/icons/NotificationsIcon";
import HelpIcon from "@/components/ui/icons/HelpIcon";
import UserIcon from "@/components/ui/icons/UserIcon";
import { IconKeyFeature, KeyFeature, PaymentPlan, Privacy } from "./types";
import CalendarIcon from "./components/ui/icons/CalendarIcon";
import KanbanIcon from "./components/ui/icons/KanbanIcon";
import CheckIcon from "./components/ui/icons/CheckIcon";
import CombineIcon from "./components/ui/icons/CombineIcon";
import UserCircleIcon from "./components/ui/icons/UserCircleIcon";
import AIIcon from "./components/ui/icons/AIIcon";

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
  "Welcome to Tasker, your ultimate tool for managing projects and tasks efficiently. Log in to access your dashboard, collaborate with your team, and stay on top of your tasks. Let's get things done together!";

export const DROPDOWN_USER_OPTIONS = {
  ACCOUNT: {
    text: "Account",
    href: "/account",
    Icon: UserIcon,
  },
  SETTINGS: {
    text: "Settings",
    href: "/settings",
    Icon: SettingsIcon,
  },
  NOTIFICATIONS: {
    text: "Notifications",
    href: "/notifications",
    Icon: NotificationsIcon,
  },
  HELP: {
    text: "Help",
    href: "/help",
    Icon: HelpIcon,
  },
};

export const HOME_NAVBAR_OPTIONS = {
  HOME: {
    text: "Home",
    href: "/",
  },
  FEATURES: {
    text: "Features",
    href: "/features",
  },
  PRICING: {
    text: "Pricing",
    href: "/pricing",
  },
  ABOUT: {
    text: "About",
    href: "/about",
  },
  CONTACT: {
    text: "Contact",
    href: "/contact",
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
  ICON_FEATURES: {
    TASK_SCHEDULING: {
      description:
        "Easily schedule and manage tasks with our intuitive calendar view.",
      title: "Task Scheduling",
      Icon: CalendarIcon,
    },
    KANBAN_BOARDS: {
      title: "Kanban Boards",
      description:
        "Visualize your workflow and track progress with our customizable Kanban boards.",
      Icon: KanbanIcon,
    },
    CHECKLIST: {
      title: "Checklists",
      description:
        "Break down tasks into manageable steps with our comprehensive checklists.",
      Icon: CheckIcon,
    },
    TEAM_COLLABORATION: {
      title: "Team Collaboration",
      description:
        "Streamline communication and collaboration with your team members.",
      Icon: CombineIcon,
    },
    INTUITIVE_INTERFACE: {
      title: "Intuitive Interface",
      description:
        "Tasker's user-friendly interface makes it easy to manage your projects, tasks, and team.",
      Icon: UserCircleIcon,
    },
    AI_INTEGRATIONS: {
      title: "AI-powered Integrations",
      description:
        "Enhance productivity with AI-driven integrations that automate tasks and provide intelligent insights.",
      Icon: AIIcon,
    },
  },

  HOME_FEATURES: {
    PROJECT_MANAGEMENT: {
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

export const TERMS_OF_SERVICE = {
  USER_MANAGEMENT: {
    title: "User Accounts",
    description:
      "To use Tasker, you'll need to create an account. This account is for your personal use only and cannot be shared. You're responsible for keeping your account secure and for any activity that occurs under your account.",
  },
  CONTENT_OWNERSHIP: {
    title: "Content Ownership",
    description:
      "Any content you create or upload to Tasker, such as project details, files, and comments, remains yours. We don't claim ownership of your content, but by using Tasker, you grant us a license to use, copy, and distribute it as necessary to provide the service.",
  },
  PRIVACY: {
    title: "Privacy",
    description:
      "We take your privacy seriously. We collect and use your personal information in accordance with our Privacy Policy. Please review the Privacy Policy to understand how we handle your data.",
  },
  LIMITATIONS_OF_LIABILITY: {
    title: "Limitations of Liability",
    description:
      "Tasker is provided 'as is' without warranties. We're not liable for any issues or damages that may arise from your use of the service. Our liability is limited to the maximum extent permitted by law.",
  },
  DISPUTE_RESOLUTION: {
    title: "Dispute Resolution",
    description:
      "Any disputes arising from these terms or your use of Tasker will be resolved through binding arbitration. You waive your right to a jury trial or to participate in a class action lawsuit.",
  },
  CHANGES_TO_THE_TERMS: {
    title: "Changes to the Terms",
    description:
      "We may update these terms from time to time. We'll notify you of any changes, and your continued use of Tasker after the changes will constitute your acceptance of the new terms.",
  },
};

export const PRIVACY_SECTIONS: { [key: string]: Privacy } = {
  TASKER_COLLECT: {
    title: "What data does Tasker collect?",
    header: "Tasker collects the following information from users:",
    list: [
      {
        title: "Account Information",
        description: "Your name, email address, and password.",
      },
      {
        title: "Project and Task Data",
        description:
          "The details of the projects and tasks you create, including titles, descriptions, due dates, and attachments.",
      },
      {
        title: "Collaboration Data",
        description:
          "The names and email addresses of any team members you invite to collaborate on your projects.",
      },
      {
        title: "Usage Data",
        description:
          "Information about how you use the Tasker application, such as the pages you visit, the actions you take, and the time spent on the platform.",
      },
    ],
  },
  TASKER_USE: {
    title: "How does Tasker use your data?",
    header:
      "Tasker uses your data to provide and improve the Tasker application, including:",
    list: [
      {
        title: "Account Management",
        description:
          "To create and manage your Tasker account, and to authenticate your login.",
      },
      {
        title: "Project and Task Management",
        description:
          "To allow you to create, organize, and track your projects and tasks.",
      },
      {
        title: "Collaboration",
        description:
          "To enable you to invite team members to collaborate on your projects.",
      },
      {
        title: "Improvement and Analytics",
        description:
          "To analyze how you use the Tasker application, so that we can continually improve the user experience.",
      },
    ],
  },
  TASKER_STORE: {
    title: "How does Tasker store and protect your data?",
    header: "Tasker takes the following measures to protect your data:",
    list: [
      {
        title: "Encryption",
        description:
          "All data is encrypted in transit and at rest using industry-standard encryption protocols.",
      },
      {
        title: "Access Controls",
        description:
          "Access to your data is restricted to authorized Tasker employees and contractors who need it to perform their job duties.",
      },
      {
        title: "Backups",
        description:
          "Your data is regularly backed up to ensure it can be restored in the event of a system failure or other incident.",
      },
      {
        title: "Security Audits",
        description:
          "Tasker undergoes regular security audits to identify and address any vulnerabilities in our systems.",
      },
    ],
  },
  USER_RIGHTS: {
    title: "Your Rights as a Tasker User",
    header: "As a Tasker user, you have the following rights:",
    list: [
      {
        title: "Access",
        description:
          "You can access the personal information we hold about you at any time.",
      },
      {
        title: "Correction",
        description:
          "You can request that we correct any inaccurate or incomplete information we have about you.",
      },
      {
        title: "Deletion",
        description:
          "You can request that we delete your personal information, subject to certain exceptions.",
      },
      {
        title: "Portability",
        description:
          "You can request that we provide you with a copy of your personal information in a machine-readable format.",
      },
      {
        title: "Objection",
        description:
          "You can object to the processing of your personal information for certain purposes.",
      },
    ],
    footer:
      "If you have any questions or concerns about your rights, please contact our privacy team at privacy@tasker.com.",
  },
} as const;

//Clases

export const TEXT_AREA_CLASSES =
  "flex resize-none w-full rounded-md border border-input bg-background-light border-input-light ring-offset-background-light placeholder:text-mutedForeground-light focus-visible:ring-ring-light dark:bg-background-dark dark:border-input-dark dark:ring-offset-background-dark dark:placeholder:text-mutedForeground-dark dark:focus-visible:ring-ring-dark px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 col-span-3 p-2.5";
