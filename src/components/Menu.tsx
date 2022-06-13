import style from "./Menu.module.css";
import ball from '../assets/ball.png'

import {Search} from "./Search";
import {Button} from "./UI/Button";


export const Menu = ()=> {

    return(
        <div className={style.menu}>
           <div className={style.logo}>
               <img style={{height: '100%', marginTop: '3px'}} src={ball}/>
               <h1 className={style.title}> Pokemon<span>Mafia</span></h1>
           </div>

            <Search/>

            <Button>Login</Button>
        </div>
    )
}
