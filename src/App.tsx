import React from "react";
import "./App.css";
import MainLayout from "./components/MainLayout";
import { Image } from "antd";

const image = require("./assets/images/small-countryhouse.jpg")

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Image width={"80%"} src={image} preview={false} />
      </MainLayout>
    </div>
  );
}

export default App;
