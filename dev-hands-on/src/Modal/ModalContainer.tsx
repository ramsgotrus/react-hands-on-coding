import React, { FC } from "react";
import "./styles.css";

interface ModalContainerProps {
  isModelOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export const ModalContainer: FC<ModalContainerProps> = ({
  isModelOpen,
  onClose,
  children,
}) => {
  if (!isModelOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};
