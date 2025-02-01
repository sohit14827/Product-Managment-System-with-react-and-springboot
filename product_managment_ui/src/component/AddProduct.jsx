import React, { useState } from 'react';
import productService from '../service/productService';
import { FaBox, FaAlignLeft, FaRupeeSign, FaCheckCircle } from 'react-icons/fa';

const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    status: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegister = (e) => {
    e.preventDefault();

    productService.saveProduct(product)
      .then((res) => {
        setMsg("✅ Product Added Successfully!");
        setProduct({
          productName: "",
          description: "",
          price: "",
          status: "",
        });

        setTimeout(() => setMsg(""), 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-header fs-3 text-center bg-primary text-white rounded-top">
                🛒 Add New Product
              </div>

              {msg && (
                <div className="alert alert-success text-center fw-bold">
                  <FaCheckCircle className="me-2" /> {msg}
                </div>
              )}

              <div className="card-body">
                <form onSubmit={ProductRegister}>
                  <div className="mb-3">
                    <label className="fw-bold">📦 Enter Product Name</label>
                    <div className="input-group">
                      <span className="input-group-text bg-primary text-white">
                        <FaBox />
                      </span>
                      <input
                        name="productName"
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        value={product.productName}
                        placeholder="Enter product name"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="fw-bold">📝 Enter Description</label>
                    <div className="input-group">
                      <span className="input-group-text bg-info text-white">
                        <FaAlignLeft />
                      </span>
                      <input
                        name="description"
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        value={product.description}
                        placeholder="Enter product description"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="fw-bold">💰 Enter Price</label>
                    <div className="input-group">
                      <span className="input-group-text bg-success text-white">
                        <FaRupeeSign />
                      </span>
                      <input
                        name="price"
                        type="number"
                        className="form-control"
                        onChange={handleChange}
                        value={product.price}
                        placeholder="Enter product price"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="fw-bold">📊 Enter Status</label>
                    <div className="input-group">
                      <span className="input-group-text bg-warning text-white">
                        <FaCheckCircle />
                      </span>
                      <input
                        name="status"
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        value={product.status}
                        placeholder="Enter product status (Available/Out of Stock)"
                      />
                    </div>
                  </div>

                  <button className="btn btn-primary col-md-12 fw-bold shadow-sm">
                    ➕ Add Product
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;