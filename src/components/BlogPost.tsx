import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Post } from "../types/Types";

type IBlogType = {
  post: Post;
};
const BlogPost: React.FC<IBlogType> = (props): JSX.Element => {
  const { post } = props;
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: 400,
        backgroundColor: "orange",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardHeader
        avatar={<Avatar alt={post.owner.firstName} src={post.owner.picture} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${post.owner.firstName} ${post.owner.lastName}`}
        subheader={new Date(post.publishDate).toUTCString()}
      />
      <CardMedia
        component="img"
        height="194"
        image={post.image}
        alt={post.text}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
          <Typography variant="body2" color="text.primary">
            {post.likes}
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default BlogPost;
