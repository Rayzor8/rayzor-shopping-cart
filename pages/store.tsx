import React, { useState } from "react";
import { Col, Row, Stack } from "react-bootstrap";
import dynamic from "next/dynamic";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { SearchForm } from "../components/Forms";
import { SelectCategory } from "../components/Dropdowns";
import { Products } from "../types/storeTypes";


const DynamicStoreItem = dynamic(
  () => import("../components/StorePages/StoreItem"),
  {
    suspense: true,
  }
);

export const getStaticProps: GetStaticProps<{
  products: Products[];
}> = async () => {
  const res = await fetch(process.env.DATA_URL as string);
  const products: Products[] = await res.json();

  return {
    props: {
      products,
    },
  };
};
const Store = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [productsData, setProductsData] = useState(products);
  return (
    <Stack gap={4}>
      <Row className="g-3">
        <Col xs={12} lg={6}>
          <SearchForm />
        </Col>
        <Col xs={12} lg={6}>
          <SelectCategory />
        </Col>
      </Row>

      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {products.map((product) => {
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
