import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BlogPost from "../components/BlogPost";
import usePosts from "../hooks/usePosts";
import { Alert, Pagination } from "@mui/material";
import { Box } from "@mui/system";
import { Post } from "../types/Types";
import Spinner from "../components/Spinner";
import { returnTotolPages } from "../utils";
import Scroll from "../components/Scroll";
const theme = createTheme();

export default function BlogPosts() {
  const [page, setPage] = React.useState(1);
  const limit = 20;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const { data, isLoading, error } = usePosts(page - 1, limit);
  if (error) {
    return (
      <Box>
        <Alert variant="filled" severity="error">
          {error.message}
        </Alert>
      </Box>
    );
  }
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ mt: 3 }}>
          <main>
            <Grid container spacing={2}>
              {data?.data?.map((post: Post) => (
                <Grid key={post.id} item xs={6} md={3}>
                  <BlogPost post={post} />
                </Grid>
              ))}
            </Grid>
          </main>
          <Scroll showBelow={400} />
          <Box
            display="flex"
            width={"100%"}
            mt={2}
            alignItems="center"
            justifyContent="center"
          >
            <Pagination
              page={page}
              onChange={handleChange}
              count={returnTotolPages(data?.total, limit)}
              variant="outlined"
              color="secondary"
            />
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
}
