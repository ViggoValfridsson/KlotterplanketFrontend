import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import PostItem from "../Components/PostItem";
import PostSorting from "../Components/PostSorting";
import Error from "../Components/Error";
import useFetch from "../Hooks/useFetch";
import classes from "./Home.module.css";

const Home = ({success}) => {
  const [order, setOrder] = useState("desc");
  const endpoint = `https://usxsq020kb.execute-api.eu-north-1.amazonaws.com/api/posts/ordering/${order}`;
  const { isPending, error, data: posts } = useFetch(endpoint, success);

  return (
    <>
      <section>
        <PostSorting setOrder={setOrder} />
        {error && <Error message={error} />}
        {isPending && !error && (
          <div className={classes.spinnerContainer}>
            <CircularProgress className={classes.spinner} color="inherit" size="10rem" />
          </div>
        )}
        {posts && !error && (
          <div className={classes.post_container}>
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
