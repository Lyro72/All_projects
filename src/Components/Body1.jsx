import * as React from 'react';
import {useState} from 'react';
import './../Styles/Body1.css';

const Body1 = () => {
  const [index, setIndex] = useState(0);
  
  //Banco de imagenes de la tienda
  const imgs = [
  
    [],
   
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNaITrPI8NFHAJkToUcpGnzFKgU6Uk4NWTu9070kLJBVrtLIwiVaTNBgrKkWaP0Wr7n4&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktODrzlhjvzQ6cZij6lpGKxRH9sgsReWbI4a-1KTdY5BjR3x-CMHCUxCO2bwOeJPxWpc&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZJKeGMiYpdgO-y5-kkZxKHu3vhbvzLEFw8X_pJ_P3qfZjDdC3vGfFlWNDBpQw_P7sB8&usqp=CAU"],
  
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBoNovwPyRNh7gj_ZYzFg2qMfJ6OAoU2GxOHZ9nG_61BmVqaXeU7SWSUFIFxy1_UTE6-E&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWitGiLs1I8zwDh0RQHP27WFAvxxRsCSnT1Q&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPIHXa5DfFFjpRJG_tK8yoARSpxwGtjixSMA&usqp=CAU"],
  
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0nUB3Q21RvsbyKGFJA6TVfW6PoreYWCX2qGJ3Fm30d0XO1INwOCYldXXgVQVhc727E3U&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9YkUpkgDHvPYMdWT4KGNNRJxSS7FaPAZMxqIqJa9GiM846b4DJ1FfMiQ_PNEIxHK0Sk&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNEcDPAF5sGcqi1NYMQb-TqftY9eU-bqYuy6qVeeULSRjbXYYLzsnwcWAw2FfafMSijc&usqp=CAU"],
  
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnwTngCsoUkfbhQPQoeDCOHiPcjvjVbKl8wUdgjj0JyJ1c1kfLsOhs8ziOoRf3FeyptOw&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAN0bK0CIw1HeNKSfbBai6GJ2FLmt43EcXDQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPP-JKsyrqlM4MkF6clsgvRElHYkzIayJhWQ&usqp=CAU"],
  
    ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFmh3s1aDF1FkqwXJ2HfuBzKt2kQKvX69mg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSX-Mdle1gNpir-2vG8xN76qrUhsfZNgyDXQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCmf5GFJvF0Nd4opP1oZ34wWH431zxhTGvHA&usqp=CAU"]
    
  ];
  
  //mecanismo del filtro
  const ChangeList = (val) => {
    setIndex(val);
  }

  //Default de la seccion
  const Showall = () => {
    return (
      <div className="allimgs">
        {imgs.map((el, key)=>el.map(val=><img className="allimg" src={val} />))}
      </div>
    )
  }

  //Imagenes filtradas
  function InsertarImagen () {
      return(
        <>
          <div className="muestra">
            <img className="png" src={imgs[index][0]}/>
            <img className="png" src={imgs[index][1]}/>
            <img className="png" src={imgs[index][2]}/>
          </div>
        </>
      );
  }

  //Salida
  return (
    <>
      <div id="Bod1">
        <div className="selector">
          <ul>
            <h2 className="titulo">ventas y reparaciones de:</h2>
            <li><button className="btnser" onClick={ () => {ChangeList(2)} }>Laptos</button></li>
            <li><button className="btnser" onClick={ () => {ChangeList(1)} }>Ordenadores</button></li>
            <li><button className="btnser" onClick={ () => {ChangeList(3)} }>Smart's TV</button></li>
            <li><button className="btnser" onClick={ () => {ChangeList(4)} }>Inversores</button></li>
            <li><button className="btnser" onClick={ () => {ChangeList(5)} }>Cámaras</button></li>
            <li id="nhover"><button className="btnser" id="reset" onClick={ () => {ChangeList(0)} }>Todo</button></li>
            <h2 className="titulo"><a href="http://localhost:5173/contact"><button><h2>Instalacion de sistemas de seguridad</h2></button></a></h2>
          </ul>
        </div>
        <div className="imgs">
          {index == 0 ? Showall() : InsertarImagen()}
        </div>

      </div>
    </>
  );
}

export default Body1;
//Hola mundo
