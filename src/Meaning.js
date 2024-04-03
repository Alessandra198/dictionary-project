import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
        <h6>{props.meaning.partOfSpeech}</h6>
        <p>{props.meaning.definition}</p>
    </div>
  );
}
