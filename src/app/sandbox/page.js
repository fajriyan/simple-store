"use client";
import React, { useState, useEffect } from "react";

// Komponen untuk menampilkan detail produk
const ProductCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        width: "300px",
      }}
    >
      <h2>{product.name}</h2>
      <p>Harga: {product.price}</p>
      <p>{product.description}</p>
      <button onClick={handleAddToCart}>Tambah ke Keranjang</button>
    </div>
  );
};

// Komponen untuk menampilkan daftar produk
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Produk dummy
  const dummyProducts = [
    {
      id: 1,
      name: "Produk 1",
      price: "Rp 100.000",
      description: "Deskripsi produk 1",
    },
    {
      id: 2,
      name: "Produk 2",
      price: "Rp 150.000",
      description: "Deskripsi produk 2",
    },
    {
      id: 3,
      name: "Produk 3",
      price: "Rp 200.000",
      description: "Deskripsi produk 3",
    },
    {
      id: 4,
      name: "Produk 4",
      price: "Rp 250.000",
      description: "Deskripsi produk 4",
    },
  ];

  useEffect(() => {
    // Simulasi pengambilan data produk dari server
    setProducts(dummyProducts);
  }, []);

  useEffect(() => {
    // Simpan keranjang ke local storage setiap kali berubah
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Daftar Produk</h1>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
