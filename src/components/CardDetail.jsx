import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount'
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import "./Item"


export default function MediaCard({producto}) {

const onAdd = (cantidad) => {

  console.log(`Compraste ${cantidad} unidades`)
}

  return (
    
    <Grid justifyContent="center">
    <Card classes={{ label: 'cards' }} sx={{ maxWidth: 750 }}>
      <CardMedia
        component="img"
        height="800"
        image = {producto.pictureURL}
        alt="PC"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {producto.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {producto.desc}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {producto.detail}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Precio: ${producto.precio}           
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Stock: {producto.cantidad} unidades
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCount initial={0} stock={producto.cantidad} onAdd={onAdd}/>
      <Typography>
        <Button>
      <Link className="Nav" to="/">Volver al menú</Link>
        </Button>
      </Typography>
      </CardActions>
    </Card>
    </Grid>
  );
}
