import React from 'react';
import { HeroesList } from '../heroes/HeroesList';

export const DcPage =()=>{
    return(
        <div>
            <h2>DCMarvel</h2>
            <hr/>
            <HeroesList publisher="DC Comics"/>
        </div>
    )
}