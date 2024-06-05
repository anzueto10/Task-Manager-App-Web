"use client";
import { useState } from "react";

const useTaskModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return {
    modalIsOpen,
    openModal,
    closeModal,
  };
};
