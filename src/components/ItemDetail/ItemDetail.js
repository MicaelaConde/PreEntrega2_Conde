import { useState, useContext } from "react";
import {cartContext} from "../../context/CartProvider";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({productSelected}) => {
  const [count, setCount] = useState(1);
  const {cart, addToCart} = useContext(cartContext);
  console.log(cart);
  return (
    <div>
    <h1>Esta es la cantidad del carrito {cart.length}</h1>
    <img alt={productSelected.descripcion}
    src={`/images/${productSelected.img}`}
    />
    <h2>{productSelected.id}</h2>
    <h2>{productSelected.descripcion}</h2>
    <h2>{productSelected.precio}</h2>
    <h2>{count}</h2>
    <ItemCount setCount={setCount} />
    <button onClick={() => addToCart(productSelected, count)}>Agregar al carrito</button>
    </div>
   
  )
}

export default ItemDetail;