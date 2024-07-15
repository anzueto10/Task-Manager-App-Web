import {
  ICON_SIZES,
  PAYMENT_PERIOD_OPTIONS,
  STATUS_TEXTS,
  STATUS_TEXTS_CLIENT,
} from "@/consts";
import { SvgIconProps } from "@mui/material";
import { Session } from "next-auth";
import { MouseEvent } from "react";

export type Status = (typeof STATUS_TEXTS)[keyof typeof STATUS_TEXTS];

export type StatusTextClient =
  (typeof STATUS_TEXTS_CLIENT)[keyof typeof STATUS_TEXTS_CLIENT];

export type StatusValue =
  (typeof STATUS_TEXTS)[keyof typeof STATUS_TEXTS]["value"];

export interface User {
  id: string;
  name: string;
  userName: string;
  email: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface FormUserFields {
  username?: string;
  email: string;
  password: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  image?: string;
  status: StatusValue;
  tags?: Array<string>;
  createdAt: string;
  projectId: Project["id"];
}

export interface FormTaskFields {
  title: string;
  description: string;
  status: Status;
  tags?: Array<string>;
  projectId: number;
  image?: File;
}

export interface TaskTag {
  id: string;
  name: string;
  task: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  userId: number;
}

export interface FormProjectFields {
  title: string;
  description: string;
}

export interface ModalsProps<Fields> {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Fields) => void;
  onClick: (e: MouseEvent<HTMLAllCollection>) => void;
}

export interface TaskModalProps extends ModalsProps {}

export interface ProjectModalsProps extends ModalsProps {
  onSave: (data: FormProjectFields) => void;
}

export interface LoginInitialValues {
  emailOrUsername: string;
  password: string;
}
export interface SignupInitialValues {
  email: string;
  username: string;
  password: string;
  termsAndConditions: boolean;
}

export interface ProjectFormInitialVales {
  title: string;
  description: string;
}

export interface TaskFormInitialValues {
  title: string;
  description?: string;
  tags?: Array<TaskTag>;
  status: StatusValue;
  image?: File;
}

export type IconSize = (typeof ICON_SIZES)[keyof typeof ICON_SIZES];

export type IconType = React.ComponentType<SvgIconProps>;

export type ModalType<T> = React.FC<ModalsProps<T>>;

export type Providers = "google" | "facebook" | "apple";

type Session = Session & {
  user: {
    id: string;
  };
};

export interface DropdownOption {
  text: string;
  href: string;
  Icon: React.FC;
}

export type VariableTypesButton = "close" | "outline" | "default";

export type RoundedTypesButton = "md" | "lg" | "sm" | "full";

export type PositionTypesButton = "top" | "bottom" | "left" | "right";

export type TypeTypesButton = "submit" | "button" | "reset";

export interface ModalFormDefaultProps<T> {
  formName: string;
  closeModal: () => void;
}

export interface ProjectFormProps {
  projectId?: Project["id"];
  projectTitle?: string;
  projectDescription?: string;
}

export interface TaskFormProps {
  taskId?: Task["id"];
  taskTitle?: string;
  taskDescription?: string;
  taskTags?: Array<TaskTag>;
  taskStatus?: StatusValue;
  taskImage?: string;
}

type ExcludeClose<T> = T extends "close" ? never : T;

export type VariableTypesButtonExcludeClose = ExcludeClose<VariableTypesButton>;

export interface ModalDefaultProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  openButtonRounded?: RoundedTypesButton;
  openButtonVariable?: VariableTypesButtonExcludeClose;
  buttonActionText: string;
  buttonCancelText: string;
  buttonText?: string;
  positionButton?: PositionTypesButton;
  modalTitle?: string;
  modalDescription?: string;
  ModalIcon?: React.FC;
  deleteModal?: boolean;
  buttonAction?: () => void;
}

export interface FormModalDefaultProps extends ModalDefaultProps {
  open?: never;
  setOpen?: never;
  modalFormName: string;
  Form: React.FC<ModalFormDefaultProps<ProjectFormProps | TaskFormProps>>;
  formProps?: TaskFormProps | ProjectFormProps;
  deleteIcon?: boolean;
  typeOfForm: "task" | "project";
}

export interface Testimonial {
  name: string;
  ocupation: string;
  message: string;
}

export interface KeyFeature {
  title: string;
  description: string;
}
export interface PaymentPlanFeature {
  avaible: boolean;
  text: string;
}

export type PaymentPeriodTypes =
  (typeof PAYMENT_PERIOD_OPTIONS)[keyof typeof PAYMENT_PERIOD_OPTIONS];

export type PaymentPeriodOptions = PaymentPeriodTypes | null;

export interface PaymentPlan {
  CTA: { text: string; url: string };
  name: string;
  description: string;
  price: number | "Contact Us";
  period: Array<PaymentPeriodOptions>;
  features: Array<PaymentPlanFeature>;
}

export interface IconProps {
  width?: number;
  height?: number;
  stroke?: number;
  className?: string;
}

export interface IconKeyFeature extends KeyFeature {
  Icon: React.FC<IconProps>;
}

export interface Privacy {
  title: string;
  header: string;
  list: Array<{ title: string; description: string }>;
  footer?: string;
}
