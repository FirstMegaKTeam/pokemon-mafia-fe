import React from 'react';

import style from './Logo.module.css';
import ball from '../../assets/ball.png';

export const Logo = () => <>
    <img src={ball} alt="pokemon-ball"/>
    <h1 className={style.title}> Pokémon<span>Mafia</span></h1>
</>;