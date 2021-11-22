import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout1 from './Layout1';
import Layout2 from './Layout2';

function App() {
  return (
    <Router>
      <Routes basename={`${process.env.PUBLIC_URL}`}>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Layout1 />}></Route>
        <Route path={`${process.env.PUBLIC_URL}/layout1`} element={<Layout1 />}></Route>
        <Route path={`${process.env.PUBLIC_URL}/layout2`} element={<Layout2 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
