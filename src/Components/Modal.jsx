import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CircularProgress } from "@mui/material";
import { AiOutlineCheck } from "react-icons/ai";
import classes from "./Modal.module.css";
import Error from "./Error";
import SuccessMessage from "./SuccessMessage";

const Modal = ({ setOpenModal, success, setSuccess }) => {
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState();
  const endpoint = `https://usxsq020kb.execute-api.eu-north-1.amazonaws.com/api/posts`;

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      setOpenModal(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPosting(true);
    postData();
  };

  const postData = () => {
    if (!message) {
      setError("Please enter a valid message.");
      setIsPosting(false);
      return;
    }

    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ message: message }),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch that resource, please try again.");
        }
        showSuccessMessage();
        setError(null);
        setIsPosting(false);
        return;
      })
      .catch((err) => {
        setIsPosting(false);
        setError(err.message);
      });
  };

  const showSuccessMessage = () => {
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setOpenModal(false);
    }, 1500);
  };

  return (
    <>
      <div className={classes.modal_background} onClick={(e) => handleClickOutside(e)}>
        <div className={classes.modal_container}>
          {isPosting && !error && (
            <div className={classes.spinnerContainer}>
              <CircularProgress className={classes.spinner} color="inherit" size="10rem" />
            </div>
          )}
          {!isPosting && (
            <>
              <div className={classes.modal_title}>
                <h2>{!error && "Create a new post"}</h2>
                <button type="button" onClick={() => setOpenModal(false)} className={`${classes.title_close_btn} btn`}>
                  <AiOutlineClose className={classes.close_icon} />
                </button>
              </div>
              {error && <Error message={error} />}
              {!error && (
                <div className={classes.modal_body}>
                  {success && (
                    <div className={classes.success_icon_container}>
                      <span className={classes.success_icon}>
                        <AiOutlineCheck />
                      </span>
                    </div>
                  )}
                  {!success && (
                    <form className={classes.form} onSubmit={handleSubmit}>
                      <label htmlFor="message">Write your post below: </label>
                      <div className={classes.text_container}>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          type="text"
                          name="message"
                          id="message"
                          placeholder="Your post message..."
                        />
                      </div>
                      <div className={classes.button_container}>
                        <button
                          type="button"
                          onClick={() => setOpenModal(false)}
                          className={`${classes.close_btn} btn`}
                        >
                          Cancel
                        </button>
                        <button type="submit" className="btn">
                          Submit
                        </button>
                      </div>
                      {error && <div>{error}</div>}
                    </form>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {success && <SuccessMessage />}
    </>
  );
};

export default Modal;
