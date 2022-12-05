import React from "react";
import { Col, Row, Stack } from "react-bootstrap";
import dynamic from "next/dynamic";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { SearchForm } from "../components/Forms";
import { SelectCategory } from "../components/Dropdowns";

const DynamicStoreItem = dynamic(
  () => import("../components/StorePages/StoreItem"),
  {
    suspense: true,
  }
);

export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

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
  return (
    <Stack gap={4}>
      <Stack gap={3} className="w-50" direction="horizontal">
        <SearchForm />
        <SelectCategory />
      </Stack>

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
