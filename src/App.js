import './App.css';
import Home from "./components/home/home";
import Scene from "./threeComponents/orbitBackground";

function App() {

    return (
            <div className="App">
                <Scene/>
                <Home/>
            </div>
    );
}

export default App;