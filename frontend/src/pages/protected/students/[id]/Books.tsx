import React, { useState } from "react";
import { api } from "../../../../store/api/api";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useGetBooks } from "../../../../hooks/books";
import HorizontalBook from "../../../../components/books/HorizontalBook";
import SearchBook from "../../../../components/books/SearchBook";

function BooksPage(props) {
  const [searchTerm, setSearchTerm] = useState("");
  //   const { data, error, isLoading } = api.useGetBooksQuery(searchTerm);
  const { data, error, loading: isLoading } = useGetBooks();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
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
          marginBottom: 16,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          //   backgroundColor: "red",
        }}
      >
        <SearchBook />
      </Box>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data?.books?.map((book) => (
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
