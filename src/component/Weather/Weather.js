import axios from 'axios'
import React, { Fragment, useState } from 'react'
import '../User/loginregister.css'
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import { Country, State } from 'country-state-city'
const Weather = () => {
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [country, setCountry] = useState();
    const [data, setData] = useState([])
    // let { city } = useParams();
    const getWeatherData = async () => {
        try {
            const temp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=789c8d3124b5a4b3949d3fffa1867fa4`)
            setData(temp.data)
        }
        catch (err) {
            alert('Enter Valid City')
        }
    }
    const Submit = (e) => {
        e.preventDefault();
        getWeatherData();



    }




    // useEffect(() => {
    //     getWeatherData();
    // }, [])
    return (



        <Fragment>








            <div className="Container">
                {data?.main?.temp &&
                    <h1 className='heading'>{
                        parseInt(data?.main?.temp - 273)

                    } &nbsp;deg C

                    </h1>}
                <div className="Box">
                    {/* <h2 className="Heading">Shipping Details</h2> */}

                    <form
                        className='loginForm'
                        onSubmit={Submit}
                    >


                        <div>
                            <PublicIcon />

                            <select
                                required
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            >
                                <option value="">Country</option>
                                {Country &&
                                    Country.getAllCountries().map((item) => (
                                        <option key={item.isoCode} value={item.isoCode}>
                                            {item.name}
                                        </option>
                                    ))}
                            </select>
                        </div>

                        {country && (
                            <div>
                                <TransferWithinAStationIcon />

                                <select
                                    required
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                >
                                    <option value="">State</option>
                                    {State &&
                                        State.getStatesOfCountry(country).map((item) => (
                                            <option key={item.isoCode} value={item.isoCode}>
                                                {item.name}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        )}



                        {state && <div>
                            <LocationCityIcon />
                            <input
                                type="text"
                                placeholder="City"
                                required
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>}

                        <input
                            type="submit"
                            value="Continue"
                            className="loginBtn"
                        />
                    </form>
                </div>
            </div>
        </Fragment>


    )
}

export default Weather