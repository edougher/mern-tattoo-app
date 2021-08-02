import React from "react";
import { Modal, Backdrop, Fade, Card, CardMedia } from "@material-ui/core";
import { useStyles } from "./styles";

const ImageModal = ({ open, handleClose, imgs }) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div >
            {imgs.map((img) => (
              <Card className={{maxWidth: 375}}>
                <CardMedia
                  className={classes.img}
                  image={img}
                  title="uploaded img file"
                />
              </Card>
            ))}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ImageModal;
