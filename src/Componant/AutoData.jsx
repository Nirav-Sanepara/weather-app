import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Clock from 'react-live-clock';

import "../Componant/Com.css"

const AutoData = () => {

    const [data, setData] = useState();

    const d = new Date();
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude;
            let log = position.coords.longitude;
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=b7760151c20cc26b14e6eb30196fc5d7&units=metric`)
                .then(function (response) {
                    // handle success
                    setData(response.data);

                })

                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        })
    });



    return (
        <div className="card bg-dark text-white">
            <img className="card-img" src="https://c1.wallpaperflare.com/preview/295/983/772/sunset-dusk-last-light-lake.jpg" alt="blah blah" />
            <div className="card-img-overlay">
                {!data ? <p>No data found</p> :
                    <div>
                        <h5 className="text-end">{data.name}</h5>
                        <h5 className="text-end">{data.sys.country}</h5>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <Clock format={'h:mm:ssa'} ticking={true} />
                        <h5>{data.main.temp} ℃</h5>
                        <h5>{d.toDateString()}</h5>
                    </div>


                }
            </div>
        </div >
    );
}

export default AutoData;