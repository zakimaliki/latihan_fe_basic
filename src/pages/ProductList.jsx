import React , {useState} from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import styles from "./index.module.css"

const ProductList = () => {
  const [product,setProduct] = useState("")
  const [products,setProducts] = useState([])
  const handleChenge = (e) =>{
    setProduct(e.target.value)
  };

  const handleSave = () =>{
    setProducts([...products, product])
    setProduct("")
  }
  const customFont = {
    color:"black",
    fontSize:"20px"
  }

  return (
    <div className={styles.wrapper}>
      {/* <h2 style={{fontSize:"100px"}}>Product List</h2> */}
      <h2 style={customFont}>Product List</h2>
      <div className="input-group mb-3">
        <Input id="123" name="product" type="text" onChange={handleChenge} value={product}/>
        <Button id="123" type="button" onClick={handleSave}></Button>
      </div>
      <ul>
      {products.map((item)=>
        <li>{item}</li>
      )}
      </ul>

    </div>
  );
};

export default ProductList;
