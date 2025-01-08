import React from "react";
import { Layout, Menu, Button } from "antd";
const { Header } = Layout;
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Button>
          <Link to={"/"}>Inicio</Link>
        </Button>
        <Button>
          <Link to={"/tienda"}>Productos</Link>
        </Button>
        <Button>
          <Link to={"/contacto"}>Contacto</Link>
        </Button>
      </Header>
    </Layout>
  );
};
