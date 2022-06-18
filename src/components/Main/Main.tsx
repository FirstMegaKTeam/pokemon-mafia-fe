import React from 'react';

import style from './Main.module.css';

import bg from '../../assets/background.png';

export const Main = () => {
    return <div style={{backgroundImage: `url(${bg})`}} className={style.main}>
        <div>
            <button></button>
            <button></button>
        </div>
        <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
};