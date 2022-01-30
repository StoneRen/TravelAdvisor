import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import { LocationOnOutlinedIcon } from '@material-ui/icons'
import Rating from '@material-ui/lab'

import userStyle from './style'

const Map = () => {
  const classes = userStyle()
  const isMobile = useMediaQuery('(max-width:600px)')

  const coordinates = { lat: 0, lng: 0 }

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAw4hsQ1LKAagYcLoDK7GCuQC6VhUcKlDQ' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
      ></GoogleMapReact>
    </div>
  )
}
export default Map