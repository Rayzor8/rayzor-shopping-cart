import { GetStaticProps } from "next";
import React, { Dispatch, SetStateAction } from "react";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useCartContext } from "../../context/CartContext";
import { Products } from "../../types/storeTypes";
import { capitalizedWord } from "../../utilities";

type SelectCategoryProps = {
  productsData: Products[];
  setProductsData: Dispatch<SetStateAction<Products[]>>;
};

const SelectCategory = ({ setProductsData }: SelectCategoryProps) => {
  const { categories, products, setSelectedCategory } = useCartContext();

  const filterByCategories = (value: string) => {
    setProductsData(products.filter((product) => product.category === value));
    setSelectedCategory(value);
  };

  const handleAllProducts = () => {
    setProductsData(products);
    setSelectedCategory("");
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={<span className="text-info fw-bold">Select Category</span>}
      variant="dark"
    >
      <Dropdown.Item onClick={handleAllProducts}>All Products</Dropdown.Item>
      {categories.map((category, index) => (
        <Dropdown.Item key={index} onClick={() => filterByCategories(category)}>
          {capitalizedWord(category)}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default SelectCategory;
