import React from "react";
import { Button, Stack } from "react-bootstrap";
import { HiShoppingCart } from "react-icons/hi";
const CardButton = () => {
  return (
    <Button variant="dark">
      <Stack direction="horizontal" gap={2}>
        <HiShoppingCart className="text-info"/>
        <span className="text-info fw-bold">Add to cart</span>
      </Stack>
    </Button>
  );
};

export default CardButton;
