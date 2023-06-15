import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/home/home";
import Scene from "./threeComponents/orbitBackground";

function App() {

    return (
        <Router>
            <div className="App">
                <Scene/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;