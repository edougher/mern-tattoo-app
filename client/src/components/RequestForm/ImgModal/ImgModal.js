import React from 'react';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import { useStyles } from './styles';


const ImageModal = () => {
    const classes = useStyles()

    const handleClose = () => {
        
    }

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
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ImageModal;