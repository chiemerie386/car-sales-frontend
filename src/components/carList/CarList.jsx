import React from 'react'
import { Car } from '../car/Car'
import './carlist.css'

export const CarList = () => {
    return (
        <div className="car-list">
            <Car/>
            <Car/>
            <Car/>
            <Car/>
            <Car/>
            
        </div>
    )
}
