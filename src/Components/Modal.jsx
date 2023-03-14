import classes from "./Modal.module.css";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ setOpenModal }) => {
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      setOpenModal(false);
    }
  };

  return (
    <div className={classes.modal_background} onClick={(e) => handleClickOutside(e)}>
      <div className={classes.modal_container}>
        <div className={classes.title_close_btn}>
          <button type="button" onClick={() => setOpenModal(false)} className="btn">
            <AiOutlineClose className={classes.close_icon} />
          </button>
        </div>
        <div className={classes.modal_title}>
          <h2>Create Post</h2>
        </div>
        <div className={classes.modal_body}>
          <form className={classes.form} action="">
            <label htmlFor="message">Write your post below:</label>
            <div className={classes.text_container}>
              <textarea type="text" name="message" id="message" placeholder="Your post message..." />
            </div>
            <div className={classes.button_container}>
              <button type="button" onClick={() => setOpenModal(false)} className={`${classes.close_btn} btn`}>
                Cancel
              </button>
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
