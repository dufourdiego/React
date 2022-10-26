import React, {useState, useEffect}  from 'react'

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const decrementar = () => {
        setCount(count - 1);
    }

    const incrementar = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));

    }, [initial])
        
  return (
    <div className='counter'>
        <button disabled={count<=0} onClick={decrementar}>-</button>
        <span>{count}</span>
        <button disabled={count>=stock}  onClick={incrementar}>+</button>
        <div>
            <button disabled={stock<=0 || count<=0} onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>

    </div>
)


}

export default ItemCount
