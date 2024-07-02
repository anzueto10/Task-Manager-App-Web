import { ICON_SIZES, STATUS_TEXTS, STATUS_TEXTS_CLIENT } from "@/consts";
import { SvgIconProps } from "@mui/material";
import { Session } from "next-auth";

export type Status = (typeof STATUS_TEXTS)[keyof typeof STATUS_TEXTS];

export type StatusTextClient =
  (typeof STATUS_TEXTS_CLIENT)[keyof typeof STATUS_TEXTS_CLIENT];

export type StatusValue = typeof STATUS_TEXTS[keyof typeof STATUS_TEXTS]['value'];


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
  description: string;
  image: string;
  status: StatusValue;
  tags: Array<string>;
  createdAt: string;
  project: string;
}

export interface FormTaskFields {
  title: string;
  description: string;
  status: Status;
  tags: Array<string>;
  projectId: number;
  image: File;
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

export interface TaskFormInitialValues {}

export type IconSize = (typeof ICON_SIZES)[keyof typeof ICON_SIZES];

export type IconType = React.ComponentType<SvgIconProps>;

export type ModalType<T> = React.FC<ModalsProps<T>>;

export type Providers = "google" | "facebook" | "apple";

type Session = Session & {
  user: {
    id: string;
  };
};
