import React, { useState } from 'react'
import axios from 'axios';
import "font-awesome/css/font-awesome.min.css"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import '../Componant/Com.css'


const FetchData = () => {

    const [search, setSearch] = useState();
    const [data, setData] = useState({});

    const InputEvent = (event) => {
        setSearch(event.target.value)
    };

    const submitHandler = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b7760151c20cc26b14e6eb30196fc5d7&units=metric`)
            .then(function (response) {
                // handle success
                // console.log(response)
                setData(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);

            });

    }
    console.log(data)



    return (
        <div className="card bg-dark text-white">
            <img className="card-img" src="https://image.freepik.com/free-vector/black-background-with-focus-spot-light_1017-27230.jpg" alt="Card" />
            <div className="card-img-overlay">
                <div className="d-flex">

                    <input className="myinput" type="text" onChange={InputEvent} />
                    <i
                        className="fa fa-search search-icon fa-lg mt-2 myicon"
                        aria-hidden="true"
                        onClick={submitHandler}

                    ></i>
                </div>
                <br />
                {typeof data.name !== 'undefined' && <img className="icon" src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="nope" />}<br />

                <br />
                <h4 className="text-center">
                    {data.name}
                    {typeof data.name !== 'undefined' && <LocationOnIcon style={{ color: 'red' }} />}
                </h4><br />

                {typeof data.name !== 'undefined' ? (

                    <div>
                        <h6 className="text-center">Temperature: {data.main.temp} ℃</h6>
                        <h6 className="text-center">Humidity: {data.main.humidity}</h6>
                        <h6 className="text-center">Visibility: {data.visibility}</h6>
                        <h6 className="text-center">Wind Speed: {data.wind.speed} km/h</h6>
                    </div>
                ) : <p>No Data Found!</p>}<br />
                {typeof data.name !== 'undefined' && <h3 className="text-center">{data.weather[0].description}</h3>
                }
            </div>
        </div>
    );
}

export default FetchData;