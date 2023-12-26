import "./App.scss"
import Header from "./Components/Header/Header";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    
   <div>
    <Router>
      <Header/>
      
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </Router>
   </div>
  );

}

export default App;
