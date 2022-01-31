import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import { LocationOnRounded } from '@material-ui/icons'
import { Rating } from '@material-ui/lab'

import userStyle from './style'

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  const classes = userStyle()
  const isMobile = useMediaQuery('(max-width:600px)')
  const defaultCoordinates = { lat: 39.9109, lng: 116.4133 }

  const Marker = ({ lat, lng, place }) => (
    <div
      className={classes.markerContainer}
      lat={Number(lat)}
      lng={Number(lng)}
    >
      {isMobile ? (
        <LocationOnRounded color="primary" fontSize="large" />
      ) : (
        <Paper elevation={3} className={classes.paper}>
          <Typography
            className={classes.typography}
            variant="subtitle2"
            gutterBottom
          >
            {place.name}
          </Typography>
          <Rating
            name="read-only"
            size="small"
            value={Number(place.rating)}
            readOnly
          />
        </Paper>
      )}
    </div>
  )
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAw4hsQ1LKAagYcLoDK7GCuQC6VhUcKlDQ' }}
        yesIWantToUseGoogleMapApiInternals
        defaultCenter={defaultCoordinates}
        center={coordinates}
        defaultZoom={13}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={e => {
          setCoordinates({
            lat: e.center.lat,
            lng: e.center.lng,
          })
          setBounds({
            ne: e.marginBounds.ne,
            sw: e.marginBounds.sw,
          })
        }}
      >
        {places.length &&
          places.map(
            (place, i) =>
              place.latitude &&
              place.longitude && (
                <Marker
                  lat={Number(place.latitude)}
                  lng={Number(place.longitude)}
                  place={place}
                  key={i}
                ></Marker>
              )
          )}
      </GoogleMapReact>
    </div>
  )
}
export default Map
