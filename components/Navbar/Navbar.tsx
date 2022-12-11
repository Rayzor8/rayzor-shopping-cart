import Link from "next/link";
import React from "react";
import { Navbar as NavbarBs, Nav, Container, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { HiShoppingCart } from "react-icons/hi";
import { useCartContext } from "../../context/CartContext";

const Navbar = () => {
  const router = useRouter();
  const {openNavCart,cartQuantity} = useCartContext()

  const activeNav = (href: string) =>
    router.pathname == href ? "active text-info" : "";

  return (
    <NavbarBs bg="light" variant="light" className="shadow-sm mb-4">
      <Container>
        <NavbarBs.Brand className="px-3 bg-dark rounded-pill text-info">
          Rayzor_Store
        </NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          <Nav.Link as={Link} href="/">
            <b className={`p-2 ${activeNav("/")}`}>Home</b>
          </Nav.Link>

          <Nav.Link href="/store" as={Link}>
            <b className={`p-2 ${activeNav("/store")}`}>Store</b>
          </Nav.Link>
        </Nav>
        
        <Button
          variant="dark"
          className="rounded-pill position-relative bottom-0"
          title="Your cart"
          size="lg"
          onClick={openNavCart}
        >
          <HiShoppingCart />
          <div
            id="cart-count"
            className="position-absolute bg-info rounded-circle"
          >
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
