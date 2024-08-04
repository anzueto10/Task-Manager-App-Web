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
      <div className="relative flex h-16 items-center justify-between px-2 md:px-6 lg:px-8">
        <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2te focus:outline-none focus:ring-2 focus:ring-inset">
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
        <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-between">
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
          <div className="hidden md:ml-6 md:block">
            <div className="flex space-x-4 items-center h-full gap-4 md:gap-6">
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

      <DisclosurePanel className="md:hidden">
        <div className="px-2 pb-3 pt-2 flex flex-col">
          {Object.entries(HOME_NAVBAR_OPTIONS).map(([key, value]) => (
            <DisclosureButton
              key={key}
              as={Link}
              href={value.href}
              className={`underline-offset-4 font-medium mb-3  block rounded-md px-3 py-2 text-base ${
                currenPath === value.href
                  ? "bg-mutedForeground-light dark:bg-mutedForeground-dark text-secondary-light dark:text-secondary-dark"
                  : "hover:bg-card-light dark:hover:bg-card-dark"
              }`}
            >
              {value.text}
            </DisclosureButton>
          ))}
          <hr />
          <div className="my-5">
            <ToggleTheme onlyIcons />
          </div>
          <TryAndLearnButtons />
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default MainNavBar;
