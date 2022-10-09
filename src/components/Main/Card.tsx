import React from 'react';
import { Button } from '../UI/Button';

import style from './Card.module.css';
import bg from '../../assets/background.png';

interface Props {

}

export const Card = (props: Props) => {
    return <div className={style.card}>
        <h1>Charmander #4</h1>
        <div style={{backgroundImage: `url(${bg})`}} className={style.img}>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="pokemon"/>
        </div>
        <div className={style.stats}>
            <p>typ: fire</p>
            <p>atak: 52</p>
            <p>obrona: 43</p>
            <p>zdrowie: 39</p>
        </div>
        <Button>Szczegółowe informacje</Button>
    </div>;
};