// Component DetailPage
import React from 'react';
import { useParams } from 'react-router-dom';
import Pokemon from './Pokemon';

const DetailPage = () => {
    const {id} = useParams();
    return (
        <div>
            <Pokemon idPokemon={id} />
        </div>
    );
}

export default DetailPage;