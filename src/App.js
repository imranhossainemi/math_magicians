import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './Components/Calculator';
import Home from './Components/Home';
import Quote from './Components/Quote';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
