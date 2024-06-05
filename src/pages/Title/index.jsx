import React from "react";
import style from "./style.module.css";
function Title({ text }) {
  return (
    <>
      <div className={style.container}>
        <h2 className={style.title}>{text}</h2>
      </div>
    </>
  );
}

export default Title;
