import "./App.css";
import { useState } from "react";
import AllProducts from "./components/AllProducts";

function App() {
  const [product, setProduct] = useState({
    productName: "",
    image: "",
    price: "",
    sold: true,
  });
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 3 ways to write a condition to check if the product already exists:

    if (
      products.some((item) => item.productName === product.productName) ===
      false
    ) {
      setProducts([...products, product]);
    }

    //  products.some((item) => item.productName === product.productName)
    //   ? console.log("product already exists")
    //   : setProducts([...products, product]);

    //short circuit evaluation with && , ||

    // products.some((item) => item.productName === product.productName) ||
    //   setProducts([...products, product]);
  };

  const handleSold = (index) => {
    const updatedProducts = products.map((item, i) =>
      index === i ? { ...item, sold: !item.sold } : item
    );

    setProducts(updatedProducts);
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((item, i) => i !== index);

    setProducts(updatedProducts);
  };

  console.log(product);
  return (
    <div className="App">
      <h1> Your Store Page </h1>
      <hr />

      <form onSubmit={handleSubmit}>
        <div>Product Name</div>

        <input onChange={handleChange} name="productName" type="text" />

        <div> Image Link </div>
        <input onChange={handleChange} name="image" type="text" />

        <div> Price </div>
        <input onChange={handleChange} name="price" type="text" />

        <br />
        <button> Add </button>
      </form>

      <AllProducts
        products={products}
        handleSold={handleSold}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
