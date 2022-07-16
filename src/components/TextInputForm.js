import React from 'react';

function TextInputForm(props){
    const {value, onChange, onSubmit, placeholder} = props;

    function handleChange(e){
        onChange(e.target.value);
    }

    function handleSubmit(e){
        onSubmit();
        e.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={value} name="text" placeholder={placeholder}/>
            <input type="submit" value="Change name"/>
        </form>
    )
}

export default TextInputForm;