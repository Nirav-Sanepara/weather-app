import React from 'react';
import './App.css'
import AutoData from './Componant/AutoData';
import FetchData from './Componant/FetchData';


const App = () => {

  return (
    <>
      <div className="container " >
        <div className="row mt-4 " >
          <div className="col-lg-8 " >
            <AutoData />
          </div>
          <div className="col-lg-4 ">

            <FetchData />
          </div>
        </div>
      </div>
    </>
  )
}
export default App;