import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I am a person {props.name} and I am {props.age} yers old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />

        </div>
    )
};

export default person;