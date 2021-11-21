import React from 'react';

function Input({id,child,type,OnTextChange}) {
    return (
        <>
        <label htmlFor={id}> {child}: </label>
        <input id={id} type={type} onChange={OnTextChange}/>
        </>
    );
}

export default Input;