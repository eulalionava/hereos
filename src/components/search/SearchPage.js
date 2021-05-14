import React, { useMemo } from 'react';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/UseForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchPage = ({history})=>{
    const location = useLocation();
    const { q ='' } = queryString.parse(location.search);

    
    const [ formValues,handInputChange ] = useForm({
        searchText: q
    });
    
    const { searchText } = formValues; 
    const heroesFiltrados = useMemo( () => getHeroesByName(q),[q]);

    const handSearch = (e)=>{
        e.preventDefault();
       history.push(`?q=${ searchText }`)
    }

    return(
        <div>
            <h1>Search Page</h1>
            <hr/>
            <div className="row">
                    <form onSubmit={ handSearch } className="d-flex">
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handInputChange }
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
 
                    <h4>Results</h4>
                    <hr/>
                    {
                        heroesFiltrados.map(hero=>(
                            <div className="col-4">
                                <HeroCard
                                    key={hero.id}
                                    {...hero}
                                />
                            </div>
                        ))
                    }

            </div>
        </div>
    )
}