import React, { FC, ReactNode } from "react";
import { Layout, Menu, MenuProps, Typography } from "antd";
import { Footer, Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { Link, useNavigate } from "react-router-dom";

interface IMainLayout {
  activePage?: string;
  children: ReactNode;
}

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
      <Header>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
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
        </div>
      </Header>
      <div
        style={{
          height: "calc(100vh - 128px)",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {children}
      </div>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default MainLayout;
