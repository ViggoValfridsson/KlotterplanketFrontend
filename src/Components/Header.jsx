import classes from "./Header.module.css";
import { BiPlus } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={`${classes.header_container} ${"container"}`}>
          <h1 className={classes.title}>Klotterplanket</h1>
          <button type="button" className={`${classes.upload} ${"btn"}`}>
            <BiPlus className={classes.icon} />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
