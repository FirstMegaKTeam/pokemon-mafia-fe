import React from 'react';

import style from './Input.module.css';

interface Props {
    type: string;
    placeholder: string | undefined;
}

export const Input = (props: Props) => {
    return (
        <input
            className={style.input}
            type={props.type}
            placeholder={props.placeholder ?? ''}
        />
    );
};
