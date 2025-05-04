import { use, useState } from "react";
import { CartContext } from "./contexts";
import { Link } from "@tanstack/react-router";
import { Button, Modal } from "antd";

export default function Header() {
  const [cart] = use(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false); // Закрытие модального окна
  };

  return (
    <nav>
      <Link to="/">
        <h1 className="logo">Padre Gino's Pizza</h1>
      </Link>
      <div className="nav-cart">
        <Button
          style={{
            all: "unset",
            display: "inline-flex",
            cursor: "pointer",
          }}
          disabled={cart.length === 0}
          onClick={showModal}
        >
          🛒<span className="nav-cart-number">{cart.length}</span>
        </Button>

        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="ok" onClick={handleOk}>
              OK
            </Button>,
          ]}
        >
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <span className="size">{item.size}</span> -
                <span className="type">{item.pizza.name}</span> -
                <span className="price">{item.price}</span>
              </li>
            ))}
          </ul>
        </Modal>
      </div>
    </nav>
  );
}
