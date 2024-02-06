import Typography from "antd/es/typography/Typography";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { Flex, Image } from "antd";
import React from "react";

import MainLayout from "./components/MainLayout";
import { mainPageText } from "./constants/texts";
import "./App.css";

const image = require("./assets/images/small-countryhouse.jpg");

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Flex>
          <Image src={image} style={{ width: "100%" }} preview={false} />
        </Flex>
        <Typography>
          <Title>The title</Title>
          {mainPageText.map((text) => (
            <Paragraph style={{ textAlign: "left", fontSize: 18 }}>
              {text}
            </Paragraph>
          ))}
        </Typography>
      </MainLayout>
    </div>
  );
}

export default App;
