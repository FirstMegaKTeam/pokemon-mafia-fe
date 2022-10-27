import React, { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { Pokemon } from 'types';

import style from './CardsContainer.module.css';

export const CardsContainer = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    let pokemonId = 1;
    useEffect(() => {
        (async () => {
            do {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                const data = await response.json();

                const pokemonTypes = data.types.map((type: any) => type.type.name);

                const singlePokemon: Pokemon = {
                    pokedexId: data.id,
                    name: data.name,
                    frontImage: data.sprites.front_default,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    pokemonTypes,
                };

                setPokemons(oldArray => [...oldArray, singlePokemon]);

                pokemonId++;
            } while (pokemonId < 101);
        })();
    }, []);

    console.log(pokemons)
    return (
        <div className={style.container}>
            {
                pokemons.map(pokemon => (
                    <Card
                        key={pokemon.pokedexId}
                        pokedexId={pokemon.pokedexId}
                        name={pokemon.name}
                        frontImage={pokemon.frontImage}
                        hp={pokemon.hp}
                        attack={pokemon.attack}
                        defense={pokemon.defense}
                        pokemonTypes={pokemon.pokemonTypes}
                    />
                ))
            }
        </div>
    );
}

