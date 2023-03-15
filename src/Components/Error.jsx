import classes from "./Error.module.css";

const Error = ({ message }) => {
  if (typeof message !== "string") {
    message = "Something went wrong, please try again.";
  }

  return (
    <div className={classes.error_container}>
      <h2>Oops!</h2>
      <h3>{message}</h3>
    </div>
  );
};

export default Error;
