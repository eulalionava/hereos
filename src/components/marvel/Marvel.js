import React from 'react';
import { HeroesList } from '../heroes/HeroesList';

export const Marvel =()=>{
    return(
        <div>
            <h2>Marvel</h2>
            <hr/>
            <HeroesList publisher="Marvel Comics"/>
        </div>
    )
}