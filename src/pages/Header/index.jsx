import {ShoppingCartOutlined} from "@ant-design/icons";
import { useSelector, useDispatch } from 'react-redux';
import { Badge } from "antd";
import style from  "./style.module.css";
import { toggleMode } from "../../store/themesSlice";  

function Header() {
  const darkMode = useSelector((state) => state.mode.darkMode);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <h1 className={style.logoText}>Abufa</h1>
        </div>
        <nav className={style.nav}>
          <ul className={style.navList}>
            <a href={"/"} className={style.navLink}>Home</a>
            <a href={"/"} className={style.navLink}>About</a>
            <a href={"/"}  className={style.navLink}>Contact</a>
          </ul>
        </nav>
        <div className={style.btnDiv}>
      <div className={darkMode ? 'app dark-mode' : 'app'}>
        <button className={style.headerBtn} onClick={() => dispatch(toggleMode())}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
        {darkMode ? '🌞' : '🌜'}
        </button>
      </div>     
           <Badge count={cart.length}>    
            <ShoppingCartOutlined className={style.cart}/>
          </Badge>
       </div>
      </div>  
    </header>
  )
}

export default Header