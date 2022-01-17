import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert, Container, CssBaseline, Pagination } from "@mui/material";
import { Box } from "@mui/system";
import useUsers from "../hooks/useUsers";
import UserItem from "../components/UserItem";
import Spinner from "../components/Spinner";
import { returnTotolPages } from "../utils";
import Scroll from "../components/Scroll";
const theme = createTheme();

export interface IUsersListProps {}

export default function UsersList() {
  const [page, setPage] = React.useState(1);
  const limit = 20;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const { data, isLoading, error } = useUsers(page - 1, limit);
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
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl" sx={{ mt: 3 }}>
          <main>
            <UserItem users={data?.data} />
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
    </>
  );
}
