import React from 'react';
import { useNavigate } from 'react-router-dom';

const Purchase=()=> {
    const navigate = useNavigate();
        
    return (
        <>
        <div className="form">
            <form className="userform" onSubmit={ (()=> navigate("/"))}>
            <h1>Shipping Details</h1>
            <input type="textbox" placeholder='Name' /> <br />
            <input type="textarea" placeholder='Address'  /><br />
            <input type="tel" id="phone"  name="pno" placeholder='Mobile Number' ></input><br />
            <button className="btn" >Order</button>
            </form>
        </div>
        </> 
    )
}

export default Purchase;