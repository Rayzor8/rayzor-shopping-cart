import React, { useState ,SetStateAction} from "react";
import { Col, Row, Stack } from "react-bootstrap";
import dynamic from "next/dynamic";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { SearchForm } from "../components/Forms";
import { SelectCategory } from "../components/Dropdowns";
import { Products } from "../types/storeTypes";
import { useCartContext } from "../context/CartContext";

const DynamicStoreItem = dynamic(
  () => import("../components/StorePages/StoreItem"),
  {
    suspense: true,
  }
);

export const getStaticProps: GetStaticProps<{
  products: Products[];
}> = async () => {
  const resProducts = await fetch(process.env.DATA_URL as string);
  const products: Products[] = await resProducts.json();

  const resCategory = await fetch(`${process.env.DATA_URL}categories`);
  const categories = await resCategory.json();

  return {
    props: {
      products,
      categories,
    },
  };
};

const Store = () => {
  const { products } = useCartContext();
  const [productsData, setProductsData] = useState([...products]);

  return (
    <Stack gap={4}>
      <Row className="g-3">
        <Col xs={12} lg={6}>
          <SearchForm  productsData={productsData} setProductsData={setProductsData}/>
        </Col>
        <Col xs={12} lg={6}>
          <SelectCategory
            setProductsData={setProductsData}
            productsData={productsData}
          />
        </Col>
      </Row>

      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {productsData.map((product) => {
          return (
            <Col key={product.id}>
              <React.Suspense fallback={`Loading...`}>
                <DynamicStoreItem {...product} />
              </React.Suspense>
            </Col>
          );
        })}
      </Row>
    </Stack>
  );
};

export default Store;
