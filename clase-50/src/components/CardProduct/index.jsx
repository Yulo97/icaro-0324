import { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, Button, Card, Image } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export const CardProduct = () => {
  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products/4");
    setProduct(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Card
      title={product.title}
      hoverable
      style={{ width: 300 }}
      cover={<Image src={product.image} />}
      actions={[
        <Button size="large" type="default">
          Ver
        </Button>,
        <Button size="large" type="primary">
          Comprar
        </Button>,
      ]}
    >
      <Card.Meta
        avatar={
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVxOnTCDH5ek8czhRMvkKbPw-WEuEwZSyKtQ&s" />
        }
        title={product.title}
        description={product.description}
      />
    </Card>
  );
};
