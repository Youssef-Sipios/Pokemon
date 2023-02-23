// export GetFirstAbility method 

export const getFirstAbility = (pokemon) => {
    if (pokemon.abilities.length === 0) {
        return null;
    }
    return pokemon.abilities[0].ability.name;
}

export const convertPondsToKilograms = (ponds) => {
    return ponds * 0.453592;
}