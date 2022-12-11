import React from "react";
import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import { Products } from "../../types/storeTypes";
import OffcanvasNavItem from "./OffcanvasNavItem";
import { HiShoppingCart } from "react-icons/hi";
import { BiSad } from "react-icons/bi";
type OffcanvasNavProps = {
  isOpenNavCart: boolean;
};

const OffcanvasNav = ({ isOpenNavCart }: OffcanvasNavProps) => {
  const { closeNavCart, cartItems, products, openModalPayment } =
    useCartContext();

  const renderItem =
    cartItems.length > 0 ? (
      cartItems.map((item) => <OffcanvasNavItem key={item.id} {...item} />)
    ) : (
      <p className="fw-bold">
        <BiSad className="fs-4" /> Empty Cart...
      </p>
    );
  
  const getTotalPrice = () => {
    return cartItems.reduce((total, cartItem) => {
      const findItem = products?.find((product) => product.id === cartItem.id);
      return total + (findItem?.price || 0) * cartItem.quantity;
    }, 0);
  };

  return (
    <Offcanvas show={isOpenNavCart} onHide={closeNavCart} placement="end">
      <Offcanvas.Header closeButton className="bg-white shadow-sm">
        <Offcanvas.Title className="fw-bold fs-6">
          <Stack gap={2} direction="horizontal">
            <HiShoppingCart className="fs-4" />
            <span>Your Cart</span>
          </Stack>
        </Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className="g-3">
        <Stack gap={3}>
          {renderItem}
          <span className="ms-auto fs-4 fw-bold text-info bg-dark px-2 py-2 rounded">
            Total : $ {getTotalPrice()}
          </span>
          {getTotalPrice() ? (
            <Button onClick={openModalPayment} className="w-max">Purchase</Button>
          ) : (
            ""
          )}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffcanvasNav;
