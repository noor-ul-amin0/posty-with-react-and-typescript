import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Owner } from "../types/Types";

type IUserType = {
  users: Array<Owner> | undefined;
};
const UserItem: React.FC<IUserType> = (props): JSX.Element => {
  const { users } = props;
  return (
    <div>
      {users?.map((user: Owner) => (
        <List key={user.id} sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ListItem alignItems="flex-start" sx={{ cursor: "pointer" }}>
            <ListItemAvatar>
              <Avatar alt={user.firstName} src={user.picture} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline", cursor: "pointer" }}
                    component="span"
                    variant="body2"
                    color="text.secondary"
                  >
                    {`${user.firstName} ${user.lastName}`}
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      ))}
    </div>
  );
};
export default UserItem;
