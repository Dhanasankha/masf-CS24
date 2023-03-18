import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const AppDetails = () => {
    const [rating, setRating] = useState('')
    const [count, setCount] = useState('')
    const [size, setSize] = useState('')
    const [languages, setLanguages] = useState('')



    const handelSubmit = async (event) =>{
        event.preventDefault();

        const appDetails = {
            rating,
            count,
            size,
            languages
        };

        axios.post('http://127.0.0.1:8000/home/appdetails', appDetails)
        .then(response =>{
            console.log(response)
        })
        .catch(console.error())
    };

    return (
        <div>
            <h1>Make Prediction</h1>
            <form onSubmit={handelSubmit} method="POST">
                <input type="number" name={rating} onChange={(e)=>setRating(e.target.value)}/><br/>
                <input type="number" name={count} onChange={(e)=>setCount(e.target.value)}/><br/>
                <input type="number" name={size} onChange={(e)=>setSize(e.target.value)}/><br/>
                <input type="number" name={languages} onChange={(e)=>setLanguages(e.target.value)}/><br/>
                <button type="number" >Make Prediction!</button>
            </form>
        </div>
    );
};

export default AppDetails;