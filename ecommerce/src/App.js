import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer'

function App() {

  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Nuestros productos'}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Nuestros productos'}/>}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
  );

}

export default App;
