import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Heading from './components/Heading';
import Slide from './components/Slide';
import Menu from './components/Menu';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-success">
      <Heading />
      <Routes>
        <Route path="/" element={<Slide />}></Route>
        <Route path="Menu" element={<Menu />}></Route>
        <Route path="Contacts" element={<Contacts />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
