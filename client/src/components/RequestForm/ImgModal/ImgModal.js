import React from "react";
import Modal from 'react-modal'

const ImageModal = ({ open, imgs, handleClose }) => {

  return (
    <div>
      <Modal isOpen={open}>
        <button onClick={handleClose}>Close</button>
        
    </Modal>
    </div>
  );
};

export default ImageModal;
