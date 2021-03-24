import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("/api/hotels");
    setData(await response.json());
    if (data) {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Veterinarian admin - clients</h1>
      <input
        type="text"
        name="name"
        id="name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button disabled={search.length > 2 ? false : true}>search</button>
    </div>
  );
};

export default App;
