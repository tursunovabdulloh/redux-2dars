import React from "react";
import { useSelector } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons";
import style from "./style.module.css";

function Cart() {
  const { cart } = useSelector((state) => state.cart);
  return (
    <section className={style.cart}>
      <ul className={style.list}>
        {cart.length > 0 &&
          cart.map(({ id, title, description, images, price, count }) => {
            const imageSrc =
              typeof images[0] === "string" ? images[0] : JSON.parse(images[0]);
            return (
              <li className={style.item} key={id}>
                <img className={style.rasm} src={imageSrc} alt={title} />
                <h3 className={style.title}>{title}</h3>
                <p className={style.count}>{count}</p>
                <button className={style.deleteBtn}>
                  <DeleteOutlined />
                </button>
              </li>
            );
          })}
      </ul>
    </section>
  );
}

export default Cart;
