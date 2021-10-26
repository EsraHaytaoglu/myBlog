import React from "react";
import "../css/postList.css";
import moment from "moment";
import { Link } from "react-router-dom";
import {Paper  } from "@material-ui/core";

function Post({ post }) {
  const convertRelativeTime = (date) => {
    return moment(date).fromNow();
  };
  return (
    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2, }} style={{ marginBottom: 50, padding:20}} id="one">
      <h3> {post.title} </h3>
      <p className="subtitle"> {post.subtitle} </p>
      <p className="content"> {post.content.substring(0, 150) + "..."} </p>
      <div className="subtitle">{convertRelativeTime(post.createdAt)}</div>
      <Link  to={`/${post._id}`}>
        <button className="btn" style={{ marginLeft: 1000}}>Read More</button>
        </Link>
      
    </Paper>
  );
}

export default Post;
