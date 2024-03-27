import React from 'react';
import { createPortal } from 'react-dom';

import Button from './Button';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  buttonCaption: string;
  [x: string]: any;
}

const Modal: React.FC<Props> = ({
  isOpen,
  onClose,
  buttonCaption,
  children,
}) => {
  if (!isOpen) {
    return <></>;
  }

  return createPortal(
    <dialog open className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md ">
      {children}
      <form method="dialog" onSubmit={onClose} className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')!,
  );
};

export default Modal;
