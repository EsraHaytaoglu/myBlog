import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import {  Box } from "@material-ui/core";

function PostList() {
  const posts = useSelector((state) => state.posts.posts);
  return (
    <Box  sx={{ flexGrow: 1, overflow: 'hidden', px: 5, marginTop: 150}}>
      {posts.length > 0 && 
        posts.map((post) => (
            <Post post={post}  key={post?._id}/>
        ))}
    </Box>
  );
}

export default PostList;
