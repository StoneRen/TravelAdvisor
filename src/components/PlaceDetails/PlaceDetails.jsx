import React from 'react'
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  CardMedia,
} from '@material-ui/core'
import { LocationOnRounded, Phone } from '@material-ui/icons'
import { Rating } from '@material-ui/lab'

import userStyle from './style'

const PlaceDetails = ({ place }) => {
  const classes = userStyle()
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : './res/images/default-rest.jpg'
        }
        title={place.name}
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Typography gutterBottom variant="h5">
            {place.name}
          </Typography>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, '_blank')}
          >
            猫途鹰
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, '_blank')}
          >
            官网
          </Button>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Rating
            name="read-only"
            size="small"
            value={Number(place.rating)}
            readOnly
          />
          {place.open_now_text}
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">均价</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">评价</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnRounded />
            {place.distance_string} | {place.address_obj.city}{' '}
            {place.address_obj.street1}{' '}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <Phone /> {place.phone}
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}
export default PlaceDetails
