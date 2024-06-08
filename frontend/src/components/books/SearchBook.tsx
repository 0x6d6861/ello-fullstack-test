import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useGetBooks } from "../../hooks/books";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

export default function SearchBook() {
  const { data, error, loading: isLoading } = useGetBooks();
  return (
    <Autocomplete
      id="seach-book"
      sx={{ width: 500 }}
      options={data.books}
      autoHighlight
      getOptionLabel={(option) => option.title}
      renderOption={(props, option) => (
        <ListItem alignItems="flex-start" {...props}>
          <ListItemAvatar>
            <img
              style={{
                width: 70,
                height: 70,
                borderRadius: 8,
              }}
              src={`/${option.coverPhotoURL}`}
              alt={option.title}
              loading="lazy"
            />
          </ListItemAvatar>
          <ListItemText
            sx={{
              flex: 1,
              marginInline: 2,
              fontWeight: "700",
            }}
            primary={
              <Typography
                sx={{ display: "inline", fontWeight: "700", fontSize: "1rem" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {option.title}
              </Typography>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  by {option.author}
                </Typography>
              </React.Fragment>
            }
          />
          <span>{option.readingLevel}</span>
        </ListItem>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a book"
          variant="standard"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
