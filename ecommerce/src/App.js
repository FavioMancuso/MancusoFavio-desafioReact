import React/*, { useEffect } */from 'react';
import Routing from './routes';
//import algoritmoGuardarDataProgramatica from './services/data';//

export const CartContext = React.createContext('')
console.log('CartContext: ' , CartContext);

function App() {

  /*useEffect(() => {
    algoritmoGuardarDataProgramatica()
  }, [])*/

  return (
      <Routing/>
  );

}

export default App;
