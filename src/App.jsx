import classes from "./App.module.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className={classes.footer_main_container}>
        <div className={`${classes.main} container`}>
          <Home />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
