import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Button from "@/components/ui/button/Button";

import { Fragment } from "react";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer: React.FC<Props> = ({ children, isOpen, setIsOpen }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-background-light dark:bg-background-dark bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden bg-background-light dark:bg-background-dark">
          <DialogPanel className="absolute inset-0 bg-background-light dark:bg-background-dark" />

          <div className="fixed inset-y-0 left-0 flex max-w-full pr-10">
            <TransitionChild
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <TransitionChild
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 pt-4 pl-4">
                    <Button onClick={() => setIsOpen(false)}>
                      <span className="sr-only">Close panel</span>
                    </Button>
                  </div>
                </TransitionChild>

                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <DialogTitle className="text-lg font-medium">
                      Panel title
                    </DialogTitle>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    {children}
                  </div>
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Drawer;
