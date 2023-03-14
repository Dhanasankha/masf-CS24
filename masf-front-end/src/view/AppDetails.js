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

        try{
            const response = await axios.post('http://127.0.0.1:8000/home/appdetails', appDetails)
    
        } catch(error){
            console.log(error)
    
        }
    };

    


    return (
        <form onSubmit={handelSubmit} method="POST">
            <input type="text" name={appName} onChange={(e)=>setAppName(e.target.value)}/><br/>
            <input type="text" name={appStore} onChange={(e)=>setAppStore(e.target.value)}/><br/>
            <input type="text" name={appCatergory} onChange={(e)=>setAppCatergory(e.target.value)}/><br/>
            <button type='submit' >Make Prediction!</button>
        </form>
    );
};

export default AppDetails;