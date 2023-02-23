// Pokemon Component
import React from 'react';
import { useState, useEffect } from 'react';
import {getFirstAbility} from './../Pokemon.service';



function Pokemon(props) {
    const [pokemon, setPokemon] = useState(null);
    
    const getPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.idPokemon}`)
        .then(response => response.json())
        .then(json => setPokemon(json))
    }
    
    useEffect(() => {
        getPokemon();
    }, []);
    
    return (
        <div>
        {pokemon &&
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>First ability: {getFirstAbility(pokemon)}</p>
            <p>Weight : {pokemon.weight} </p>
        </div>
        }
        </div>
    );
    }

export default Pokemon;