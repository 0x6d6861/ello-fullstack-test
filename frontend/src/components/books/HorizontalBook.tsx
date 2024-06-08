import { useTheme } from "@emotion/react";
import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Book } from "../../store/api";

function HorizontalBook(props: {
  book: Book;
  onRemove?: (book: Book) => void;
}) {
  const theme = useTheme();
  const [show, setShow] = useState(false);

  return (
    <Box
      sx={{
        width: 200,
      }}
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <img
          style={{
            width: 200,
            height: 200,
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
      </Box>

      {show && (
        <Button
          variant="text"
          color="error"
          onClick={() => {
            props.onRemove && props.onRemove(props.book);
          }}
        >
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
  );
}

export default HorizontalBook;
