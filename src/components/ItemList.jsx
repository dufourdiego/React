import React from 'react'
import Item from './Item';
import './Item'
import { Grid } from '@mui/material';


function ItemList({productos}) {
  return (
    <div className='contenedor'>
      
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} gap={3} margin={5} justify="center" >
  
      {!productos.length && "Loading..."}
      {productos.map((item) => (
        <Item item={item}/>
     
        ))}
        
        </Grid>
    </div>
  )
}

export default ItemList

