import React from "react";
import { useGlobalContext } from "../context";

const InputForm = () => {
  const { light } = useGlobalContext();
  return (
    <div className={light ? "todoInput light" : "todoInput"}>
      <div className={light ? "checkWrapperLight" : "checkWrapperDark"}></div>
      <form>
        <input
          className={light && "light"}
          type="text"
          placeholder="Currently typing"
        />
      </form>
    </div>
  );
};

export default InputForm;
