import React from "react";
import { Button } from "react-bootstrap";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
import { useCartContext } from "../../context/CartContext";

type inputAddToCartProps = {
  id: number;
  quantity: number;
};

const InputsCartQuantity = ({ id, quantity }: inputAddToCartProps) => {
  console.log(quantity)
  const { increaseQuantity } = useCartContext();
  return (
    <div className="d-flex justify-content-center gap-2 align-items-center">
      <Button variant="dark" onClick={() => increaseQuantity(id)}>
        <FaPlus className="text-info" />
      </Button>
      <span className="fw-bold fs-5 d-block rounded-3">
        {quantity}
      </span>
      <Button variant="dark">
        <FaMinus className="text-info" />
      </Button>
      <Button variant="outline-danger">
        <BiTrash className="text-dark fw-bold fs-5" />
      </Button>
    </div>
  );
};

export default InputsCartQuantity;
