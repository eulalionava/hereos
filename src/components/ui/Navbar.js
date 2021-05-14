import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const Navbar = () => {

    const { user,dispatch } = useContext(AuthContext);
    const { name } = user;

    const history = useHistory();

    const handLogout = ()=>{
        dispatch({
            type:types.logout
        });
        
        history.replace('/login');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div>
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">
                        { name }
                    </span>
                    <button 
                        className="nav-item nav-link btn" 
                        onClick={ handLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}