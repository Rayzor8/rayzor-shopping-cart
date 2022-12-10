import Image from "next/image";
import React from "react";
import { Stack } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import RemoveButton from "../Buttons/RemoveButton";

type OffcanvasNavItemProps = {
  id: number;
  quantity: number;
};
const OffcanvasNavItem = ({ id, quantity }: OffcanvasNavItemProps) => {
  const { products, cartQuantity } = useCartContext();
  const findItem = products.find((product) => product.id === id);
  console.log(findItem);
  if (!findItem) return null;

  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="bg-white p-3 rounded-3 shadow-lg"
    >
      <Image
        src={findItem?.image}
        alt="Cart-image"
        width={180}
        height={140}
        style={{ objectFit: "cover" }}
        priority={true}
      />

      <div className="me-auto">
        <div className="lh-1">
          <small>{findItem.title}</small>
          <p className="fw-bold mt-3">
            ${findItem.price} x {quantity}{" "}
          </p>
          <p className="fw-bold">Total : ${findItem.price * cartQuantity}</p>
        </div>
      </div>
      <RemoveButton id={id} />
    </Stack>
  );
};

export default OffcanvasNavItem;
