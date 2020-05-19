import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I am a person {props.name} and I am {props.age} yers old!</p>
            <p>{props.children}</p>

        </div>
    )
};

export default person;