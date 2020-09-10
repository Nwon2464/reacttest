import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">Hello World!</header>
      {!data ? (
        <div>loading...</div>
      ) : (
        data.map((e, i) => {
          return (
            <div className="App-header" key={i}>
              {e.username}
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
