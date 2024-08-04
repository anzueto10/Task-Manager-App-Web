import CloseIcon from "@/components/ui/icons/CloseIcon";
import type {
  PositionTypesButton,
  RoundedTypesButton,
  TypeTypesButton,
  VariableTypesButton,
  VariableTypesButtonExcludeClose,
} from "@/types";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface BaseProps {
  as?: any;
  size?: "large" | "medium" | "small" | "xlarge";
  onClick?: () => void;
  variable?: VariableTypesButton;
  rounded?: RoundedTypesButton;
  position?: PositionTypesButton;
  type?: TypeTypesButton;
  color?: "danger" | "success" | "warnig" | "default";
  full?: boolean;
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
      rounded = "md",
      type = "button",
      forForm,
      as: As,
      color = "default",
      size = "medium",
      full = false,
      ...props
    },
    ref,
  ) => {
    return (
      <>
        {As ? (
          <As
            type={type}
            ref={ref}
            className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:cursor-pointer
            ${full && "w-full"}
              ${
                color === "danger"
                  ? `${
                      variable === "outline"
                        ? "text-primary-light border border-red-500 ring-offset-red-500 hover:text-accentForeground-light bg-background-light dark:hover:text-accentForeground-dark dark:ring-offset-background-dark dark:bg-background-dark dark:text-primary-dark hover:bg-accent-light dark:border-input-dark dark:hover:bg-accent-dark"
                        : variable === "close"
                          ? "text-secondary-dark dark:text-secondary-light"
                          : variable === "default" &&
                            "border-none outline-none bg-red-500 text-primaryForeground-light hover:bg-primary-light/90 dark:bg-foreground-dark dark:text-red-500 dark:hover:bg-primary-dark/90"
                    }`
                  : color === "success"
                    ? `${
                        variable === "outline"
                          ? "text-primary-light border border-input-light ring-offset-background-light hover:text-accentForeground-light bg-background-light dark:hover:text-accentForeground-dark dark:ring-offset-background-dark dark:bg-background-dark dark:text-primary-dark hover:bg-accent-light dark:border-input-dark dark:hover:bg-accent-dark"
                          : variable === "close"
                            ? "text-secondary-dark dark:text-secondary-light"
                            : variable === "default" &&
                              "border-none outline-none bg-foreground-light text-primaryForeground-light hover:bg-primary-light/90 dark:bg-foreground-dark dark:text-primaryForeground-dark dark:hover:bg-primary-dark/90"
                      }`
                    : color === "warnig"
                      ? `${
                          variable === "outline"
                            ? "text-primary-light border border-input-light ring-offset-background-light hover:text-accentForeground-light bg-background-light dark:hover:text-accentForeground-dark dark:ring-offset-background-dark dark:bg-background-dark dark:text-primary-dark hover:bg-accent-light dark:border-input-dark dark:hover:bg-accent-dark"
                            : variable === "close"
                              ? "text-secondary-dark dark:text-secondary-light"
                              : variable === "default" &&
                                "border-none outline-none bg-foreground-light text-primaryForeground-light hover:bg-primary-light/90 dark:bg-foreground-dark dark:text-primaryForeground-dark dark:hover:bg-primary-dark/90"
                        }`
                      : color === "default" &&
                        `${
                          variable === "outline"
                            ? "text-primary-light border border-input-light ring-offset-background-light hover:text-accentForeground-light bg-background-light dark:hover:text-accentForeground-dark dark:ring-offset-background-dark dark:bg-background-dark dark:text-primary-dark hover:bg-accent-light dark:border-input-dark dark:hover:bg-accent-dark"
                            : variable === "close"
                              ? "text-secondary-dark dark:text-secondary-light"
                              : variable === "default" &&
                                "border-none outline-none bg-foreground-light text-primaryForeground-light hover:bg-primary-light/90 dark:bg-foreground-dark dark:text-primaryForeground-dark dark:hover:bg-primary-dark/90"
                        }`
              }

              ${
                position === "right"
                  ? "ml-auto"
                  : position === "left"
                    ? "mr-auto"
                    : position === "top"
                      ? "mb-auto"
                      : position === "bottom" && "mt-auto"
              }
        
              ${
                rounded === "full"
                  ? `rounded-full ${
                      size === "xlarge"
                        ? "p-7"
                        : size === "large"
                          ? "p-5"
                          : size === "medium"
                            ? "p-3"
                            : size === "small" && "p-1"
                    }`
                  : `${
                      size === "xlarge"
                        ? "px-7 py-6"
                        : size === "large"
                          ? "px-5 py-4"
                          : size === "medium"
                            ? "px-3 py-2"
                            : size === "small" && "px-1 py-0.5"
                    }`
              }`}
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
            ${full && "w-full"}
            ${
              color === "danger"
                ? `${
                    variable === "outline"
                      ? "text-primary-light border border-red-500 ring-offset-red-500 hover:text-accentForeground-light bg-background-light dark:hover:text-accentForeground-dark dark:ring-offset-background-dark dark:bg-background-dark dark:text-primary-dark hover:bg-accent-light dark:border-input-dark dark:hover:bg-accent-dark"
                      : variable === "close"
                        ? "text-secondary-dark dark:text-secondary-light"
                        : variable === "default" &&
                          "border-none outline-none bg-red-500 text-primaryForeground-light hover:bg-red-500/90 dark:bg-red-600 dark:text-primary-dark dark:hover:bg-red-600/90"
                  }`
                : color === "success"
                  ? `${
                      variable === "outline"
                        ? "text-primary-light border border-input-light ring-offset-background-light hover:text-accentForeground-light bg-background-light dark:hover:text-accentForeground-dark dark:ring-offset-background-dark dark:bg-background-dark dark:text-primary-dark hover:bg-accent-light dark:border-input-dark dark:hover:bg-accent-dark"
                        : variable === "close"
                          ? "text-secondary-dark dark:text-secondary-light"
                          : variable === "default" &&
                            "border-none outline-none bg-foreground-light text-primaryForeground-light hover:bg-primary-light/90 dark:bg-foreground-dark dark:text-primaryForeground-dark dark:hover:bg-primary-dark/90"
                    }`
                  : color === "warnig"
                    ? `${
                        variable === "outline"
                          ? "text-primary-light border border-input-light ring-offset-background-light hover:text-accentForeground-light bg-background-light dark:hover:text-accentForeground-dark dark:ring-offset-background-dark dark:bg-background-dark dark:text-primary-dark hover:bg-accent-light dark:border-input-dark dark:hover:bg-accent-dark"
                          : variable === "close"
                            ? "text-secondary-dark dark:text-secondary-light"
                            : variable === "default" &&
                              "border-none outline-none bg-foreground-light text-primaryForeground-light hover:bg-primary-light/90 dark:bg-foreground-dark dark:text-primaryForeground-dark dark:hover:bg-primary-dark/90"
                      }`
                    : color === "default" &&
                      `${
                        variable === "outline"
                          ? "text-primary-light border border-input-light ring-offset-background-light hover:text-accentForeground-light bg-background-light dark:hover:text-accentForeground-dark dark:ring-offset-background-dark dark:bg-background-dark dark:text-primary-dark hover:bg-accent-light dark:border-input-dark dark:hover:bg-accent-dark"
                          : variable === "close"
                            ? "text-secondary-dark dark:text-secondary-light"
                            : variable === "default" &&
                              "border-none outline-none bg-foreground-light text-primaryForeground-light hover:bg-primary-light/90 dark:bg-foreground-dark dark:text-primaryForeground-dark dark:hover:bg-primary-dark/90"
                      }`
            }
      
       ${
         position === "right"
           ? "ml-auto"
           : position === "left"
             ? "mr-auto"
             : position === "top"
               ? "mb-auto"
               : position === "bottom" && "mt-auto"
       }
      ${
        rounded === "full"
          ? "rounded-full"
          : rounded === "lg"
            ? "rounded-lg"
            : rounded === "md"
              ? "rounded-md"
              : rounded === "sm" && "rounded-sm"
      }
              ${
                size === "xlarge"
                  ? "px-8 py-3"
                  : size === "large"
                    ? "px-6 py-3"
                    : size === "medium"
                      ? "px-4 py-2"
                      : size === "small" && "px-1 py-0.5"
              }
              `}
            onClick={onClick}
            form={forForm}
            type={type}
            {...props}
          >
            {variable === "close" ? <CloseIcon /> : <>{children}</>}
          </button>
        )}
      </>
    );
  },
);

Button.displayName = "Button";

export default Button;
