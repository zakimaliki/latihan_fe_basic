import React, { useState } from 'react'
import ButtonBaru from '../components/ButtonBaru';
import InputBaru from '../components/InputBaru';
import List from '../components/List';

const Latihan = () => {
    const [data, setData] = useState("");
    const [datas, setDatas] = useState([]);
    const handleChange = (e)=>{
        setData(e.target.value)
    }
    const handleClick = ()=>{
        setDatas(
            [...datas,data]
        )
        setData("")
    }

  return (
    <div>
        <InputBaru data={data} handleChange={handleChange}/>
        <ButtonBaru handleClick={handleClick} varian="blue"/>
        <br />
        {datas.length > 0 ? <List datas={datas}/> : <h4>Data Kosong</h4> }
    </div>
  )
}

export default Latihan