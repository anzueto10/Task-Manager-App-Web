import { ICON_SIZES, STATUS_TEXTS, STATUS_TEXTS_CLIENT } from "@/consts";
import { SvgIconProps } from "@mui/material";

export type Status = (typeof STATUS_TEXTS)[keyof typeof STATUS_TEXTS];

export type StatusTextClient =
  (typeof STATUS_TEXTS_CLIENT)[keyof typeof STATUS_TEXTS_CLIENT];

export interface Task {
  id: number;
  title: string;
  description: string;
  image: string;
  status: Status;
  tags: Array<string>;
  project: number;
}

export interface FormTaskFields {
  title: string;
  description: string;
  status: Status;
  tags: Array<string>;
  project: number;
  image: File;
}

export interface Project {
  id: number;
  title: string;
  description: string;
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

export type IconSize = (typeof ICON_SIZES)[keyof typeof ICON_SIZES];

export type IconType = React.ComponentType<SvgIconProps>;

export type ModalType<T> = React.FC<ModalsProps<T>>;
