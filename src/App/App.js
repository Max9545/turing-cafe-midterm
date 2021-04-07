import React, { Component, useEffect, useState } from 'react';
import './App.css';

function App () {


  const [reservations, setReservations] = useState()

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
    .then(data => setReservations(data))
  },[])

  
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          {reservations && <section>{reservations.map(reservation => {
            return <div className='res-card'>
                    <h2>{reservation.name}</h2>
                    <p>{reservation.date}</p>
                    <p>{reservation.time}</p>
                    <p>{reservation.number}</p>
                   </div>
          })}</section>}
        </div>
      </div>
    )
}

export default App;
