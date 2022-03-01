import React from "react";

export default function Test(props){

    let word = "";
    if(props.age>=30){
        word = "You are very old"
    }


    return (
        <div>
            <h3>{word}</h3>
        </div>
    )
}