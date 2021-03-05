import React from "react";

function Food({ fav }) {
  console.log(fav);
  return <h3>I like {fav}</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="steak" />
      <Food fav="milk" />
      <div></div>
    </div>
  );
}

export default App;
