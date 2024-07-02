import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";





const Characters = (props) =>{

    let navigate = useNavigate();
    

    const clickMe = (id) =>{
        navigate(`/character/${id}`)
    }

    return(
        <>
            <div className="container" id="mainContainer">
                <h1>Star Wars Characters</h1>
                
                {
                    props.data.map((character) => <div onClick={() => clickMe(character.id)} key={character._id}>{character.name}</div>)
                }
                
            </div>
        </>
    );
};
export default Characters;