import React from 'react'
import style from "./style.module.css";
function Title({ text }) {
  return (
    <>
    <h2 className={style.title}>{text}</h2>
    </>
  )
}

export default Title    