"use client";
import FormModal from "@/components/ui/FormModal";
import AddIcon from "@/components/ui/icons/AddIcon";
import { VariableTypesButton } from "@/types";

interface DefaultFABProps {
  Icon?: React.FC;
  text: string;
  buttonVariable: VariableTypesButton;
}

interface FABWithModal extends DefaultFABProps {
  Modal: React.FC<any>;
  ModalForm: React.FC<any>;
  modalFormName: string;
  modalDescription: string;
  modalTitle: string;
  ModalIcon?: React.FC;
  buttonActionText: string;
  buttonCancelText: string;
}

interface FABWithoutModal extends DefaultFABProps {
  Modal?: never;
  ModalForm?: never;
  modalFormName?: never;
  modalDescription?: never;
  modalTitle?: never;
  ModalIcon?: never;
  buttonActionText?: never;
  buttonCancelText?: never;
}

type Props = FABWithoutModal | FABWithModal;

const FAB: React.FC<Props> = ({
  buttonVariable,
  Icon,
  Modal,
  ModalForm,
  ModalIcon,
  text,
  modalDescription,
  modalTitle,
  modalFormName,
  buttonActionText,
  buttonCancelText,
}) => {
  return (
    <div className="top-10 right-16 fixed">
      <FormModal
        modalFormName="ModalCreateTaskForm"
        Form={ModalForm}
        buttonActionText={buttonActionText}
        buttonCancelText={buttonCancelText}
        modalDescription={modalDescription}
        modalTitle={modalTitle}
        ModalIcon={AddIcon}
        buttonText={text}
      />
    </div>
  );
};

export default FAB;
