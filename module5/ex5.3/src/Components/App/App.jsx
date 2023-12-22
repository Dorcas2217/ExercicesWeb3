import Opinions from "../Opinions/Opinions";
import AddOpinions from "../Opinions/AddOpinion";
import { useContext } from "react";
import { Context as ThemeContext } from "../../Context/themeCountext";
import '../../index.css';
import Footer from "./footer";

const App = () => {
  const {  isDarkTheme } = useContext(ThemeContext);
  return (
      <div  className={`body ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
          <h2>Give feedback</h2>
          <Opinions/>
          <br />
          <AddOpinions/>
          <Footer/>
      </div>
  );
}

export default App
