import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
//import heroes from '../heroes.json';
import TextInputForm from '../TextInputForm.js';
import Header from '../Header.js';
import {Link} from 'react-router-dom';

function Hero({onHeroChange, heroes}){
    let {id} = useParams();
    id = parseInt(id);
    let hero = heroes.filter(a => a.id === id)[0];
    let name = hero.name;
    let [userInput, setUserInput] = useState("");

    function handleSubmit(){
        setUserInput("");
        let newHeroes = heroes.map(hero => {
            let newHero = hero;
            if(newHero.id === id) newHero.name = userInput;
            return newHero;
        })
        onHeroChange(newHeroes);
    }
    return (
        <div>
            <Header title={name}/>
            <TextInputForm onChange={setUserInput} value={userInput} onSubmit={handleSubmit} placeholder="Enter a name"/>
            <Link to='/'> Home </Link>
        </div>
    );
}

export default Hero;