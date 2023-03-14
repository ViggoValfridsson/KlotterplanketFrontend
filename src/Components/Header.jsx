import { useState, useEffect } from "react";
import classes from "./Header.module.css";
import { BiPlus } from "react-icons/bi";
import Modal from "./Modal";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    openModal && (document.body.style.overflow = "hidden");
    !openModal && (document.body.style.overflow = "unset");
  }, [openModal]);

  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <header className={classes.header}>
        <div className={`${classes.header_container} container`}>
          <h1 className={classes.title}>Klotterplanket</h1>
          <button onClick={() => setOpenModal(true)} type="button" className={`${classes.upload} ${"btn"}`}>
            <BiPlus className={classes.icon} />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
