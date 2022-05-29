import React, {useState} from 'react'
import './car.css'
import { MdDelete } from "react-icons/md";


const data= {
    image : "http://localhost:8000/car/images/fcd18dd0052e44674e3d101d5c3046ec",
    // image : "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Camry/8733/1641979263472/front-left-side-47.jpg",
    name : 'Mercedes-Benz C-Class 2015',
    price : '35000'
}



export const Car = () => {
    const [carDetails, setCarDetails] = useState(data)
    return (
        <div className="car-card">
           <img className="car-image" src={carDetails.image}/>
            <div className="car-description">
                <div className="car-name">{carDetails.name}</div>
                <div className="car-price">{carDetails.price}</div>
            </div>
            <div className="delete-button">
                <MdDelete/>
            </div>
        </div>
    )
}
