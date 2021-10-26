import React from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";
import { Paper } from "@material-ui/core";
import "../css/editPost.css";
import { updatePost } from "../actions/post";

function EditPost({ post, closeEdit }) {
  const dispatch = useDispatch();


  const postSchema = yup.object().shape({
    title: yup.string().required(),
    subtitle: yup.string().required(),
    content: yup.string().min(20, "en az 20 karakter olmalı").required(),
  });

  const formik = useFormik({
    initialValues: {
        title: post?.title,
        subtitle: post?.subtitle,
        content: post?.content,
    },
    validationSchema: postSchema,
    onSubmit: async (values, bag) => {
        const updatedPost = {
            _id : post._id,
            ...values,
        };
    dispatch(updatePost(post._id, updatedPost));
    closeEdit();
    },
  });

  return (
      <Paper id="formPaper">
        <form
          className="editCard"
          noValidate
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <div className="editTitle">Edit a Post</div>
          <div className="row">
              <div className="editGrup">
                <label>Title : </label>
                <input
                  type="text"
                  id="title"
                  className="editInput"
                  name="title"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.title}
                />
             </div>

            <div className="row">
              <div className="editGrup">
                <label>Subtitle : </label>
                <input
                  type="text"
                  id="subtitle"
                  name="subtitle"
                  className="editInput"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subtitle}
                />
              </div>
            </div>

            <div className="row">
              <div className="editGrup">
                <label>Content : </label>
                <textarea
                  id="content"
                  name="content"
                  className="editContent"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.content}
                ></textarea>
              </div>
            </div>

            <div className="row" >
              <input type="submit" value="Back  " className="editBtn" onClick={closeEdit}/>
              <input type="submit" value="Submit" className="editBtn2" />
            </div>
          </div>
        </form>
      </Paper>
  );
}

export default EditPost;
