import React from 'react';
export default function ImageHolder(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <img key={props.img} src={props.img} className="myImages" alt={props.name} />
        </div>);
}