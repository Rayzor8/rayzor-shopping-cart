import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Products } from "../../types/storeTypes";
import { FcRating } from "react-icons/fc";
import { BiTransfer } from "react-icons/bi";
import { Col, Row, Stack } from "react-bootstrap";

interface Params {
  params: {
    id: string;
  };
}

type PageProps = {
  pageProps: {
    product: Products;
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(process.env.DATA_URL as string);
  const products: Products[] = await res.json();

  const getProductId = products.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths: getProductId,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const res = await fetch(`${process.env.DATA_URL}${params.id}`);
  const product: Products = await res.json();
  console.log(product);
  return {
    props: {
      product,
    },
  };
};

const Details = (props: PageProps) => {
  const { pageProps } = props;
  const { product } = pageProps;
  console.log(product);
  return (
    <Stack gap={4}>
      <h1>STORE DETAIL</h1>

      <Row
        xs={1}
        lg={2}
        xl={4}
        className="g-4 py-5 bg-white  rounded-2 shadow-lg d-flex justify-content-center"
      >
        <Col xl={4}>
          <Image
            src={product.image}
            alt="picture of product"
            width={400}
            height={340}
            priority={true}
          />
        </Col>
        <Col xl={4}>
          <Stack gap={4}>
            <h2 className="fs-4 fw-bold">{product.category.toUpperCase()}</h2>
            <Stack direction="horizontal" gap={3}>
              <p className="fw-bold fs-5">
                <FcRating /> {product.rating.rate}
              </p>
              <p className="fw-bold fs-5">
                <BiTransfer /> {product.rating.count}
              </p>
            </Stack>
            <h3 className="fs-5">{product.title}</h3>
            <h3 className="fs-1 fw-bold"> ${product.price}</h3>
            <p>{product.description}.</p>
          </Stack>
        </Col>
        <Col xl={3} className="bg-danger">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed a
            veniam eum magnam beatae velit exercitationem iure fugit optio!
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link href="/store" className="btn btn-dark">
            <span className="text-info">Back</span>
          </Link>
        </Col>
      </Row>
    </Stack>
  );
};

export default Details;
