import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import PostItem from "../Components/PostItem";
import PostSorting from "../Components/PostSorting";
import useFetch from "../Hooks/useFetch";
import classes from "./Home.module.css";

const Home = () => {
  const [order, setOrder] = useState("desc");
  const endpoint = `https://usxsq020kb.execute-api.eu-north-1.amazonaws.com/api/posts/ordering/${order}`
  const { isPending, error, data: posts } = useFetch(endpoint);

  return (
    <>
      <section>
        <PostSorting setOrder={setOrder} />
        {isPending && (
          <div className={classes.spinnerContainer}>
            <CircularProgress className={classes.spinner} color="inherit" size="10rem" />
          </div>
        )}
        {error && <div>{error}</div>}
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
