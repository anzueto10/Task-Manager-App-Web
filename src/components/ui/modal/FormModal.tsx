"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Button from "@/components/ui/button/Button";
import { useId, useState } from "react";
import type { FormModalDefaultProps } from "@/types";
import DeleteIcon from "@/components/ui/icons/DeleteIcon";
import { Modal } from "@/components/ui/modal/Modal";

interface Props extends FormModalDefaultProps {
  deleteAction?: () => void;
}

const FormModal: React.FC<Props> = ({
  buttonText,
  Form,
  positionButton,
  modalDescription,
  modalTitle,
  formProps,
  buttonActionText,
  buttonCancelText,
  openButtonVariable,
  ModalIcon,
  modalFormName,
  openButtonRounded,
  deleteIcon,
  typeOfForm,
  deleteAction,
}) => {
  const [open, setOpen] = useState(false);
  const formId = useId();

  const [confirmationDeleteOpen, setConfirmationDeleteOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        type="button"
        position={positionButton || "right"}
        variable={openButtonVariable}
        rounded={openButtonRounded || "md"}
      >
        {buttonText}
        {ModalIcon && <ModalIcon />}
      </Button>
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
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {modalTitle}
                  </h3>
                  <p className="text-sm font-normal text-mutedForeground-light dark:text-mutedForeground-dark">
                    {modalDescription}
                  </p>
                </section>
                <Button
                  variable="close"
                  onClick={() => setOpen(false)}
                  position="right"
                  type="button"
                />
              </DialogTitle>

              <div className="mt-2">
                <Form
                  closeModal={() => setOpen(false)}
                  formName={`${formId}${modalFormName}`}
                  {...formProps}
                />
              </div>
              <footer className="gap-3  sm:flex sm:flex-row-reverse sm:px-6">
                <Button type="submit" forForm={`${formId}${modalFormName}`}>
                  {buttonActionText}
                </Button>

                <Button
                  variable="outline"
                  onClick={() => setOpen(false)}
                  type="button"
                >
                  {buttonCancelText}
                </Button>

                {deleteIcon && (
                  <Button
                    variable="outline"
                    rounded="full"
                    position="left"
                    onClick={() => setConfirmationDeleteOpen(true)}
                  >
                    <DeleteIcon />
                  </Button>
                )}
              </footer>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      {deleteIcon && (
        <Modal
          buttonAction={deleteAction}
          open={confirmationDeleteOpen}
          setOpen={setConfirmationDeleteOpen}
          buttonActionText="Yes, Delete"
          buttonCancelText="Cancel"
          modalTitle={`${
            typeOfForm === "project"
              ? "Delete this project?"
              : typeOfForm === "task" && "Delete this Task?"
          }`}
          modalDescription="Are you sure for delete this?"
          deleteModal
        />
      )}
    </>
  );
};

export default FormModal;
