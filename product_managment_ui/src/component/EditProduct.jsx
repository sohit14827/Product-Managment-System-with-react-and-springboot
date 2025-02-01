import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import productService from '../service/productService';
import { FaBox, FaInfoCircle, FaRupeeSign, FaToggleOn, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';

const EditProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    description: "",
    price: "",
    status: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const [msg, setMsg] = useState("");

  useEffect(() => {
    productService.getProductById(id)
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const ProductUpdate = (e) => {
    e.preventDefault();

    productService.editProduct(product)
      .then(() => {
        setMsg("✅ Product updated successfully!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-header fs-3 text-center bg-primary text-white rounded-top">
                ✏️ Edit Product
              </div>

              {msg && (
                <div className="alert alert-success text-center fw-bold">
                  <FaCheckCircle className="me-2" /> {msg}
                </div>
              )}

              <div className="card-body">
                <form onSubmit={ProductUpdate}>
                  <div className="mb-3">
                    <label className="fw-bold">📦 Product Name</label>
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
                    <label className="fw-bold">📝 Description</label>
                    <div className="input-group">
                      <span className="input-group-text bg-info text-white">
                        <FaInfoCircle />
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
                    <label className="fw-bold">💰 Price</label>
                    <div className="input-group">
                      <span className="input-group-text bg-warning text-white">
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
                    <label className="fw-bold">📊 Status</label>
                    <div className="input-group">
                      <span className="input-group-text bg-success text-white">
                        <FaToggleOn />
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
                    ✅ Update Product
                  </button>

                  <button
                    className="btn btn-secondary col-md-12 mt-2 fw-bold shadow-sm"
                    onClick={() => navigate('/')}
                  >
                    <FaArrowLeft className="me-2" /> Back to Home
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

export default EditProduct;