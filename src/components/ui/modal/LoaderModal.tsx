import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

interface Props {
  loader: React.FC;
  text: string;
}

const LoaderModal: React.FC<Props> = ({ loader: Loader, text }) => {
  return (
    <Dialog className="relative z-10" open={true} onClose={() => {}}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-background-light/80 dark:bg-background-dark/80 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform flex flex-col justify-center items-center overflow-hidden rounded-lg bg-transparent text-left shadow-xl transition-al data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 p-6"
          >
            <DialogTitle
              as="h3"
              className="text-base w-full font-semibold leading-6 text-center mb-5"
            >
              {text}
            </DialogTitle>

            <Loader />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default LoaderModal;
