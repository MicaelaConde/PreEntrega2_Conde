
const Item = ({product}) => {
    return (
      <div>
  <h2>Tipo de habitacion: {product.category}</h2>
  <h2>Numero de habitacion: {product.number}</h2>
       </div>
       
    )
   
  };
  
  export default Item;