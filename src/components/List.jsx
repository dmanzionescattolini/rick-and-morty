import {useEffect, useState} from "react";
import Character from "./Character.jsx";
export default function List(){

    const [characters, setCharacters] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function fetchData(){
            const data = await fetch("https://rickandmortyapi.com/api/character")
            const {results} = await data.json()
            setCharacters(results);
            setLoading(false)

        }
        fetchData();
    },[characters.length]);

    return (<div className={"card-list"}><h1 className={"text-center"}>Characters</h1>
        {loading? (
            <div className={"alert alert-info"}>Loading...</div>
        ):
            <div className={"card-list"}>
            {characters.map(character=><Character key={character.id} id={character.id} gender={character.gender} origin={character.origin.name} image={character.image}/>

            )}
            </div>}
    </div>);
}