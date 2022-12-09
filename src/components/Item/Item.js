import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
 
    return (
      <Link to={`/detail/${product.id}`}>
      <div className="itemsContainer">
      <img src={`/images/${product.img}`} alt="hola" />

  <h2>Precio: ${product.precio}</h2>
       </div>
       </Link>
    )

  };

  export default Item;