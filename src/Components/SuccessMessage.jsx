import classes from "./SuccessMessage.module.css";

const SuccessMessage = () => {
  return (
    <div className={classes.success_container}>
      <p>Message posted!</p>
    </div>
  );
};

export default SuccessMessage;
