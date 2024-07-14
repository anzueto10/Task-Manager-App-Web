"use client";
import { HOME_NAVBAR_OPTIONS } from "@/consts";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";
import ToggleTheme from "../toggle-theme/ToggleTheme";
import TryAndLearnButtons from "../button/TryAndLearnButtons";
import { usePathname } from "next/navigation";
const MainNavBar: React.FC = () => {
  const currenPath = usePathname();
  console.log(currenPath);
  return (
    <Disclosure
      as="nav"
      className="bg-secondary-light border-b dark:bg-secondary-dark sticky top-0"
    >
      <div className="relative flex h-16 items-center justify-between px-2 sm:px-6 lg:px-8">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="block h-6 w-6 group-data-[open]:hidden"
            />
            <XMarkIcon
              aria-hidden="true"
              className="hidden h-6 w-6 group-data-[open]:block"
            />
          </DisclosureButton>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
          <div className="flex flex-shrink-0 items-center relative">
            <Link href="/" className="">
              <Image
                alt="Your Company"
                src="https://res.cloudinary.com/dmdjzoset/image/upload/v1718737630/tasker/logoscuro.png"
                className="w-auto rounded-md"
                height={38}
                width={38}
              />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4 items-center h-full gap-4 sm:gap-6">
              <ToggleTheme onlyIcons />
              {Object.entries(HOME_NAVBAR_OPTIONS).map(([key, value]) => (
                <Link
                  key={key}
                  href={value.href}
                  aria-current={value.href ? "page" : undefined}
                  className={`text-sm underline-offset-4 font-medium ${
                    currenPath === value.href ? "underline" : "hover:underline"
                  }`}
                >
                  {value.text}
                </Link>
              ))}
              <TryAndLearnButtons />
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {Object.entries(HOME_NAVBAR_OPTIONS).map(([key, value]) => (
            <DisclosureButton
              key={key}
              as={Link}
              href={value.href}
              className={`text-sm underline-offset-4 font-medium ${
                currenPath === value.href ? "underline" : "hover:underline"
              }`}
            >
              {value.text}
            </DisclosureButton>
          ))}

          <TryAndLearnButtons />
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default MainNavBar;
