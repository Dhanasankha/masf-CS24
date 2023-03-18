import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const AppDetails = () => {
    const [appName, setAppName] = useState('')
    const [appStore, setAppStore] = useState('')
    const [appCatergory, setAppCatergory] = useState('')



    const handelSubmit = async (event) =>{
        event.preventDefault();

        const appDetails = {
            appName,
            appStore,
            appCatergory
        };

        axios.post('http://127.0.0.1:8000/home/appdetails', appDetails)
        .then(response =>{
            console.log(response)
        })
        .catch(console.error())
    };

    


    return (
        <form onSubmit={handelSubmit} method="POST">
            <input type="number" name={appName} onChange={(e)=>setAppName(e.target.value)}/><br/>
            <input type="number" name={appStore} onChange={(e)=>setAppStore(e.target.value)}/><br/>
            <input type="number" name={appCatergory} onChange={(e)=>setAppCatergory(e.target.value)}/><br/>
            <input type="number" name='appData'/><br/>
            <button type="number" >Make Prediction!</button>
        </form>
    );
};

export default AppDetails;