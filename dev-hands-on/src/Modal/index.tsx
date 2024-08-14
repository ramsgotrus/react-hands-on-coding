import React, { FC, useState } from "react";
import "./styles.css";
import { ModalContainer } from "./ModalContainer";

export const Modal: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <h1>Modal Example</h1>
      <button onClick={openModal}>Open modal</button>
      <ModalContainer isModelOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Tile</h2>
      </ModalContainer>
    </div>
  );
};
