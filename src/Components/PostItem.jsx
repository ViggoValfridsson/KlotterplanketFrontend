import classes from "./PostItem.module.css";

const PostItem = ({ post }) => {
  return (
    <>
      <div className={classes.post}>
        <p className={classes.message}>{post.message}</p>
        <p>Posted at: {post.postedAt.slice(0, 10) + " " + post.postedAt.slice(11, 16)}</p>
      </div>
    </>
  );
};

export default PostItem;
