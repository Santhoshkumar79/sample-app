import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meals from './FoodCorner/Meals';
import "./FoodCorner/style.css"
import {Routes,Route} from 'react-router-dom';
import Receipe from './FoodCorner/Receipe';
import  Purchase  from './FoodCorner/Purchase';

const App = ()=> {
  return (
        <>
          <Routes>
            <Route path="/" element={<Meals />} />
            <Route path="/:MealId" element={<Receipe />} />
            <Route path="/Purchase" element={<Purchase />} />
          </Routes>
        </>
  );
}

export default App;
