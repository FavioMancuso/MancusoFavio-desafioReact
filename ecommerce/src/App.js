import NavBar from './components/NavBar';

function App() {

  const estilos = {
    width: "15cm"
  }
  
  return (
    <>
    <NavBar/>
      <div className="App">
        <h1 className="title" style={
          {fontSize: "5rem"}
          }>Camilita te amo mucho!</h1>
          <p style={{
            fontSize: "5rem"
          }}>Vamos a dormir?</p>
          <input placeholder="Ingrese su respuesta" style={estilos}></input> 
      </div>
    </> 
  );
}

export default App;
