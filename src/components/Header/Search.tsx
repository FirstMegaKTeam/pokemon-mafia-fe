import React from 'react';

import { Input } from "../UI/Input/Input";
import { Button } from "../UI/Button/Button";

export const Search = () => {
    return (
        <form>
            <Input type="text" placeholder="Wpisz nazwę pokemona"/>
            <Button>Wyszukaj</Button>
        </form>
    );
};
