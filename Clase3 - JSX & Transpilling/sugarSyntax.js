let number1 = 40;

const stringDevuelto = number1 < 30 ? "Si" : "No";

console.log(stringDevuelto);

// polyfills -> nos permiten hacer nuestra appc compatible con navegadores antiguos

// Webpack -> almacena archivos dentro de static assets 

// TRANSPILING: convertir codigo a su representación a otro lenguaje. 

// JSX: extensión de JS muy similar a HTML

function App() {

    const estilos = {
        width: "15cm"
    }
    
    return (
    <div className="App">
        <h1 className="title" style={
            {fontSize: "5rem"}
            }>Camilita te amo mucho!</h1>
            <p style={{
            fontSize: "5rem"
            }}>Vamos a dormir?</p>
            <input placeholder="Ingrese su respuesta" style={estilos}></input> 
        </div>
    );
}
export default App;