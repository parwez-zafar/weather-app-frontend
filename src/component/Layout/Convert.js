import React, { useState } from 'react';
import '../User/loginregister.css'

const Convert = (e) => {
    const [formDisplay, setFormDisplay] = useState('');
    const [valueDisplay, setValueDisplay] = useState('none');
    const [fahrenheit, setFahrenheit] = useState();
    const [celsius, setCelsius] = useState();
    const [kelvin, setKelvin] = useState();
    const get = (e) => {
        console.log(fahrenheit, " ", celsius, " ", kelvin);
        e.preventDefault();
        if (celsius) {
            let f = (parseFloat(celsius) * 9) / 5 + 32;

            setFahrenheit(parseFloat(f.toFixed(2)));

            let k = (parseFloat(celsius) + 273.15);
            console.log(f, " ", k);
            setKelvin(parseFloat(k.toFixed(2)));
        }
        else if (fahrenheit) {
            console.log("yes");
            let c = ((parseFloat(fahrenheit) - 32) * 5) / 9;
            setCelsius(parseFloat(c.toFixed(2)));

            let k = (parseFloat(fahrenheit) - 32) * 5 / 9 + 273.15;
            setKelvin(parseFloat(k.toFixed(2)));

        }
        else if (kelvin) {
            let f = (parseFloat(kelvin) - 273.15) * 9 / 5 + 32;
            setFahrenheit(parseFloat(f.toFixed(2)));

            let c = (parseFloat(kelvin) - 273.15);
            setCelsius(parseFloat(c.toFixed(2)));
        }
        setFormDisplay('none');
        setValueDisplay('')
    }
    const covertMore = () => {
        setCelsius('');
        setFahrenheit('');
        setKelvin('');
        setFormDisplay('');
        setValueDisplay('none');

    }
    return (
        <>





            <div className="Container" style={{ display: `${formDisplay}` }}>
                <h1 className='heading'>Temperature Converter</h1>
                <div className="Box">

                    <form className='loginForm' onSubmit={get}>

                        <div className="loginEmai">
                            <input type="number"
                                placeholder='Fahrenheit'

                                value={fahrenheit}
                                onChange={(e) => setFahrenheit(e.target.value)}
                            />
                        </div>

                        <div className="loginPassword">
                            <input type="number"
                                placeholder='Celsius'

                                value={celsius}
                                onChange={(e) => setCelsius(e.target.value)}
                            />
                        </div>
                        <div className="loginPassword">
                            <input type="number"
                                placeholder='Kelvin'

                                value={kelvin}
                                onChange={(e) => setKelvin(e.target.value)}
                            />
                        </div>


                        <input type="submit"
                            value="Convert"
                            className='loginBtn'
                        />

                    </form>

                </div>

            </div>

            <div className='Container'>
                <div className="Box">
                    {
                        fahrenheit ?
                            <>
                                <h1>Fahrenheit : {fahrenheit}</h1>
                                <h1>Celsius : {celsius}</h1>
                                <h1>Kevin : {kelvin}</h1>
                            </>
                            :
                            celsius ? <>
                                <h1>Celsius : {celsius}</h1>
                                <h1>kelvin : {kelvin}</h1>
                                <h1>Fahrenheit : {fahrenheit}</h1>
                            </>

                                : kelvin ? <>
                                    <h1>kelvin : {kelvin}</h1>
                                    <h1>Celsius : {celsius}</h1>
                                    <h1>Fahrenheit : {fahrenheit}</h1>
                                </>
                                    : " "

                    }
                    <button onClick={covertMore} className="loginBtn">
                        Convert More
                    </button>
                </div>
            </div>
        </>
    )
}

export default Convert