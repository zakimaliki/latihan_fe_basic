import React ,{useEffect, useState}from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const DetailProduct = () => {
  const {id} = useParams()
  const [product,setProduct] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_BACKEND+"products/"+id)
      .then( (response)=> {
        setProduct(response.data.data[0]);
        console.log(product);
      })
      .catch( (error)=> {
        console.log(error);
      });
  }, []);
  return (
    <div>
        <h1>Page Detail Product</h1>
        <ul>
          <li>{product.id}</li>
          <li>{product.name}</li>
          <li>{product.stock}</li>
          <li>{product.price}</li>
          <li><a target="_blank" rel="noopener noreferrer" href={product.photo}>{product.photo}</a></li>
          <li>{product.description}</li>
        </ul>
        <button onClick={()=>navigate('/')}>Kembali ke home</button>
    </div>
  )
}

export default DetailProduct