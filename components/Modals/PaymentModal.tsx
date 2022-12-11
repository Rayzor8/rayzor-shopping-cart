import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";

type PaymentModalProps = {
  isOpenModalPayment: boolean;
};
const PaymentModal = ({ isOpenModalPayment }: PaymentModalProps) => {
  const { closeModalPayment } = useCartContext();
  return (
    <Modal show={isOpenModalPayment} onHide={closeModalPayment}>
      <Modal.Header closeButton className="border-0 bg-info rounded-2">
        <Modal.Title className="text-dark">Thank you bro !</Modal.Title>
      </Modal.Header>
    </Modal>
  );
};

export default PaymentModal;
