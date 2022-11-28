import Navbar from "./Navbar";
import AnaSayfa from "./Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route path="/" element={<AnaSayfa/>}>
              
            </Route>
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
