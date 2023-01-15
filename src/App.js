import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/home/home";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/work" element={<Work/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;