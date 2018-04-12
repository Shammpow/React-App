import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
    <div className="card">
      <div className="img-container">
        <a data-id={props.id} onClick={props.doThis}><img  alt={props.name} src={props.image} /></a>
      </div>
    </div>
);

export default ImageCard;
