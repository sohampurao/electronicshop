import Navigationbar from './components/Navbar';
import Homescreen from './screens/HomeScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import Container from 'react-bootstrap/esm/Container';
import Footer from './components/Footer';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navigationbar />
        <Container className="mt-3">
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route index element={<Homescreen />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
