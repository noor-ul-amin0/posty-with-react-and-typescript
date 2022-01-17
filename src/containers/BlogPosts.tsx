import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BlogPost from "../components/BlogPost";
import usePosts from "../hooks/usePosts";
import { Alert, Pagination } from "@mui/material";
import { Box } from "@mui/system";
import Spinner from "../components/Spinner";
import { returnTotolPages } from "../utils";
import Scroll from "../components/Scroll";
import CustomButton from "../components/Button";
import FullScreenDialog from "../components/CustomModal";
import { Post } from "../types/Types";
import { useMutation } from "react-query";
import { api } from "../api";
import { queryClient } from "..";
const theme = createTheme();

export default function BlogPosts() {
  const [page, setPage] = React.useState(1);
  const limit = 20;
  const [open, setOpen] = React.useState(false);
  const { isLoading: isMutationLoading, mutateAsync } = useMutation(
    (post) => api.post("/post/create", post),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  if (isLoading || isMutationLoading) {
    return <Spinner />;
  }
  const onSubmit = async (post: any) => {
    await mutateAsync(post);
    handleClose();
  };
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FullScreenDialog
          open={open}
          handleClose={handleClose}
          onSubmit={onSubmit}
        />
        <Container maxWidth="xl" sx={{ mt: 3 }}>
          <main>
            <Grid container justifyContent="flex-end" sx={{ mb: 2 }}>
              <CustomButton title="Create Post" handleClick={handleClickOpen} />
            </Grid>
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
