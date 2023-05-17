// src/main/frontend/src/App.js

import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    // axios
    //   .get("/hello")
    //   .then((response) => setHello(response.data))
    //   .catch((error) => console.log(error));
    const fetchServer = async () => {
      try {
        const response = await axios.post("/search", {
          name: "범수",
        });
        // const response = await axios.get("/hello");
        console.log(response);
        setHello(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchServer();
  }, []);

  return <div>백엔드에서 가져온 데이터입니다 : {hello}</div>;
}

export default App;
