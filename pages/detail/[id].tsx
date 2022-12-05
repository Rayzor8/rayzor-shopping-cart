import Link from "next/link";
import React from "react";
import { Products } from "../store";
import Image from "next/image";

interface Params {
  params: {
    id: string;
  };
}

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
  return {
    props: {
      product,
    },
  };
};

const Details = ({ product }: { product: Products }) => {
  // console.log(product);
  return (
    <div>
      STORE DETAIL
      <Link href="/store" className="btn btn-dark">
        <span className="text-info">Back</span>
      </Link>
      <Image
        src={product.image}
        alt="picture of product"
        width={400}
        height={400}
        priority={true}
      />
    </div>
  );
};

export default Details;
