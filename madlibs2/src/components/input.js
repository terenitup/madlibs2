import React from 'react';

const Input = ({title, state, name}, onChange, index) => {
    return (
        <div key={index + 1} className="input">
        <label className={`input__number ${state == '' ? 'gray' : 'green'}`}>{index + 1}</label>
            <input placeholder={title} value={state} onChange={onChange} name={name}/>
            <label className="input__title">{title}</label>
        </div>
    )
}

export default Input;