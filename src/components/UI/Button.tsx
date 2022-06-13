import {ReactNode} from "react";
import style from './Button.module.css'

interface Props {
    children: ReactNode
}

export const Button = (props: Props)=> {
    return(
        <button className={style.btn}>{props.children}</button>
    )
}
