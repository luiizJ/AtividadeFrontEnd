import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
  label: string;
  variant?: 'primary' | 'secondary'; }

const Button: React.FC<ButtonProps> = ({ onClick, label, variant = 'primary' }) => {
  const buttonClass = variant === 'secondary' ? styles.secondary : styles.button; // Definindo a classe com base no tipo de botão

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
