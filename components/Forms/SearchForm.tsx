import React, {
  Dispatch,
  SetStateAction,
  KeyboardEvent,
  useState,
} from "react";
import Form from "react-bootstrap/Form";
import { useCartContext } from "../../context/CartContext";
import { Products } from "../../types/storeTypes";

type SearchFormProps = {
  productsData: Products[];
  setProductsData: Dispatch<SetStateAction<Products[]>>;
};

const SearchForm = ({ setProductsData, productsData }: SearchFormProps) => {
  const { products, selectedCategory } = useCartContext();

  const selectedProducts =
    selectedCategory &&
    products.filter((el) => el.category === selectedCategory);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase();
    const searchValue = productsData.filter((product) => {
      return (
        product.title.toLowerCase().includes(inputValue) ||
        product.category.toLowerCase().includes(inputValue)
      );
    });
    setProductsData(searchValue);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Backspace") {
      if (selectedCategory) {
        setProductsData(selectedProducts as any);
      } else {
        setProductsData(products);
      }
    }
  };

  return (
    <>
      <Form.Control
        type="text"
        placeholder="Search name product here"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchForm;
