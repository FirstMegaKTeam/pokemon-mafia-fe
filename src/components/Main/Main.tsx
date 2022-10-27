import React from 'react';
import { FeatureButtons } from './FeatureButtons/FeatureButtons';
import { CardsContainer } from './CardsContainer/CardsContainer';


import style from './Main.module.css';
import bg from '../../assets/background.png';


export const Main = () => {
    return <div style={{backgroundImage: `url(${bg})`}} className={style.main}>
        <FeatureButtons/>
        <CardsContainer/>
    </div>;
};