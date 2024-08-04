"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Button from "@/components/ui/button/Button";
import { ModalDefaultProps } from "@/types";

export const Modal: React.FC<ModalDefaultProps> = ({
  buttonActionText,
  buttonCancelText,
  modalDescription,
  modalTitle,
  open,
  setOpen,
  deleteModal,
  buttonAction,
}) => {
  const handleButtonClick = () => {
    setOpen(false);
    if (buttonAction) buttonAction();
  };
  return (
    <>
      <Dialog className="relative z-10" open={open} onClose={setOpen}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-background-light/80 dark:bg-background-dark/80 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform border overflow-hidden rounded-lg bg-background-light text-left shadow-xl transition-all dark:bg-background-dark data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 p-6"
            >
              <DialogTitle
                as="header"
                className="text-base w-full font-semibold leading-6 inline-flex"
              >
                <section>
                  <h3 className="text-lg font-semibold mb-2">{modalTitle}</h3>
                </section>
                <Button
                  variable="close"
                  onClick={() => setOpen(false)}
                  position="right"
                />
              </DialogTitle>

              <div className="mt-2">
                <p className="text-sm font-normal text-mutedForeground-light dark:text-mutedForeground-dark">
                  {modalDescription}
                </p>
              </div>
              <footer className="gap-3  sm:flex sm:flex-row-reverse sm:px-6">
                <Button
                  color={deleteModal ? "danger" : "default"}
                  onClick={handleButtonClick}
                >
                  {buttonActionText}
                </Button>

                <Button variable="outline" onClick={() => setOpen(false)}>
                  {buttonCancelText}
                </Button>
              </footer>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
