import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
//import ItemListContainer from './containers/ItemListContainer'

function App() {

  return (
      <div className="App">
        <Router>
          <NavBar/>
          {/*<ItemListContainer greeting={'Nuestros productos'}/>*/}
          <ItemDetailContainer/>
          
        </Router>
      </div>
  );

}

export default App;
