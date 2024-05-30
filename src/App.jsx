import React from 'react'
import Header from './pages/Header'
import Products from './pages/Products'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const darkMode = useSelector((state) => state.mode.darkMode);
  const dispatch = useDispatch();
  return (
    <>
    <div className={darkMode ? 'app dark-mode' : 'app'}>
    <Header />
    <Products />
  </div>
    </>
  )
}

export default App
