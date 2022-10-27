import React from 'react';
import { Button } from '../../UI/Button/Button';
import { Pokemon } from 'types';

import style from './Card.module.css';
import bg from '../../../assets/background.png';

interface Props extends Pokemon {
}

export const Card = ({
                         pokedexId,
                         name,
                         frontImage,
                         attack,
                         hp,
                         defense,
                         pokemonTypes
                     }: Props) => {
    return <div className={style.card}>
        <h1>{name} #{pokedexId}</h1>
        <div style={{backgroundImage: `url(${bg})`}} className={style.img}>
            <img src={frontImage} alt={name}/>
        </div>
        <div className={style.stats}>
            <p>typ: {pokemonTypes[0]}</p>
            <p>atak: {attack}</p>
            <p>obrona: {defense}</p>
            <p>zdrowie: {hp}</p>
        </div>
        <Button>Szczegółowe informacje</Button>
    </div>;
};