import React from 'react';
import styles from './styles/App.module.css';
import Logo from "./Components/logo.png"
import Icon from "./Components/butt.png"

function App() {
  return (
    <div className={styles.html}>
        <img src={Logo}  alt={''} className={styles.img}/>
        <button className={styles.buttonheader1}>Частным лицам</button>
        <button className={styles.buttonheader2}>Бизнесу</button>
        <button className={styles.buttonheader3}>Премиум</button>
        <button className={styles.cabinet}>
            Личный кабинет
            <img src={Icon} alt='' className={styles.butt}/>
        </button>
        <button className={styles.mini1}>Дебетовые карты</button>
        <p className={styles.arrow}>❯</p>
        <button className={styles.mini2}>Tinkoff Black</button>
        <p className={styles.p}>Tinkoff Black</p>
        <h1 className={styles.heading}>Дебетовая карта Tinkoff Black</h1>
        <p className={styles.text}>Закажите дебетовую карту с платежной системой «Мир», платите на кассе картой или переводом по номеру телефона</p>
        <button className={styles.carta}>Оформить карту</button>
    </div>
  );
}

export default App;
