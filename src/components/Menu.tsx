import style from "./Menu.module.css";

export const Menu = ()=> {

    return(
        <div className={style.menu}>
            <h1 className={style.title}>Pokemon-<span>Mafia</span></h1>

            <input type="text"/>

            <button>Login</button>
        </div>
    )
}
