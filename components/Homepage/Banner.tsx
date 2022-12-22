import React from "react";
import { Col, Row } from "react-bootstrap";
import bannerImg from "../../public/img/homesvg.svg";
import Image from "next/image";
import { PrimaryButton } from "../Buttons";
import { HiShoppingCart } from "react-icons/hi";

const Banner = () => {
  return (
    <Row className="row banner-container  d-flex align-items-center justify-content-center mb-5">
      <Col xs={12} xl={6}>
        <Image
          src={bannerImg}
          height="600"
          width="600"
          alt="illustration"
          className="img-banner"
        />
      </Col>
      <Col
        xs={12}
        xl={6}
        className=" d-flex justify-content-start align-items-start flex-column "
      >
        <h1 className="banner-title mt-lg-5">
          Welcome to my Portofolio Store App.
        </h1>
        <p className="mt-4 text-black fs-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
          distinctio, ipsam aut perspiciatis praesentium odit, animi totam nemo
          dolore provident minus magni vel reiciendis ducimus ipsa ut, veniam
          nostrum accusantium!
        </p>

        <p className="mt-4 text-black fs-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
          distinctio, ipsam aut perspiciatis praesentium odit, animi totam nemo
        </p>
        <PrimaryButton
          toPage="/store"
          icon={<HiShoppingCart className="text-info" />}
        >
          Go to Store
        </PrimaryButton>
      </Col>
    </Row>
  );
};

export default Banner;
