import React from "react";
import { Button, Stack } from "react-bootstrap";
import { HiShoppingCart } from "react-icons/hi";
import { useCartContext } from "../../context/CartContext";

type AddToCartBtnProps = {
  id: number
}

const AddToCartBtntsx = ({id}:AddToCartBtnProps) => {
  const {increaseQuantity} = useCartContext()
  return (
    <Button variant="dark">
      <Stack direction="horizontal" gap={2}>
        <HiShoppingCart className="text-info"/>
        <span className="text-info fw-bold" onClick={()=>increaseQuantity(id)}>Add to cart</span>
      </Stack>
    </Button>
  );
};

export default AddToCartBtntsx;
