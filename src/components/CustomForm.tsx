import { Box, Container, Grid, MenuItem, TextField } from "@mui/material";
import { map } from "lodash";
import React from "react";
import useTags from "../hooks/useTags";
import useUsers from "../hooks/useUsers";
import { CreatePost } from "../types/Types";

type IFormType = {
  xs: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  state: CreatePost;
};

const CustomForm: React.FC<IFormType> = ({
  xs,
  handleChange,
  state,
}): JSX.Element => {
  const { data } = useUsers(0, 50);

  return (
    <Container
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, mt: 3 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={xs}>
              <TextField
                fullWidth
                onChange={handleChange}
                name="text"
                placeholder="Enter Text"
                type="text"
                id="text"
                label="Text"
                value={state.text}
                required
              />
            </Grid>
            <Grid item xs={xs}>
              <TextField
                fullWidth
                placeholder="Enter Image Url"
                onChange={handleChange}
                name="image"
                type="url"
                id="image"
                label="Image URL"
                value={state.image}
                required
              />
            </Grid>
            <Grid item xs={xs}>
              <TextField
                fullWidth
                id="tags"
                name="tags"
                label="Enter Tag"
                value={state.tags}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={xs}>
              <TextField
                fullWidth
                id="owner"
                name="owner"
                select
                label="Select User Id"
                value={state.owner}
                onChange={handleChange}
              >
                {data?.data?.map((option) => (
                  <MenuItem key={option?.id} value={option?.id}>
                    {option?.id}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  );
};
export default CustomForm;
