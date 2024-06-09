import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  Container,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useGetBooks } from "../../../../hooks/books";
import HorizontalBook from "../../../../components/books/HorizontalBook";
import SearchBook from "../../../../components/books/SearchBook";
import { addBook, removeBook } from "../../../../store/features/main/slice";
import { useOutletContext, useParams } from "react-router-dom";
import { Book } from "../../../../store/api";
import { useAppDispatch } from "../../../../store/store";
import { ContextType } from "./Layout";

function BooksPage(props) {
  //   const { data, error, isLoading } = api.useGetBooksQuery(searchTerm);
  const { data, error, loading: isLoading } = useGetBooks();

  const { studentId, studentList } = useOutletContext<ContextType>();

  //   const student = useSelector(getStudentById)(studentId);
  const dispatch = useAppDispatch();

  const handleOnSelect = (book: Book) => {
    dispatch(
      addBook({
        book: book,
        studentId: studentId!,
      })
    );
  };

  const handleOnRemove = (book: Book) => {
    dispatch(
      removeBook({
        bookId: book.uid,
        studentId: studentId!,
      })
    );
  };

  if (isLoading) return <CircularProgress />;
  if (error)
    return (
      <Typography variant="h6" color="error">
        Error: {error.message}
      </Typography>
    );

  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          marginBottom: 16,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          //   backgroundColor: "red",
        }}
      >
        <SearchBook onSelect={handleOnSelect} />
      </Box>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {studentList?.length === 0 && (
          <Grid
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack spacing={1} sx={{ marginBottom: 6 }}>
              <Skeleton variant="rounded" width={200} height={200} />
              <Skeleton variant="rounded" height={12} width={170} />
              <Skeleton variant="rounded" height={8} width={110} />
            </Stack>

            <Typography variant="h6">{"No books yet.."}</Typography>
            <Typography>Choose a book from the search bar above</Typography>
          </Grid>
        )}

        {studentList?.map((book) => (
          <Grid
            key={book.id}
            xs={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HorizontalBook
              key={book.uid}
              book={book}
              onRemove={handleOnRemove}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default BooksPage;
