import React from 'react';

import { Search } from "./Search";
import { Button } from "../UI/Button";
import { Logo } from '../UI/Logo';

import style from "./Menu.module.css";

export const Menu = () => {
    return (
        <div className={style.menu}>
            <div className={style.logo}>
                <Logo/>
            </div>
            <div className={style.buttons}>
                <Search/>
                <Button>Zaloguj</Button>
            </div>
        </div>
    );
}
