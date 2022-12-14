import {useState, useEffect} from 'react';
import './ItemListContainer.css'
// import {data} from '../../data/data';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, query,where} from 'firebase/firestore'

const ItemListContainer = () => {
  const [habitaciones, setItems] = useState([]);
  const {filtrado} = useParams();

 const getProducts = () =>{
  const db= getFirestore();
  const querySnapshot= collection(db,'habitaciones');
 
  if (filtrado){
    const queryFilter= query(querySnapshot, where("categoria", "==", filtrado));
    getDocs(queryFilter)
  .then((response) =>{
    
    const data = response .docs.map((habitaciones) => {
      return {id: habitaciones.id, ...habitaciones.data()}
 
    });
    setItems(data)
    console.log(data);
  })
  .catch((error)=>{console.log(error)})
 }

 else{
  getDocs(querySnapshot)
  .then((response) =>{
    const data = response .docs.map((habitaciones) => {
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

  return  <div className='body'>{<ItemList products={habitaciones} />} </div>

 }

export default ItemListContainer;