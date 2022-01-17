import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import CustomForm from "./CustomForm";
import { CreatePost } from "../types/Types";
import { isEmpty, some } from "lodash";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
type IModalType = {
  open: boolean;
  handleClose: () => void;
  onSubmit: (post: CreatePost) => void;
};
const FullScreenDialog: React.FC<IModalType> = ({
  open,
  handleClose,
  onSubmit = (f) => f,
}): JSX.Element => {
  const [state, setState] = React.useState<CreatePost>({
    text: "",
    image: "",
    tags: "",
    owner: "",
  });
  const onCloseModal = () => {
    handleClose();
    setState({
      text: "",
      image: "",
      tags: "",
      owner: "",
    });
  };
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={onCloseModal}
        TransitionComponent={Transition}
      >
        <AppBar color="transparent" sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={onCloseModal}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Close
            </Typography>
            <Button
              autoFocus
              disabled={some(state, isEmpty)}
              color="inherit"
              onClick={() => onSubmit(state)}
            >
              Create
            </Button>
          </Toolbar>
        </AppBar>
        <CustomForm
          xs={12}
          state={state}
          handleChange={(e) =>
            setState({
              ...state,
              [e.target.name]: e.target.value,
            })
          }
        />
      </Dialog>
    </div>
  );
};
export default FullScreenDialog;
