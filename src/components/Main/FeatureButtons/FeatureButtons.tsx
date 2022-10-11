import React from 'react';
import { Button } from '../../UI/Button/Button';

import style from './FeatureButtons.module.css';

export const FeatureButtons = () => {
    return <div className={style.box}>
        <Button>Wszystkie</Button>
        <Button>Ulubione</Button>
    </div>;
};