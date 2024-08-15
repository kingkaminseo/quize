import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/home';
import Helper from './Views/helper';
import Start from './Views/start';


function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/helper' element={<Helper />}/>
            <Route path='/start' element={<Start />}/>
          </Routes>
        </Router>

    </div>
  );    
}

export default App;
