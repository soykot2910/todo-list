import React from "react";
import { useGlobalContext } from "./context";
import Todo from "./components/Todo";
import bgDarkImg from "./assets/images/bg-desktop-dark.jpg";
import bgLightImg from "./assets/images/bg-desktop-light.jpg";

const App = () => {
  const { light } = useGlobalContext();
  return (
    <div className={light ? "container lightContainer" : "container"}>
      <img
        className="bannerImg"
        src={light ? bgLightImg : bgDarkImg}
        alt="background img"
      />
      <Todo />
    </div>
  );
};

export default App;
