import React, { Component, useEffect, useState } from 'react';
import './App.css';

function App () {


  const [reservations, setReservations] = useState()
  const [name, setName] = useState()
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [number, setNumber] = useState()

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
    .then(data => setReservations(data))
  },[])


  useEffect(() => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
    .then(data => setReservations(data))
  },[reservations])


  function handleChange(event) {
   
    if (event.target.name === 'name') {
      setName(event.target.value)
    }
    if (event.target.name === 'date') {
      setDate(event.target.value)
    }
    if (event.target.name === 'time') {
      setTime(event.target.value)
    }
    if (event.target.name === 'number') {
      setNumber(event.target.value)
    }
  }

  function handleSubmit() {
    // event.preventDefault()
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name: name, date: date, time: time, number: number})
    })
    // .then(res => res.json())
    // .then(data => setReservations(data))
  }

  function deleteRes(event) {
    console.log(event.target.id, 'hi')
    fetch(`http://localhost:3001/api/v1/reservations/${event.target.id}`, { method: 'DELETE'})
  }
  
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input
                name='name'
                type='text'
                value={name}
                onChange={handleChange}
              />
            </label>
            <label>
              Date
              <input
                name='date'
                type='text'
                value={date}
                onChange={handleChange}
              />
            </label>
            <label>
              Time
              <input
                name='time'
                type='text'
                value={time}
                onChange={handleChange}
              />
            </label>
            <label>
              Number
              <input
                name='number'
                type='text'
                value={number}
                onChange={handleChange}
              />
            </label>
            <button>Make reservation</button>
          </form>
        </div>
        <div className='resy-container'>
          {reservations && 
          <section>
            {reservations.map(reservation => {
            return <div className='res-card'>
                    <h2>{reservation.name}</h2>
                    <p>{reservation.date}</p>
                    <p>{reservation.time}</p>
                    <p>{reservation.number}</p>
                    <button id={reservation.id}onClick={event => deleteRes(event)}>Delete Me</button>
                   </div>
              }
            )}
          </section>}
        </div>
      </div>
    )
}

export default App;
