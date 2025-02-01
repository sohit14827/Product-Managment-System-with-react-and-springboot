import React, { useEffect, useState } from 'react';
import productService from '../service/productService';
import { Link } from 'react-router-dom';

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService.getAllProduct()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    productService.deleteProduct(id)
      .then((res) => {
        console.log("Delete successfully");
        setMsg("✅ Product Deleted Successfully!");
        init();
      })
      .catch((error) => {
        console.log(error);
        init();
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card shadow-lg">
              <div className="card-header fs-3 text-center text-primary bg-light fw-bold">
                🏷️ All Product List
                {msg && (
                  <p className="fs-5 text-center text-success mt-2">
                    <i className="fas fa-check-circle me-2"></i>{msg}
                  </p>
                )}
              </div>
              <div className="card-body">
                <table className="table table-hover">
                  <thead className="table-dark text-light">
                    <tr>
                      <th scope="col">Sr No.</th>
                      <th scope="col">📦 Product Name</th>
                      <th scope="col">📝 Description</th>
                      <th scope="col">💲 Price</th>
                      <th scope="col">📊 Status</th>
                      <th scope="col">⚙️ Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => (
                      <tr key={p.id || num}>
                        <td className="fw-bold">{num + 1}</td>
                        <td>{p.productName}</td>
                        <td>{p.description}</td>
                        <td className="text-success fw-semibold">${p.price}</td>
                        <td>{p.status}</td>
                        <td>
                          <Link to={'editProduct/' + p.id} className="btn btn-sm btn-info">
                            <i className="fas fa-edit"></i> ✏️ Edit
                          </Link>
                          <button onClick={() => deleteProduct(p.id)} className="btn btn-sm btn-danger ms-2 text-light">
                            <i className="fas fa-trash"></i> 🗑️ Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;