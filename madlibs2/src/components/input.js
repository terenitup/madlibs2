import React from 'react';

const Input = ({title, state, name}, onChange) => {
    return (
        <div key={name} className="input">
            <input value={state} onChange={onChange} name={name}/>
            <label>{title}</label>
        </div>
    )
}

export default Input;