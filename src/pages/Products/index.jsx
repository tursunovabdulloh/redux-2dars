import React, { useEffect } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Card, message } from 'antd';
import loader from "../../assets/loadr.gif"
import Title from '../Title';
import { add } from '../../store/productsSlice';
import { addToCart } from '../../store/cartSlice';
import style from "./style.module.css";
import { useDispatch, useSelector } from 'react-redux';

function Products() {
  const [messageApi, contextHolder] = message.useMessage();


  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Mahsulot muvaffaqiyatli saqlandi',
      className: 'message',
    });
  };

  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((result) => dispatch(add(result)));
  }, [dispatch]);

  return (
    <section className="section">
      <div className={style.message}>
      {contextHolder}
      </div>
      <div className={style.container}>
        <Title text={"Mahsulotlar"} />
        <Card.Grid className={style.gridContainer}>
          {products.length ? products.map(({ id, title, description, images, price }) => (
            <Card
              hoverable
              className={style.card}
              key={id}
              style={{ width: 300 }}
              cover={<img key={id} src={images.length > 1 ? images[0] : JSON.parse(images[0])} alt="" className={style.rasm} />}>
              <div className={style.meta}>
                <h3>{title}</h3>
                <div className={style.Cartdiv}>
                  <h4 className={style.price}>{price}$</h4>
                  <ShoppingCartOutlined onClick={() => {
                    dispatch(addToCart({ id, title, description, images, price }));
                    success();
                  }} />
                </div>
                <p>{description.split("").slice(0, 140).join("")}</p>
              </div>
            </Card>
          )) : <img className={style.loader} src={loader} alt="" height={350} />}
        </Card.Grid>
      </div>
    </section>
  );
}

export default Products;
