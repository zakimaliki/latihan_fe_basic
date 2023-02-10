import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ModalCreate from "../components/ModalCreate";
import ModalEdit from "../components/ModalUpdate";
import ModalDelete from "../components/ModalDelete";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_BACKEND+"products")
      .then( (response)=> {
        setProducts(response.data.data);
      })
      .catch( (error)=> {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Products page</h1>
      <ModalCreate/>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">STOCK</th>
            <th scope="col">PRICE</th>
            <th scope="col">PHOTO</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
        {products.map((item, index) => (
          <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.stock}</td>
          <td>{item.price}</td>
          <td><a target="_blank" rel="noopener noreferrer" href={item.photo}>{item.photo}</a></td>
          <td>{item.description}</td>
          <td>
            <Link to={`${item.id}`}>
            <button className="btn btn-primary" style={{marginRight:"10px"}}>Detail</button>
            </Link>
            <ModalEdit id={item.id} name={item.name} stock={item.stock} price={item.price} description={item.description}/>
            <ModalDelete id={item.id} name={item.name}/>
          </td>
        </tr>
       ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
