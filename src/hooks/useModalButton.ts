"use client";
import { MouseEvent, useState } from "react";

const useModalButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const clickModal = (e: MouseEvent<HTMLAllCollection>) => e.stopPropagation();

  return {
    modalIsOpen,
    openModal,
    closeModal,
    clickModal,
  };
};

export default useModalButton;
