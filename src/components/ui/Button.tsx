import React, { forwardRef, ButtonHTMLAttributes } from "react";
import type {
  PositionTypesButton,
  RoundedTypesButton,
  TypeTypesButton,
  VariableTypesButton,
  VariableTypesButtonExcludeClose,
} from "@/types";
import CloseIcon from "./icons/CloseIcon";

interface BaseProps {
  as?: any;
  onClick?: () => void;
  variable?: VariableTypesButton;
  rounded?: RoundedTypesButton;
  position?: PositionTypesButton;
  type?: TypeTypesButton;
}

interface DefaultButtonProps extends BaseProps {
  children: React.ReactNode;
  variable?: VariableTypesButtonExcludeClose;
  forForm?: never;
}

interface SubmitButtonProps extends BaseProps {
  children: React.ReactNode;
  type: "submit" | "reset";
  forForm: string;
}

interface CloseButtonProps extends BaseProps {
  children?: never;
  forForm?: never;
  variable: "close";
}

type Props = DefaultButtonProps | CloseButtonProps | SubmitButtonProps;

const Button: React.ForwardRefExoticComponent<
  Props & ButtonHTMLAttributes<HTMLButtonElement>
> = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      onClick,
      variable = "default",
      position,
      rounded,
      type = "button",
      forForm,
      as: As,
      ...props
    },
    ref
  ) => {
    return (
      <>
        {As ? (
          <As
            ref={ref}
            className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:cursor-pointer
          ${
            variable === "outline"
              ? "text-primary-light border border-input-light ring-offset-background-light hover:text-accentForeground-light bg-background-light dark:hover:text-accentForeground-dark dark:ring-offset-background-dark dark:bg-background-dark dark:text-primary-dark hover:bg-accent-light dark:border-input-dark dark:hover:bg-accent-dark"
              : variable === "close"
              ? "text-secondary-light dark:text-secondary-dark"
              : variable === "default" &&
                "border-none outline-none bg-foreground-light text-primaryForeground-light hover:bg-primary-light/90 dark:bg-foreground-dark dark:text-primaryForeground-dark dark:hover:bg-primary-dark/90"
          } 
          ${rounded === "full" ? "rounded-full p-3" : "rounded-md px-3 py-2"} ${
              position === "right"
                ? "ml-auto"
                : position === "left"
                ? "mr-auto"
                : position === "top"
                ? "mb-auto"
                : position === "bottom" && "mt-auto"
            } `}
            onClick={onClick}
            form={forForm}
            {...props}
          >
            {variable === "close" ? <CloseIcon /> : <>{children}</>}
          </As>
        ) : (
          <button
            ref={ref}
            className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:cursor-pointer
          ${
            variable === "outline"
              ? "text-primary-light border border-input-light ring-offset-background-light hover:text-accentForeground-light bg-background-light dark:hover:text-accentForeground-dark dark:ring-offset-background-dark dark:bg-background-dark dark:text-primary-dark hover:bg-accent-light dark:border-input-dark dark:hover:bg-accent-dark"
              : variable === "close"
              ? "text-secondary-light dark:text-secondary-dark"
              : variable === "default" &&
                "border-none outline-none bg-foreground-light text-primaryForeground-light hover:bg-primary-light/90 dark:bg-foreground-dark dark:text-primaryForeground-dark dark:hover:bg-primary-dark/90"
          } 
          ${rounded === "full" ? "rounded-full p-3" : "rounded-md px-3 py-2"} ${
              position === "right"
                ? "ml-auto"
                : position === "left"
                ? "mr-auto"
                : position === "top"
                ? "mb-auto"
                : position === "bottom" && "mt-auto"
            } `}
            onClick={onClick}
            type={type}
            form={forForm}
            {...props}
          >
            {variable === "close" ? <CloseIcon /> : <>{children}</>}
          </button>
        )}
      </>
    );
  }
);

Button.displayName = "Button";

export default Button;
