import React from 'react';

const validation = (props) => {
    return (
        <div>
            {
                props.inputLength > 5 ?
                <p>Text Long enough</p> :
                <p>Text too short</p>
            }
        </div>
    );
};

export default validation;