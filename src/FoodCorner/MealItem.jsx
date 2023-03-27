import React from 'react'
import {useNavigate} from "react-router-dom";

const MealItem= ({data})=> {
    console.log(data)
    let navigate= useNavigate();
    return (
        <>
            {
                (!data) ? "Loading" : data.slice(0,10).map(item=> { 
                   return <div className="card" key={item.idMeal} onClick={()=>{navigate(`/${item.idMeal}`)}}>
                        <img src={item.strMealThumb} alt="" />
                        <h3>{item.strMeal}</h3>
                    </div>
                })
            }
           
        </>
    )
}

export default MealItem;
