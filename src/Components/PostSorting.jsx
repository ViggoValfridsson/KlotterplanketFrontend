import classes from "./PostSorting.module.css";

const PostSorting = ({ setOrder }) => {
  return (
    <form className={classes.order_form}>
      <label htmlFor="sort-order" className={classes.order_label}>
        Order by:
      </label>
      <select
        onChange={(e) => setOrder(e.target.value)}
        name="sort-order"
        className={classes.order_select}
        id="sort-order"
        defaultValue={"desc"}
      >
        <option value="desc">Latest</option>
        <option value="asc">Oldest</option>
      </select>
    </form>
  );
};

export default PostSorting;
