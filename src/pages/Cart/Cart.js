import {useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartProvider";
import { collection, addDoc, getFirestore, doc, updateDoc} from "firebase/firestore";
import moment from "moment/moment";
import './Cart.css';

const Cart = () => {
  const {cart} = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [formValues, setFormValues] = useState({
    name: '',
    phone :'',
    email: '',
  })

  const getTotalPrice = () => {
    setTotal(
      cart.reduce((acc, product) => acc + product.precio * product.quantity, 0)
    );
  };

  const createOrder = () => {
    const db = getFirestore();
    const query = collection(db,'order');
    const newOrder ={
      buyer: {
        name: formValues.name,
        phone: formValues.phone,
        email: formValues.email
      },
      date: moment().format('DD/MM/YYYY'),
      items:cart,
      total:total,
    };
    addDoc(query,newOrder)
    .then((response)=> { alert('Orden creada')
    return(response)
    })
    .then((resp) => {

      cart.forEach((product) => {
        const query = doc(db, 'habitaciones', product.id);
        updateDoc(query, {
          stock: product.stock - product.quantity
        })
      } )
    })

    .catch((error) => console.log(error));
  };
  useEffect(() => {
    getTotalPrice();
  },);

const handleInputCgange = (event) => {
  setFormValues({
    ...formValues, [event.target.name] : event.target.value
  })
}

  return (
    <div>
    <h2 className="titulo">Tu carrito tiene {cart.length} productos</h2>
    <div  className="cart_form">
    {cart.map((product) => (

      <div className="cart_items" key={product.id}>
      <img alt={product.descripcion}
      src={`./images/${product.img}`}
      />
      <div className="descripcion">
      <h2>{product.descripcion}</h2>
      <h2>Precio: ${product.precio}</h2>
      </div>
      </div>


    ))}
      <div>


      <div >
      <div className="form">
      <h2>Total: ${total}</h2>
      <input name="name" type="text" placeholder="Nombre" value={formValues.name} onChange={handleInputCgange}/>
      <input name="phone" type="text" placeholder="telefono" value={formValues.phone} onChange={handleInputCgange}/>
      <input name="email" type="text" placeholder="email" value={formValues.email} onChange={handleInputCgange} />
      <button onClick={createOrder}>Crear Orden</button>
      </div>
      </div>

      


      </div>
      </div>
    </div>
  )
}

export default Cart