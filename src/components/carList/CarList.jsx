import React,{useState, useEffect} from 'react'
import { Car } from '../car/Car'
import './carlist.css'
import axios from 'axios'

export const CarList = ({show}) => {

    const [data, setData] = useState()
    useEffect(()=>{
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_BASE_URL}/cars`,
          }).then((val)=>{
              setData(val.data)
            })
    },[])

    return (
        <>
        {show && (<div className="car-list">
        {
            data && (data.map((val,index)=>{
                let image = `${process.env.REACT_APP_BASE_URL}/car/images/${val.image}`
                return(
                    <Car key={index} id={val._id} name={val.name.toUpperCase()} make={val.make.toUpperCase()} year={val.year.toUpperCase()} price={val.price.toUpperCase()} image={image}/>
                )
            }))
        }   
        </div>)}
        </>
    )
}
