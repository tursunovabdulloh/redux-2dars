import React from "react";
import { Card } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { addToCart } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";

function ProductItem({
  data: { id, title, images, description, price },
  success,
}) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const index = cart.findIndex((item) => id === item.id);
  console.log(index);

  const imageSrc =
    typeof images[0] === "string" ? images[0] : JSON.parse(images[0]);

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, description, images, price }));
    success();
  };

  return (
    <Card
      hoverable
      className={style.card}
      key={id}
      style={{ width: 300 }}
      cover={<img src={imageSrc} alt={title} className={style.rasm} />}
    >
      <div className={style.meta}>
        <h3>{title}</h3>
        <div className={style.Cartdiv}>
          <h4 className={style.price}>{price}$</h4>
          <ShoppingCartOutlined onClick={handleAddToCart} />
        </div>
        <p>{description.split(" ").slice(0, 50).join(" ") + "..."}</p>
      </div>
    </Card>
  );
}

export default ProductItem;
