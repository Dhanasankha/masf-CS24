import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const CustomerPage = () => {
    
    const [customer,setCustomer] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        fetch(
            'http://127.0.0.1:8000/home/customer/'
        )
        .then((response)=>{ 
            if(response.status === 401){
                navigate('/login');
            }
            return response.json()})
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

export default CustomerPage;