import { useState } from "react";
import { Layout, Menu, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons"; // Ícono del carrito
const { Header } = Layout;
import { Sidebar } from "../Sidebar";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleMenuClick = ({ key }) => {
    if (key === "1") {
      navigate("/");
    } else if (key === "2") {
      navigate("/tienda");
    } else if (key === "3") {
      navigate("/contacto");
    }
  };

  return (
    <>
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              color: "white",
              fontSize: "20px",
              marginRight: "20px",
              flex: "0 0 auto",
            }}
          >
            Mi Logo
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            onClick={handleMenuClick}
            items={[
              { key: "1", label: "Inicio" },
              { key: "2", label: "Tienda" },
              { key: "3", label: "Contacto" },
            ]}
            style={{ flex: "1 0 auto" }}
          />
          <Button
            type="primary"
            icon={<ShoppingCartOutlined />}
            size="large"
            onClick={() => setOpen(true)}
            style={{
              marginLeft: "auto", // Empuja el botón hacia el final
            }}
          >
            Carrito
          </Button>
        </Header>
      </Layout>

      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};
