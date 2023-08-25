import React, {useState, useEffect} from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyRefresh,pushRefresh}) {
  const [formData,setFormData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3001/toys")
      .then(resp=>resp.json())
      .then(data=>setFormData(data))
  },[toyRefresh])
  const toyItemsArray = formData.map((toy)=>{
    return(
      <ToyCard key={toy.id} id={toy.id} name={toy.name} src={toy.image} likes={toy.likes} toyRefresh={toyRefresh} pushRefresh={pushRefresh}/>
    )
  })
  return (
    <div id="toy-collection">{toyItemsArray}</div>
  );
}

export default ToyContainer;
