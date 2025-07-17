
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Promotores from './pages/Promotores';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="acerca-de" element={<About />} />
          <Route path="promotores-ambientales" element={<Promotores />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
