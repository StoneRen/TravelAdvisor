import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core'
import { SettingsSystemDaydreamSharp } from '@material-ui/icons'
import React, { useState } from 'react'

import PlaceDetails from '../PlaceDetails/PlaceDetails'

import userStyle from './style'

const List = ({ places }) => {
  const classes = userStyle()
  const [type] = useState('restaurants')
  const [rating, setRating] = useState(0)

  return (
    <div className={classes.container}>
      <Typography variant="h5">附近酒店、旅馆</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>类型</InputLabel>
        <Select
          value={type}
          onChange={e => SettingsSystemDaydreamSharp(e.target.value)}
        >
          <MenuItem value="restaurants">餐馆</MenuItem>
          <MenuItem value="hotels">酒店</MenuItem>
          <MenuItem value="attractions">景点</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>评分</InputLabel>
        <Select value={rating} onChange={e => setRating(e.target.value)}>
          <MenuItem value={0}>全部</MenuItem>
          <MenuItem value={3}>3分以上</MenuItem>
          <MenuItem value={4}>4分以上</MenuItem>
          <MenuItem value={4.5}>4.5分以上</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map(
          (place, index) =>
            place.name && (
              <Grid item key={index} xs={12}>
                <PlaceDetails place={place} />
              </Grid>
            )
        )}
      </Grid>
    </div>
  )
}
export default List
