import React, { useEffect, useState } from 'react'
import MealItem from './MealItem';



const Meals = ()=> {
    const[url,setUrl]=useState(`https:/www.themealdb.com/api/json/v1/1/search.php?f=b`);
    const[item,setItem]= useState();
    const[show,setShow]=useState(false);
    useEffect(()=>{
        fetch(url)
        .then(res=> res.json())
        .then(data=> {
          setUrl(data.meals);
          setItem(data.meals);
          setShow(true);
        })
        .catch(err => console.log(err));
    },[url]);
    return (
        <>
          <div className="main">
            <div className="heading">
              <h1>Food Receipes</h1>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, maiores inventore ab porro error dolore, architecto debitis minus ea non omnis repellat officia eaque commodi voluptatum illum nam voluptate perspiciatis!</h4>
            </div>
            <div className="container">
              {
                show ? <MealItem data={item} />:"Loading"
              }
            </div>
          </div>

        </>
    )
}

export default Meals
