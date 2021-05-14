import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
import '../estilos/style.css';

export const HeroesList =({publisher})=>{

    const heroes = useMemo( ()=> getHeroesByPublisher(publisher),[publisher]);

    return(
        <div className="row animate__animated animate__fadeIn">
            {
                heroes.map(hero=>(
                    <div className="col-md-3">
                        <HeroCard key={ hero.id}
                            {...hero}
                        />
                    </div>
                ))
            }
        </div>
    )
}