import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
      <div className="App">
        <Router>
          <NavBar/>
          <ItemListContainer greeting={'!Bienvenidxs a YourPhone!'}/>
        </Router>
      </div>
  );

}

export default App;
