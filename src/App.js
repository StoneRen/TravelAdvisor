import React, { useState, useEffect } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'

import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

import { getPlaceData } from './api'

const App = () => {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log('position', position)
        const { latitude, longitude } = position.coords
        setCoordinates({ lat: latitude, lng: longitude })
      },
      err => {
        setCoordinates({ lat: 39.9109, lng: 116.4133 })
      }
    )
  }, [])
  useEffect(() => {
    if (!!bounds && !!bounds.ne && !!bounds.sw) {
      getPlaceData(bounds.ne, bounds.sw)
        .then(data => {
          setPlaces(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [coordinates, bounds])
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={6}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App
