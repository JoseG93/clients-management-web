import React, { useImperativeHandle } from "react";

const AlertConfirmation = ({ ref, message, onConfirm, onCancel }) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    };
  });

  function handleOnClose() {

  }


  return createPortal(
    <dialog ref={dialog} onClose={handleOnClose}>
      <div className="alert-confirmation">
        <p>{message}</p>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </dialog>,
    document.getElementById('modal')
  );
};

export default AlertConfirmation;
