import {getFirstAbility, convertPondsToKilograms} from './Pokemon.service';
import React from 'react';

const emptyPokemon = {
    abilities: []
};
const pokemon = {
    abilities: [
        {
            ability:{
                name: "chlorophyll"
            }
        }
    ]
};


describe('Tests for getFirstAbility', () => {
    it('Should return null if there is no abilities', () => {
        expect(getFirstAbility(emptyPokemon)).toEqual(null);
    })
    it('Should return the first ability', () => {
        expect(getFirstAbility(pokemon)).toEqual("chlorophyll");
    })
});

describe ('Tests for convertPondsToKilograms', () => {
    it('Should return 0 if there is 0 ponds', () => {
        expect(convertPondsToKilograms(0)).toEqual(0);
    })
    it('Should return 0.453592 if there is 1 pond', () => {
        expect(convertPondsToKilograms(1)).toEqual(0.453592);
    })
    it('Should return 0.907184 if there is 2 ponds', () => {
        expect(convertPondsToKilograms(2)).toEqual(0.907184);
    })
});