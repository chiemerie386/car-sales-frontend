import React, {useState} from 'react'
import './car.css'
import { MdDelete } from "react-icons/md";
import axios from 'axios'


const data= {
    image : "http://localhost:5000/car/images/fcd18dd0052e44674e3d101d5c3046ec",
    // image : "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Camry/8733/1641979263472/front-left-side-47.jpg",
    name : 'C-Class',
    make : 'Mercedes-Benz',
    year : '2015',
    price : '35000'
}



export const Car = (props) => {
    function deleteCar (id) {
        console.log('llk',props.id)
        axios({
            method: 'delete',
            url: `${process.env.REACT_APP_BASE_URL}/car/${id}`,
          }).then((val)=>{
            //   setData(val.data)
            //   console.log(val)
            })
    }

    const [carDetails, setCarDetails] = useState(data)
    console.log()
    return (
        <div className="car-card">
           <img className="car-image" src={props.image}/>
           {/* <img className="car-image" src={'http://localhost:5000/car/images/fcd18dd0052e44674e3d101d5c3046ec'}/> */}
            <div className="car-description">
                <div className="car-name">{props.make} {props.name} {props.year}</div>
                <div className="car-price">{props.price}</div>
            </div>
            <div className="delete-button" onClick={()=>{deleteCar(props.id)}}>
                <MdDelete/>
            </div>
        </div>
    )
}
