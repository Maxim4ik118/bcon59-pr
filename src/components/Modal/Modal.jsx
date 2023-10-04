import { useEffect } from 'react';
import style from './Modal.module.css';

import React from 'react';

export const Modal = ({data, onCloseModal}) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onCloseModal]);



  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  return (
    <div className={style.overlay} onClick={handleOverlayClick}>
      <div className={style.modal}>
        <div>{data}</div>
        <button
          className={style.closeModalBtn}
          onClick={onCloseModal}
        >
          &times;
        </button>
      </div>
    </div>
  );
};
