import "./App.css";
import React, { useState } from "react";
import { Client } from "./components/Client";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(`/api/clients?search=${search}`);
    setData(await response.json());
    if (data) {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Veterinarian admin - clients</h1>
      <div style={{ border: "1px solid black", padding: "1rem" }}>
        <input
          type="text"
          name="name"
          id="name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button disabled={search.length > 2 ? false : true} onClick={() => fetchData()}>
          search
        </button>
      </div>
      <div>
        {loading
          ? ""
          : data.map((data, index) => {
              return <Client key={index} data={data} />;
            })}
      </div>
    </div>
  );
};

export default App;
