import { useTheme } from "@emotion/react";
import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Book } from "../../store/api";
import "./book.css";
function HorizontalBook(props: {
  book: Book;
  onRemove?: (book: Book) => void;
}) {
  const theme = useTheme();
  const [show, setShow] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Remove Book"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to remove this book?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              props.onRemove && props.onRemove(props.book);
              handleClose();
            }}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Box
        sx={{
          width: 200,
          height: "100%",
        }}
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
      >
        <Box
          className="container"
          sx={{
            marginBottom: 2,
          }}
        >
          <Box className="box-out">
            <Box
              className="book books-1"
              style={{
                background: `url(/${props.book.coverPhotoURL})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </Box>
        </Box>

        {/* <Box
          sx={{
            position: "relative",
          }}
        >
          <img
            style={{
              width: "100%",
              borderRadius: 8,
            }}
            src={`/${props.book.coverPhotoURL}`}
            alt={props.book.title}
            loading="lazy"
          />
          <div
            style={{
              backgroundColor: "white",
              width: 24,
              height: 20,
              borderRadius: 4,
              textAlign: "center",
              position: "absolute",
              top: 8,
              right: 8,
              fontWeight: "700",
              fontSize: "0.8rem",
            }}
          >
            {props.book.readingLevel}
          </div>
        </Box> */}

        {show && (
          <Button variant="text" color="error" onClick={handleClickOpen}>
            Remove
          </Button>
        )}

        {!show && (
          <>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "700",
                textOverflow: "ellipsis",
              }}
              component="div"
              color="text.primary"
              variant="h6"
            >
              {props.book.title}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.8125rem",
                fontWeight: "600",
              }}
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              by {props.book.author}
            </Typography>
          </>
        )}
      </Box>
    </>
  );
}

export default HorizontalBook;
