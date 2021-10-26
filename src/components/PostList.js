import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import {  Box } from "@material-ui/core";
import moment from "moment";

function PostList() {
  const convertRelativeTime = (date) => {
    return moment(date).fromNow();
  };
  const posts = useSelector((state) => state.posts.posts);
  return (
    <Box  sx={{ flexGrow: 1, overflow: 'hidden', px: 5, marginTop: 150}}>
      {posts.length > 0 && 
        posts.sort((a, b) => convertRelativeTime(a.createdAt) > convertRelativeTime(b.createdAt) ? 1 : -1).map((post) => (
            <Post post={post}  key={post?._id}/>
        )).sort()}
    </Box>
  );
}

export default PostList;
