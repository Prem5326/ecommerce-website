import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products').then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <div key={p._id} className="border border-aqua p-4 rounded shadow">
            <img src={p.image} alt={p.name} className="h-32 w-full object-cover mb-2" />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button className="mt-2 bg-aqua text-dark px-2 py-1 rounded">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
