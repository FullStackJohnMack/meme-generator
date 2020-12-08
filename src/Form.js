import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import './Form.css';

function Form ( {setMemeData, addMeme } ) {

    const INITIAL_STATE = {
        topText: "",
        bottomText: "",
        url: ""
    }

    const id = uuid();

    const [formData,setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
        setMemeData({...formData, id:id});
    }

    const handleClick = (e) => {
        addMeme();
        setFormData(INITIAL_STATE);
    }

    return (
        <form className="form">
            <div className="formGroup">
                <input onChange={handleChange} type="text" value={formData.topText} name="topText" placeholder="Enter top text"/>
                <input onChange={handleChange} type="text" value={formData.bottomText} name="bottomText" placeholder="Enter bottom text"/>
                <input onChange={handleChange} onMouseLeave={handleChange} type="text" value={formData.url} name="url" placeholder="Enter image URL"/>
                <button onClick={handleClick} type="button">Add Meme</button>
            </div>
        </form>
    )
}

export default Form;