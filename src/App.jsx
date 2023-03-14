import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import classes from "./App.module.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <div className={classes.footer_main_container}>
        <div className={`${classes.main} container`}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
