import { useState, useContext } from "react";
import {CartContext} from "../../context/CartProvider";
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({productSelected}) => {
 const [count, setCount] = useState(1);
  const {cart, addToCart} = useContext(CartContext);

  return (
    <div className="items_carrito">
    
    <div className="detalle_carrito">
    <div>    <img alt={productSelected.descripcion}
    src={`/images/${productSelected.img}`}
    />
    </div>
    <div className="descripcion">
    <h2>Descripcion del producto:</h2>
    <h2>{productSelected.descripcion}</h2>
    <h2>Precio: ${productSelected.precio}</h2>
    </div>
    <div>

    
    <div className="carrito_btn">
    <h2>Cantidad: {count}</h2>
    <ItemCount setCount={setCount} />
    <button className="btn_agregarAlCarrito" onClick={() => addToCart(productSelected, count)}>Agregar al carrito</button>
    </div>
    </div>
    </div>
    </div>

  )
}

export default ItemDetail;