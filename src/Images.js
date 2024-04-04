import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.image) {
    return (
      <div className="Images">
        <div className="row">
          {props.image.photos.map(function (photo, index) {
            if (index < 6) {
              return (
                <div className="col-md-4" key={index}>
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="img-fluid"
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
