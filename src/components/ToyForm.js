import React from "react";

function ToyForm({toyRefresh,pushRefresh}) {
  function createToy(e) {
    e.preventDefault()
    const toyHold = {name:e.target[0].value, image:e.target[1].value, likes:0}
    fetch("http://localhost:3001/toys",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(toyHold)})
    .then(()=>pushRefresh(!toyRefresh))
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={createToy}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
