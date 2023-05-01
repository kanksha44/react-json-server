// import logo from './logo.svg';
import "./App.css";
import axios from "axios";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users");
        // Handle the response data
        console.log(response.data, "data is here");
      } catch (error) {
        // Handle any errors
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>hi</h1>
    </div>
  );
}

export default App;
