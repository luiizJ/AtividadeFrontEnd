import React from 'react';
import styles from './Modal.module.scss'; 

interface ModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  message: string;
  loading: Boolean;
}

const Modal: React.FC<ModalProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <p>Are you sure you want to delete this user?</p>
        <button className={styles.closeButton} onClick={onConfirm}>Yes</button>
        <button className={styles.closeButton} onClick={onCancel}>No</button>
      </div>
    </div>
  );
};

export default Modal;
