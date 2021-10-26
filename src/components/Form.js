import React, { useState } from "react";
import "../css/form.css";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";
import { createPost } from "../api";
import { Link} from "react-router-dom";

function Form() {
  const dispatch = useDispatch();
  const[ alert, setAlert] =useState(false);

  const postSchema = yup.object().shape({
    title: yup.string().required(),
    subtitle: yup.string(),
    content: yup.string().min(20, "en az 20 karakter olmalı").required(),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      subtitle: "",
      content: "",
    },
    validationSchema: postSchema,
    onSubmit: async (values, bag) => {
      console.log(values,"values");
      try {
        setAlert(true);
        dispatch(
          createPost({
            title: values.title,
            subtitle: values.subtitle,
            content: values.content,
          })
        );
       

      } catch (bag) {
        console.log(bag)
      }
    },
  });

  return (
    <div>
      <form
        className="card"
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <h2>Add a Post</h2>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Subtitle</label>
              <input
                type="text"
                id="subtitle"
                name="subtitle"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subtitle}
              />
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Content</label>
              <textarea
                style={{ height: 100 }}
                id="content"
                name="content"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.content}
              ></textarea>
            </div>
          </div>

          <div className="col" style={{ marginTop: 50 }}>
            <Link to="/" >
            <input type="submit" value="Submit" onClick={formik.handleSubmit} />
            </Link>
          </div>

          {
            alert===true && (
              <div className="col" >
              <div className="alert"> 🎉  Success !!  Your post has been added. </div>
            </div>
            )
          }


        </div>
      </form>
    </div>
  );
}

export default Form;
