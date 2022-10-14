import React/*, { useEffect }*/ from 'react';
import Routing from './routes';
//import algoritmoGuardarDataProgramatica from './services/data';

export const CartContext = React.createContext('')

function App() {

  /*useEffect(() => {
    algoritmoGuardarDataProgramatica()
  }, [])*/

  return (
      <Routing/>
  );

}

export default App;
