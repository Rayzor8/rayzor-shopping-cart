import React from 'react'
import { Button } from 'react-bootstrap'
import { BiTrash } from 'react-icons/bi'
import { useCartContext } from '../../context/CartContext'

type RemoveButtonProps = {
    id:number
}

const RemoveButton = ({id}:RemoveButtonProps) => {
    const { removeCartItem } = useCartContext();
  return (
    <Button variant="outline-danger" onClick={()=>removeCartItem(id)}>
    <BiTrash className="text-dark fw-bold fs-5" />
  </Button>
  )
}

export default RemoveButton