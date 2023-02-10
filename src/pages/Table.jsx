import React, { useState } from "react";

const Table = () => {
  const [product,setProduct] = useState({
    name :"",
    email:"",
    phone:""
  })
  
  const [products, setProducts] = useState([
    {
      name: "bramono",
      email: "bramono@gmail.com",
      phone: "087654321",
    },
    {
      name: "Rian",
      email: "rian@gmail.com",
      phone: "087654321",
    },
    {
      name: "Ringgo",
      email: "ringgo@gmail.com",
      phone: "087654321",
    },
    {
      name: "Faris",
      email: "faris@gmail.com",
      phone: "087654321",
    }
  ]);

  const handleChange = (e) => {
    setProduct({
        ...product,
      [e.target.name]: e.target.value,
    });
    console.log(product);
  };

  const handleClick = (e) => {
    setProducts(
        [...products,product]
    )
    setProduct({
        name :"",
        email:"",
        phone:""
    });
  };



  return (
    <div>
    <div>
        <label htmlFor="name">name</label>
        <br />
        <input type="text" placeholder="name" name="name" value={product.name} onChange={handleChange}/>
        <br />
        <label htmlFor="email">email</label>
        <br />
        <input type="text" placeholder="email" name="email" value={product.email} onChange={handleChange}/>
        <br />
        <label htmlFor="phone">phone</label>
        <br />
        <input type="text" placeholder="phone" name="phone" value={product.phone} onChange={handleChange}/>
        <br />
        <button onClick={handleClick}>Add</button>
    </div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        {/* buat list rendering */}
        <tbody>
            {products.map((item,index) => (
              <tr>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
