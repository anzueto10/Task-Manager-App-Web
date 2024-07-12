"use client";
import { forwardRef } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import ToggleTheme from "@/components/ui/toggle-theme/ToggleTheme";
import Button from "@/components/ui/button/Button";
import {
  DropdownOption,
  RoundedTypesButton,
  VariableTypesButton,
} from "@/types";

interface Props {
  options: Record<string, DropdownOption>;
  toggleTheme?: boolean;
  text?: string;
  Icon?: React.FC;
  haveChevronDown?: boolean;
  variableButton?: VariableTypesButton;
  roundedButton?: RoundedTypesButton;
}

const Dropdown: React.FC<Props> = ({
  options,
  toggleTheme,
  Icon,
  text,
  haveChevronDown,
  variableButton,
  roundedButton,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton as={Button} variable={variableButton} rounded={roundedButton}>
        {text && <span>{text}</span>}
        {Icon && <Icon />}
        {haveChevronDown && (
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" />
        )}
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 border mt-2 w-fit origin-top-right divide-y divide-gray-100 rounded-md bg-background-light shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none dark:bg-background-dark data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="p-1">
          {Object.entries(options).map(([key, value]) => (
            <MenuItem key={key}>
              {({ focus }) => (
                <Link
                  href={value.href}
                  className={`px-4 py-2 text-sm inline-flex w-full ${
                    focus && "bg-secondary-light dark:bg-secondary-dark"
                  }`}
                >
                  <value.Icon />
                  <span className="ml-2">{value.text}</span>
                </Link>
              )}
            </MenuItem>
          ))}
        </div>

        {toggleTheme && (
          <div className="py-2">
            <MenuItem key="toggle-theme">
              <ToggleThemeWithRef />
            </MenuItem>
          </div>
        )}
      </MenuItems>
    </Menu>
  );
};

const ToggleThemeComponent: React.ForwardRefRenderFunction<any, {}> = (
  props,
  ref
) => {
  return <ToggleTheme {...props} />;
};
const ToggleThemeWithRef = forwardRef(ToggleThemeComponent);

export default Dropdown;
