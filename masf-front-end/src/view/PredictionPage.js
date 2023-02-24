import React from 'react';
import { useEffect, useState } from 'react';


const PredictionPage = () => {
    
    const [customer,setCustomer] = useState("");

    useEffect(()=>{
        fetch(
            'http://127.0.0.1:8000/home/customer/'
        )
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setCustomer(data.customer);
        });
    }, [])
    return (
        <div>
            <h1>Here Are The Customers</h1>
            {customer ? customer.map((cus)=>{
                return <p>{cus.name}</p>

            }): ""}
            +
        </div>
    );
};

export default PredictionPage;