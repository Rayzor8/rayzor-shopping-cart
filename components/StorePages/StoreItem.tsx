import React from "react";
import { Card, Stack } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { AddToCartBtn, InputsCartQuantity } from "../Buttons";
import { Products } from "../../types/storeTypes";
import { useCartContext } from "../../context/CartContext";

const StoreItem = (props: Products) => {
  const { getItemQuantity } = useCartContext();
  const { id } = props;
  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100 shadow-lg border-0">
      <Card.Body className="d-flex flex-column justify-content-end align-items-center g-2 text-center">
        <Card.Img
          src={props.image}
          style={{ objectFit: "cover", width: "auto", height: 350 }}
          alt="weapon-image"
          as={Image}
          width={400}
          height={250}
          className="mb-2 w-100"
          priority={true}
        />
        <Card.Title className="text-capitalize text-black">
          {props.category}
        </Card.Title>
        <Card.Text className="fw-light">{props.title}</Card.Text>

        <Stack direction="horizontal" gap={3} className="mx-auto">
          {quantity === 0 ? (
            <AddToCartBtn id={id} />
          ) : (
            <InputsCartQuantity id={id} quantity={quantity} />
          )}

          <Link href={`/detail/${props.id}`} className="btn btn-dark">
            <span className="text-info fw-bold">Details</span>
          </Link>
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
