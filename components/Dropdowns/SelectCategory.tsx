import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const SelectCategory = () => {
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={<span className="text-info fw-bold">Select Category</span>}
      variant="dark"
    >
      <Dropdown.Item href="#/action-1">All Products</Dropdown.Item>
      <Dropdown.Item href="#/action-1">Men clothing</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Jewelery</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Electronics</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Women clothing</Dropdown.Item>
    </DropdownButton>
  );
};

export default SelectCategory;
