import React from 'react'
import Item from './Item';
import './Item'
import { Grid } from '@mui/material';


function ItemList({productos}) {
  return (
    <div className='contenedor'>
      
      <Grid container gap={3} marginTop={4} justifyContent="center" >
  
      {!productos.length && "Loading..."}
      {productos.map((item) => (
        <Item item={item}/>
     
        ))}
        
        </Grid>
    </div>
  )
}

export default ItemList

