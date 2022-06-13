import {Input} from "./UI/Input";
import {Button} from "./UI/Button";

export const Search = ()=> {
    return (
        <form>
            <Input type="text" placeholder="Wpisz nazwę pokemona"/>
            <Button>Wyszukaj</Button>
        </form>
    )
}
