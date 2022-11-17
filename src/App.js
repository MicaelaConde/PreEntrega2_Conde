import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import Cart from './pages/Cart/Cart';
function App() {
  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
   <Route path="/" element={<ItemListContainer />} />
   <Route path='/filtrar/:filtrado'  element={<ItemListContainer/>} />
   <Route path='hoteles'  element={<ItemDetailContainer/>} />
   <Route path="cart" element={<Cart/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
