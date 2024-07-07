"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Button from "./Button";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  setOpen: (state: boolean) => void;
}

export const Modal: React.FC<Props> = ({ children, isOpen, setOpen }) => {
  return (
    <>
      <Dialog
        className="relative z-10"
        open={isOpen}
        onClose={() => setOpen(false)}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-background-light/80 dark:bg-background-dark/80 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform border overflow-hidden rounded-lg bg-background-light text-left shadow-xl transition-all dark:bg-background-dark data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export const ModalTitle: React.FC<Props> = ({ children, setOpen }) => {
  return (
    <DialogTitle
      as="h3"
      className="text-lg font-medium leading-6 text-gray-900 inline-flex"
    >
      {children}
      <Button variable="close" onClick={() => setOpen(false)} />
    </DialogTitle>
  );
};

export const ModalContent: React.FC<Props> = ({ children }) => {
  return <div className="mt-2">{children}</div>;
};

export const ModalActions: React.FC<Props> = ({ children }) => {
  return <div className="mt-4 flex justify-end space-x-2">{children}</div>;
};
