import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let compayImg = {
  1: "https://lezebre.lu/images/detailed/70/17246-rolls-royce-logo-3.png",
  2: "https://thumb.tildacdn.com/tild3830-3934-4335-a365-643266653035/-/resize/560x/-/format/webp/Logo_SL___1.png",
  3: "https://e7.pngegg.com/pngimages/891/177/png-clipart-brand-shoe-sneakers-adidas-logo-adidas-angle-text.png",
  4: "https://w7.pngwing.com/pngs/165/328/png-transparent-nike-air-max-nike-free-swoosh-air-force-1-nike-logo-converse-adidas.png",
  5: "https://lezebre.lu/images/detailed/70/17246-rolls-royce-logo-3.png",
  6: "https://thumb.tildacdn.com/tild3830-3934-4335-a365-643266653035/-/resize/560x/-/format/webp/Logo_SL___1.png",
  7: "https://e7.pngegg.com/pngimages/891/177/png-clipart-brand-shoe-sneakers-adidas-logo-adidas-angle-text.png",
  8: "https://w7.pngwing.com/pngs/165/328/png-transparent-nike-air-max-nike-free-swoosh-air-force-1-nike-logo-converse-adidas.png",
}

let menu = [
  { name: "Главная", link: "/" },
  { name: "О нас", link: "/about" },
  { name: "Контакты", link: "/contacts" },
]

let info = [
  { name: "Номер телефона", data: "+38 (093) 000 00 00" },
  { name: "График работы", data: "Пн-Пт, с 10.00 - 20.00" },
  { name: "Адрес", data: "ул. Гарматна 14 б" },
]

ReactDOM.render(
  <React.StrictMode>
    <App compayImg={compayImg} menu={menu} info={info} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
