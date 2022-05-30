import React, {useState} from 'react'
import './car.css'
import { MdDelete } from "react-icons/md";
import axios from 'axios'

export const Car = (props) => {
    function deleteCar (id) {
        axios({
            method: 'delete',
            url: `${process.env.REACT_APP_BASE_URL}/car/${id}`,
          }).then((val)=>{
              window.reload()
            })
    }

    console.log()
    return (
        <div className="car-card">
           <img className="car-image" src={props.image}/>
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
