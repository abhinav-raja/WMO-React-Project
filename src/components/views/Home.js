import React, {useState} from 'react';
import Header from '../Header.js';
import {Link} from 'react-router-dom';

function Home({heroes}){
    const [seeAllHeroes, setSeeAllHeroes] = useState(false);

    function handleHeroViewToggle(){
        setSeeAllHeroes(!seeAllHeroes);
    }

    return(
        <div>
            <Header title="Home of Heroes" />
            <ul>
                {heroes.slice(0,(seeAllHeroes ? heroes.length : 4)).map(hero=>{
                    return(
                        <li key={hero.id}>
                            <Link to={`/hero/${hero.id}`}>
                                {hero.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <button onClick={handleHeroViewToggle}>
                {seeAllHeroes ? "View less heroes" : "View more heroes"} 
            </button>
        </div>
    );
}

export default Home;