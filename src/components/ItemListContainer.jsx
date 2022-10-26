import React from 'react'
import ItemCount from './ItemCount'
import logo from "../PcGamer.jpg"

const ItemListContainer = ({greeting}) => {

  const onAdd = (cantidad) => {
    console.log(`Compraste ${cantidad} unidades`);
  }
   
  return (
    <>
    <h1 style={{backgroundColor:'#ddd',textAlign:'center',color:'white'}}>{greeting}</h1>
    <div className='logo'>
    <img src={logo} alt={"PC Gamer"} ></img>
    </div>
    <ItemCount initial={0} stock={10} onAdd={onAdd}/>
    
    </>
)


}

export default ItemListContainer