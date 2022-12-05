import data from './data';
import './css/home.css';

function App() {
  return (
    <div>
      <header>
        <a href="/">Electronic Shop</a>
      </header>
      <main>
        <h1 className="home-title">Featured Products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-details">
                <a href={`product/${product.slug}`}>
                  <div className="product-name">{product.name}</div>
                </a>
                <div className="product-price">
                  <strong>Price: </strong>&#8377;{product.price}
                </div>
                <div className="product-brand">
                  <strong>Brand:</strong> {product.brand}
                </div>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
