import {useState, useEffect} from 'react';
import {data} from '../../data/data';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {filtrado} = useParams();

  const getProducts = new Promise((resp, rej) => {
  
    setTimeout(() =>{
      if(filtrado){
        const filtrarHabitacion = data.filter((item) =>{
          return item.category === filtrado;
        });

      
      resp(filtrarHabitacion);
    }else {
      resp(data);
    }
    }, 2000);
  });

  useEffect(() =>{
    getProducts.then((respuesta)=> setItems(respuesta));
  },[filtrado]);
  return (
    <div>
    <ItemList products={items} />
    </div>
  )
}

export default ItemListContainer;