import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";

import useStyles from "./styles"
import { useSelector } from "react-redux";

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  return (
    !posts.length ? <p>There is no data now !!!</p> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post, index) => (
          <Grid key={index} item xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId}/>
          </Grid>
        ))}
      </Grid>
    )
  );
}

export default Posts;