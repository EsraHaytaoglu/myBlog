import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./actions/post";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <>
      
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <PostList />
          </Route>
          <Route exact path="/:id">
            <PostDetails />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
