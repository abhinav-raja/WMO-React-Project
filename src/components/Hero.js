import React, {useEffect} from 'react';
import {useParams, useState} from 'react-router';
import heroes from '../heroes.json';
import TextInputForm from './TextInputForm.js';

function Hero(){
    const id = useParams();
    let hero;
    useEffect(()=>{
        hero = heroes.filter(hero=>hero.id===id)[0];
    }, [id]);
    let [userInput, setUserInput] = useState("");
    let [name, setName] = useState(hero.name);

    function handleSubmit(){
        setName(userInput);
        setUserInput("");
        let newHeroes = heroes.map(hero => {
            let newHero = hero;
            if(newHero.id === id) newHero.name = name;
            return newHero;
        })
    }
    return (
        <div>
            <Header title={name}/>
            <TextInputForm onChange={setUserInput} value={userInput} onSubmit={handleSubmit}/>
        </div>
    );
}