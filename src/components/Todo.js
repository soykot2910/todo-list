import React from "react";
import { useGlobalContext } from "../context";
import iconSun from "../assets/images/icon-sun.svg";
import iconMoon from "../assets/images/icon-moon.svg";
import iconCheck from "../assets/images/icon-check.svg";
import iconCross from "../assets/images/icon-cross.svg";
import InputForm from "./InputForm";

const data = [1, 2, 3, 4, 5];

const Todo = () => {
  const { light, handleTheme } = useGlobalContext();
  return (
    <>
      <div className="todoWrapper">
        <div className="header">
          <h2 className="heading">TODO</h2>
          <img
            src={light ? iconMoon : iconSun}
            alt="icon"
            onClick={handleTheme}
            style={{ cursor: "pointer" }}
          />
        </div>
        <InputForm />
        <div className={light ? "card light" : "card"}>
          {data.map((item) => (
            <div className={light ? "todoItem light" : "todoItem"}>
              <div className="todoText">
                <div
                  className={light ? "checkWrapperLight" : "checkWrapperDark"}
                >
                  <img className="checkIcon" src={iconCheck} alt="check" />
                </div>
                <p>Jog arround the park</p>
              </div>
              <img className="iconCross" src={iconCross} alt="cross" />
            </div>
          ))}
          <div className="cardFooter">
            <p>{data.length} items left</p>
            <ul className="menu">
              <li>
                <a href="/">All</a>
              </li>
              <li>
                <a href="/">Active</a>
              </li>
              <li>
                <a href="/">Completed</a>
              </li>
            </ul>
            <li>
              <a href="/">Clear</a>
            </li>
          </div>
        </div>
        <div className={light ? "mblFooter card light" : "mblFooter card"}>
          <ul className="menu">
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Active</a>
            </li>
            <li>
              <a href="/">Completed</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;
