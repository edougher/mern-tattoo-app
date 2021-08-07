import React from "react";
import Modal from "react-modal";

const ImageModal = ({ open, imgs, handleClose }) => {
  console.log(imgs);

  return (
    <Modal isOpen={open} onClick={handleClose}>
      <button onClick={handleClose}>Close</button>
      {imgs.map((img) => {
        return (
          <img src={img} alt="reference material" height="500" width="400" style={{ "vertical-align":"middle"}}/>
        );
      })}
    </Modal>
  );
};

export default ImageModal;
