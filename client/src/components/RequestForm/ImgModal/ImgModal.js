import React from "react";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import { useStyles } from "./styles";

const ImageModal = ({ open, handleClose, imgs }) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {imgs.map((img) => (
              <img src={img} alt="Uploaded Reference File" />
            ))}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ImageModal;
