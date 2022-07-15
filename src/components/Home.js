import React from 'react';
import Header from './Header.js';
import heroData from '../heroes.json';
import {Link} from 'react-router-dom';

function Home(){
    let heroes = heroData;
    return(
        <div>
            <Header title="Home of Heroes" />
            <ul>
                {heroes.slice(0,4).map(hero=>{
                    return(
                        <li key={hero.id}>
                            <Link to={`/hero/${hero.id}`}>
                                {hero.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Home;