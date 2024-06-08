import React, { useState } from "react";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useGetBooks } from "../../../../hooks/books";
import HorizontalBook from "../../../../components/books/HorizontalBook";
import SearchBook from "../../../../components/books/SearchBook";
import { addBook } from "../../../../store/features/main/slice";
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
            <HorizontalBook book={book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default BooksPage;
