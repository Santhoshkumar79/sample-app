import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Receipe=()=> {
    const {MealId}=useParams();
    const[item,setItem]=useState();
    if (MealId!==""){
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res=> res.json())
        .then(data=>{
            setItem(data.meals[0]);
        })
    }
    const navigate = useNavigate();
    return (
        <>
            {
                (!item) ? "Loading": <>
                <div className="content" style={{display:"flex"}}>
                    <img src={item.strMealThumb} alt="" />
                    <div className='inner-content'>
                        <h1>{item.strMeal}</h1>
                        <h3>{item.strArea} Food</h3>
                        <h3>Category: {item.strCategory}</h3>
                    </div>
                    <div className="receipe-details">
                        <div className="ingredients">
                            <h2>Ingredients</h2><hr></hr>
                            <h4>{item.strIngredient1}</h4>
                            <h4>{item.strIngredient2}</h4>
                            <h4>{item.strIngredient3}</h4>
                            <h4>{item.strIngredient4}</h4>
                            <h4>{item.strIngredient5}</h4>
                            <h4>{item.strIngredient6}</h4>
                        </div>
                    </div>
                    <div classsName="button">
                        <Button onClick={()=> navigate("/Purchase")} >OrderFood</Button>
                    </div>
                </div>
                </>
            }
        </>
    )
}        

export default Receipe;