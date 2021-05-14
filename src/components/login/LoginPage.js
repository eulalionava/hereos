import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginPage =({history})=>{

    const { dispatch } = useContext(AuthContext);

    const handLogin =()=>{
        const lastPath =  localStorage.getItem('lastPath') || '/';

        dispatch({
            type:types.login,
            payload:{
                name:'Eulalio Nava'
            }
        })
        
        history.replace(lastPath);
    }

    return(
        <div className="container mt-5">
            <h2>Login</h2>
            <br/>
            <button
                className="btn btn-primary"
                onClick={ handLogin }
            >
                Login
            </button>
        </div>
    )
}