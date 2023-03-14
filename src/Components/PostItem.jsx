import classes from "./PostItem.module.css";

const PostItem = ({ post }) => {
  return (
    <>
      <div className={classes.post}>
        <p className={classes.message}>{post.message}</p>
        <p>{post.postedAt.slice(0, 10)}</p>
      </div>
    </>
  );
};

export default PostItem;
