import { Grid } from '@mui/material';
import React from 'react'
import MediaCard from './MediaCard';
import "./Item"

function Item({item}) {
  return (
    <div >
      <div className='contenedor' key={item.id}>
        
        <Grid item xs={12}>
        <MediaCard className='cards' item={item} />
        </Grid>
      </div>
    </div>
  )
}

export default Item