import './App.css';
import React,{useState, useEffect} from 'react'
import { Header } from './components/Header/Header';
import { CarList } from './components/carList/CarList';
import { AddCar } from './components/form/AddCar';

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <div className="App">
      <Header/>
      <CarList show={!visible}/>
      <AddCar show={visible}/>
      <button className="add-car" onClick={()=>setVisible(!visible)}> Add Car</button>
      

    </div>
  );
}


export default App;
