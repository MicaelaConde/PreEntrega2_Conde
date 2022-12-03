import {useState, useEffect} from 'react';
import './ItemListContainer.css'
// import {data} from '../../data/data';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, query,where, QuerySnapshot} from 'firebase/firestore'

const ItemListContainer = () => {
  const [habitaciones, setItems] = useState([]);
  const {filtrado} = useParams();

 const getProducts = () =>{
  const db= getFirestore();
  const QuerySnapshot= collection(db,"habitaciones");
 
  if (filtrado){
    const queryFilter= query(QuerySnapshot, where("categoria", "==", filtrado));
    getDocs(queryFilter)
  .then((response) =>{
    
    const data = response .doc.map((habitaciones) => {
      // console.log(habitaciones.data());
      return {id: habitaciones.id, ...habitaciones.data()}
 
    });
    setItems(data)
    console.log(data);
  })
  .catch((error)=>{console.log(error)})
 }

 else{
  getDocs(QuerySnapshot)
  .then((response) =>{
    const data = response .docs.map((habitaciones) => {
      // console.log(habitaciones.data());
      return {id: habitaciones.id, ...habitaciones.data()}

    });
    setItems(data)
    console.log(data);
  })
  .catch((error)=>{console.log(error)})
 }
 }
  
 
  
useEffect(()=>{
  getProducts();
},[filtrado]);

  return  <div className='body'>{<ItemList products={habitaciones} />  } </div>

 }

export default ItemListContainer;