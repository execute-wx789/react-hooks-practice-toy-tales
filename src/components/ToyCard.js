import React from "react";

function ToyCard({name,src,likes,toyRefresh,pushRefresh,id}) {
  function donateToy() {
    fetch(`http://localhost:3001/toys/${id}`,{method:"DELETE"})
    .then(()=>pushRefresh(!toyRefresh))
  }
  function addLike(){
    fetch(`http://localhost:3001/toys/${id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({likes:(likes+1)})})
    .then(()=>pushRefresh(!toyRefresh))
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={src}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={addLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={donateToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
