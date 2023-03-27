import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meals from './Components/Meals';
import "./Components/style.css"
import {Routes,Route} from 'react-router-dom';
import Receipe from './Components/Receipe';
import  Purchase  from './Components/Purchase';

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
