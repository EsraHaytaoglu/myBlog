import axios from "axios";

const apiEndPoint ="https://esra-blog-backend.herokuapp.com/posts/";

export const fetchPosts = async () => await axios.get(apiEndPoint);

export const createPost = async (post) => await axios.post(apiEndPoint, post);

export const updatePost = async (id, updatedPost) => await axios.patch(`${apiEndPoint}${id}`, updatedPost);

export const deletePost = async (id) => await axios.delete(`${apiEndPoint}${id}`);

export const fetchSinglePost = async (id) => await axios.get(`${apiEndPoint}${id}`);