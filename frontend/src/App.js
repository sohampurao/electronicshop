import Navbar from './components/Navbar';
import Homescreen from './screens/HomeScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/product/:slug" element={<ProductScreen />} />
        <Route index element={<Homescreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
