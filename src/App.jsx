import { useState } from "react";
import classes from "./App.module.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
  const [success, setSuccess] = useState(false);

  return (
    <>
      <Header success={success} setSuccess={setSuccess} />
      <div className={classes.footer_main_container}>
        <div className={`${classes.main} container`}>
          <Home success={success} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
