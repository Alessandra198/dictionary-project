import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
        <h6>{props.meaning.partOfSpeech}</h6>
        <p><strong>Definition: </strong>{props.meaning.definition}</p>
        <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
