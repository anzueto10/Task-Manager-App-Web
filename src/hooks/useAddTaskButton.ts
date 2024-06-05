"use client";
import { useState } from "react";

const useAddTaskButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return {
    modalIsOpen,
    openModal,
    closeModal,
  };
};

export default useAddTaskButton;
