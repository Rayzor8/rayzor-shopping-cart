import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

type PaymentModalProps = {
  isOpenModalPayment: boolean;
};
const PaymentModal = ({ isOpenModalPayment }: PaymentModalProps) => {
  const { closeModalPayment } = useCartContext();
  return (
    <AnimatePresence>
      <Modal show={isOpenModalPayment} onHide={closeModalPayment}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          layout
        >
          <Modal.Header closeButton className="border-0 bg-info">
            <Modal.Title className="text-dark">
              Thank you for shopping here &#128521;
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark text-info overflow-hidden">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            excepturi laboriosam temporibus numquam optio, saepe vero
            consectetur fuga dolores aliquid quaerat culpa ipsa quis, itaque
            molestiae iusto voluptatibus recusandae. Quasi!
          </Modal.Body>
        </motion.div>
      </Modal>
    </AnimatePresence>
  );
};

export default PaymentModal;
