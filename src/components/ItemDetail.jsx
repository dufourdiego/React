import { Grid } from '@mui/material'
import React from 'react'
import CardDetail from './CardDetail'

function ItemDetail({producto}) {
  return (
    <div>
      <Grid container justifyContent="center" marginTop={4}>
      
        <CardDetail producto={producto} />

      </Grid>
    </div>
  )
}

export default ItemDetail