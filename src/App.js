import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactSwitch from "react-switch";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Project from "./components/projects/Home";
import "./app.css";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("Dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "Light" ? "Dark" : "Light"));
  };
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {" "}
        <div className="App" id={theme}>
          <div className="content">
            <span>{theme} Mode</span>
            <div className="switch">
              <ReactSwitch onChange={toggleTheme} checked={theme === "Dark"} />
            </div>
            <NavBar theme={theme} />
            <Routes>
              <Route exacth path="/" element={<Home />} />
              <Route path="/Projects" element={<Project />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
