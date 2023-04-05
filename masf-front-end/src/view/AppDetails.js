import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const AppDetails = () => {
    const [catergory, setCatergory] = useState('');
    const [prize, setPrize] = useState();
    const [size, setSize] = useState();



    const handelSubmit = async (event) =>{
        event.preventDefault();

        const appDetails = {
            "category": catergory,
            "prize": prize,
            "size": size,
        };
        
        console.log(appDetails);

        axios.post('http://127.0.0.1:8000/test/appdetails', appDetails, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        .then(response =>{
            console.log(response)
        })
        .catch(console.error())
    };

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Make Prediction</h1>
            <form onSubmit={handelSubmit} method="POST">
                <input type="text" name={catergory} onChange={(e) => setCatergory(e.target.value)} /><br/>
                <input type="number" value={prize} onChange={(e)=>setPrize(e.target.value)}/><br/>
                <input type="number" value={size} onChange={(e)=>setSize(e.target.value)}/><br/>
                <button type="number" >Make Prediction!</button>
            </form>
        </div>
    );
};

export default AppDetails;