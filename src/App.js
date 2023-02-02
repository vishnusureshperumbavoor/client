import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import UseState from './Pages/UseState';
import UseEffect from './Pages/UseEffect';
import UseContext from './Pages/UseContext';
import UseReducer from './Pages/UseReducer';
import UseMemo from './Pages/UseMemo';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usestate" element={<UseState />} />
          <Route path="/useeffect" element={<UseEffect />} />
          <Route path="/usecontext" element={<UseContext />} />
          <Route path="/usereducer" element={<UseReducer />} />
          <Route path="/usememo" element={<UseMemo />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
