import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
 
    return (
      <Link to={`detail/${product.id}`}>
      <div className="itemsContainer">
      <img src={`/images/${product.img}`} alt="hola" />
  <h2>Tipo de habitacion: {product.categoria}</h2>
  <h2>Descripcion: {product.descripcion}</h2>
  <h2>Precio: ${product.precio}</h2>
       </div>
       </Link>
    )

  };

  export default Item;