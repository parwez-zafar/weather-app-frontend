import React, { useEffect, useState } from 'react';
import './favCity.css'
import { useSelector } from 'react-redux';
import axios from 'axios';
import './loginregister.css'
const FavCity = () => {
    const { user } = useSelector((state) => state.user);
    console.log(user?.fav_city);
    const [data, setData] = useState([])
    const getWeatherData = async () => {
        try {
            const temp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${user?.fav_city}&appid=789c8d3124b5a4b3949d3fffa1867fa4`)
            setData(temp.data)
        }
        catch (err) {
            alert('you have entered wrong city')
        }
    }
    useEffect(() => {
        getWeatherData();
    }, [user])
    return (

        <div className='temprature'>

            {data?.main?.temp &&
                <h1 className='heading'>{
                    `Temprature of ${user.fav_city} is:
                    ${parseInt(data?.main?.temp - 273)}`

                } &nbsp;deg C

                </h1>}
        </div>

    )
}

export default FavCity