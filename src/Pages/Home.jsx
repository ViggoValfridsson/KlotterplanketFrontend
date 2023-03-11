import React, { useState } from "react";
import PostSorting from "../Components/PostSorting";

const Home = () => {
  const [order, setOrder] = useState("desc");

  return (
    <>
      <section>
        <PostSorting setOrder={setOrder} />
        posts
      </section>
    </>
  );
};

export default Home;
