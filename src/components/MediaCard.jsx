import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import "./Item"

export default function MediaCard({item}) {

  return (
    
    <Card sx={{ maxWidth: 600 }  }>
      <div className='cards' >

      <CardMedia className='cards'
        component="img"
        height="240"
        image = {item.pictureURL}
        alt="PC Gamer"
      />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.desc}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          ${item.precio}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">
        <Link to={"/item/" + item.id}>Ver mas</Link>
        </Button>
        </CardActions>
    </Card>
  );
}
