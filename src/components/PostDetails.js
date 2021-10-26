import React, { useEffect, useState} from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { Box, Paper } from "@material-ui/core";
import "../css/postDetail.css";
import { useParams, useHistory, Link } from "react-router-dom";
import { fetchSinglePost, deletePost } from "../actions/post";
import EditPost from "./EditPost";


function PostDetails(props) {
  const dispatch = useDispatch();
  const { id  } = useParams();
  let history= useHistory();
  const[edit, setEdit] = useState(false);

  const openEdit = () => {
    setEdit(true);
  };
  const closeEdit = () => {
    setEdit(false);
  }

  const convertRelativeTime = (date) => {
    return moment(date).fromNow();
    

  };

  const currentPost = useSelector((state) => state.posts.currentPost);
  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, [dispatch]);

  const removePost = () => {
    history.push("/");
    dispatch(deletePost(currentPost._id));
  }

  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden", px: 5, marginTop: 150 }}>
      {
        edit ? (
          <EditPost post={currentPost} closeEdit={closeEdit} />
        ) : (
          <div>
            <Paper id="border">
        <h3 className="detail-title">{currentPost?.title}</h3>
        <p className="detail-subtitle"> {currentPost?.subtitle} </p>
        <p className="detail-content"> {currentPost?.content} </p>
        <div className="detail-subtitle">{convertRelativeTime(currentPost?.createdAt)}</div>
        <div  >
        <Box component="div" sx={{ display: 'inline', marginLeft:400 }}>
          <Link to="/">
        <button className="btn" >
          Back
        </button>
        </Link>
        <button className="btn" style={{ margin: 20}} onClick={openEdit}>
          Update
        </button>
        <button className="btn" onClick={removePost}>
          Delete
        </button>
        </Box>

        </div>
      </Paper>
          </div>
        )
      }
    </Box>
  );
}

export default PostDetails;
