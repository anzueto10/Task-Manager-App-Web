"use client";
import { ADD_BUTTONS_TEXT } from "@/consts";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Button from "@/components/ui/Button";

interface FormModalProps {
  closeModal: () => void;
}

interface Props {
  buttonText: string;
  Form: React.FC<FormModalProps>;
}
const ProjectModal: React.FC<Props> = ({ buttonText, Form }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>{buttonText}</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="bg-white rounded-lg shadow dark:bg-gray-700">
          <ModalHeader className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {ADD_BUTTONS_TEXT.PROJECT}
            </h3>
            <ModalCloseButton className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-base w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <svg
                className="w-3 h-3"
                aria-hidden={true}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Form closeModal={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectModal;
