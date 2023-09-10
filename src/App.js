import './App.css';
import Home from './Routes/Home';
import AllDogsPage from './Routes/AllDogsPage';
import Navbar from './Components/Navbar/Navbar';
import DisplayBreedPhotos from './Components/DisplayBreedPhotos/DisplayBreedPhotos';
import SubBreeds from './Components/SubBreeds/SubBreeds';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<AllDogsPage />} />
        <Route path="/subbreed/:breed" element={<SubBreeds />} />
        <Route path="/breeds/:breed" element={<DisplayBreedPhotos/>} />


      </Routes>
    </div >
  );
}

export default App;
