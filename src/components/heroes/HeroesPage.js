import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroeById';

const heroImages  = require.context('../../assets/heroes',true);

export const HeroesPage =({history})=>{

     const { heroeId } = useParams();
     //NO hace cambios hasta que el id cambie
     const hero = useMemo( ()=> getHeroById(heroeId), [heroeId]);

     if(!hero){
        return <Redirect to="/"/>
     }
     const handReturn = ()=>{
         if(history.length <= 2){
             history.push('/');
         }else{

             history.goBack();
         }
     }

    const { superhero,publisher,alter_ego,first_appearance,characters } = hero;

    return(
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={heroImages(`./${heroeId}.jpg`).default}
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Alter ego:<b>{ alter_ego }</b></li>
                    <li className="list-group-item">Publisher:<b>{ publisher }</b></li>
                    <li className="list-group-item">Firt apprearence:<b>{ first_appearance }</b></li>
                </ul>
                <h5>Characters</h5>
                <p>{ characters }</p>
                <button className="btn btn-outline-info"
                    onClick={ handReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
}