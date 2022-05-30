import React, {useState} from 'react'
import './addcar.css'
import axios from 'axios'

async function postData({image, name, year, company, price}) {
    const formData = new FormData();
    formData.append("image", image)
    formData.append("name", name)
    formData.append("year", year)
    formData.append("make", company)
    formData.append("price", price)
  
    const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/car`, formData, { headers: {'Content-Type': 'multipart/form-data'}})
    window.location.reload()
    return result.data
  }

export const AddCar = ({show}) => {
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [year, setYear] = useState('')
    const [price, setPrice] = useState('')
    const [file, setFile] = useState()

    async function addNewCar () {
        let details= {name,company,price,year}
        const result = await postData({image: file, name,company,price,year})
        console.log(result)
    }

    const fileSelected = event => {
        const file = event.target.files[0]
        setFile(file)
    }


    return (
        <>
      { show && (<div className="body">
            <div className="addcar-form">
                <input className="input" placeholder="Car Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <input className="input" placeholder="Car Company" value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
                <input className="input" placeholder="Car Year" value={year} onChange={(e)=>{setYear(e.target.value)}}/>
                <input className="input" placeholder="Price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                
                <input className="input" onChange={fileSelected} type="file" accept="image/*" placeholder="image" />
                <input className="input submit" type='submit' onClick={addNewCar} />
            </div>
        </div>) }
        </>
        
    )
}
