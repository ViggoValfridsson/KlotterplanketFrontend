import React, { useState } from "react";
import PostSorting from "../Components/PostSorting";
import useFetch from "../Hooks/useFetch";

const Home = () => {
  const [order, setOrder] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const endpoint = `https://usxsq020kb.execute-api.eu-north-1.amazonaws.com/api/posts/page/${currentPage}`;
  const {isPending, error, data: posts} = useFetch(endpoint);

  return (
    <>
      <section>
        <PostSorting setOrder={setOrder} />
        {isPending && <div>loading...</div>}
        {error && <div>{error}</div>}
        {posts && !error && posts.map((post) => <p key={post.id}>{post.message}</p>)}
      </section>
    </>
  );
};

export default Home;
