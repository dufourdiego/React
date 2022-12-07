import React, { useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';


export default function MediaCard({producto}) {

  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useContext(CartContext);
  const imgCard = producto.imgUrl;
const onAdd = (cantidad) => {

  setGoToCart(true);
  addProduct(producto, cantidad);
  
}

  return (
    
    <Card sx={{ maxWidth: 900 }}>
      <CardMedia
        component="img"
        height="600"
        image = {imgCard}
        alt= {producto.nombre}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {producto.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {producto.descripcion}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {producto.detalle}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          ${producto.precio}
        </Typography>
      </CardContent>
      <CardActions>
        { goToCart ?
                <Link to={"/checkout"}>Finalizar compra</Link>
                :
                <ItemCount initial={0} stock={producto.cantidad} onAdd={onAdd}/>

          }
        
      </CardActions>
    </Card>
  );
}
