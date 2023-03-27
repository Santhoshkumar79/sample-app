import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Purchase=()=> {
    const navigate = useNavigate();
        
    return (
        <>
        <div className="form">
            <form className="userform" >
            <h1>Shipping Details</h1>
            <input type="textbox" placeholder='Name' /> <br />
            <input type="textarea" placeholder='Address'  /><br />
            <input type="tel" id="phone"  name="pno" placeholder='Mobile Number' ></input><br />
            <Button className="btn" onClick={(()=> navigate("/"))}>Order</Button>
            </form>
        </div>
        </> 
    )
}

export default Purchase;