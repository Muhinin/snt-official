import { Footer, Header } from "antd/es/layout/layout";
import { Link, useNavigate } from "react-router-dom";
import { Flex, Image, Layout, Menu } from "antd";
import React, { FC, ReactNode } from "react";
import Title from "antd/es/typography/Title";

import ReactRouterIcon from "../assets/icons/ReactRouterIcon";
import Paragraph from "antd/es/typography/Paragraph";
import ReactIcon from "../assets/icons/ReactIcon";
import AntDIcon from "../assets/icons/AntDIcon";

interface IMainLayout {
  activePage?: string;
  children: ReactNode;
}

const FooterLinks = [
  { component: <ReactIcon />, url: "https://react.dev/" },
  { component: <AntDIcon />, url: "https://ant.design/" },
  { component: <ReactRouterIcon />, url: "https://reactrouter.com/" },
];

const navMenuItems = [
  { url: "contacts", label: "Контакты" },
  { url: "maps", label: "Мы на картах" },
  { url: "docs", label: "Документы" },
  { url: "payment", label: "Реквизиты и оплата" },
];

const MainLayout: FC<IMainLayout> = ({ activePage, children }) => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Header style={{ position: "sticky", top: 0, zIndex: 1 }}>
        <Flex align="center" gap={16}>
          <Title
            style={{
              color: "white",
              whiteSpace: "nowrap",
              margin: 0,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            СНТ Дружба
          </Title>
          <Menu
            mode="horizontal"
            theme="dark"
            style={{ fontSize: 24, width: "100%" }}
            selectedKeys={activePage ? [activePage] : undefined}
          >
            {navMenuItems.map((item) => (
              <Menu.Item key={item.url}>
                <Link to={"/" + item.url}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Flex>
      </Header>
      <Flex
        align={"center"}
        vertical
        style={{ margin: "0 auto", maxWidth: 1200, padding: "32px 0" }}
      >
        {children}
      </Flex>
      <Footer style={{ backgroundColor: "#111a2c" }}>
        <div style={{ maxWidth: 1200, width: "100%", margin: "0 auto" }}>
          <Paragraph style={{ color: "#fff" }}>
            Приложение находится в разработке
          </Paragraph>
          <Flex gap={16} justify="center">
            {FooterLinks.map((link) => (
              <Link to={link.url} target="_blank" rel="moopener noreferrer">
                {link.component}
              </Link>
            ))}
          </Flex>
        </div>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
