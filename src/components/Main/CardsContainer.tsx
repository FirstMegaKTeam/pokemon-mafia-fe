import React from 'react';
import { Card } from './Card';

import style from './CardsContainer.module.css';

export const CardsContainer = () => {
    return (
        <div className={style.container}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
};