import React from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import twLogo from "../../public/img/skills/tailwind.png";
import tsLogo from "../../public/img/skills/ts.png";
import bsLogo from "../../public/img/skills/bootstrap.png";
import reactLogo from "../../public/img/skills/react.jpg";
import reduxLogo from "../../public/img/skills/redux.png";
import nextLogo from "../../public/img/skills/next.jpg";
import gitLogo from "../../public/img/skills/git.png";
import mgDBLogo from "../../public/img/skills/mongodb.png";
import cssLogo from "../../public/img/skills/css.png";
import nodeLogo from '../../public/img/skills/nodejs.jpg';
import Image from "next/image";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Skills = () => {
  const logos = [
    { img: reactLogo, name: "ReactJS" },
    { img: cssLogo, name: "CSS" },
    { img: bsLogo, name: "Bootstrap" },
    { img: twLogo, name: "TailwindCSS" },
    { img: nextLogo, name: "NextJS" },
    { img: reduxLogo, name: "ReduxJS" },
    { img: tsLogo, name: "TypeScript" },
    { img: gitLogo, name: "Git" },
    { img: nodeLogo, name: "NodeJS" },
    { img: mgDBLogo, name: "MongoDB" },
  ];

  return (
    <Row>
      <h1 className="banner-title">Dev Skills</h1>

      <Col xs={12} className="mt-5">
        <Carousel
          responsive={responsive}
          infinite={true}
          ssr={true}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="d-flex justify-content-center align-items-center flex-column"
            >
              <Image src={logo.img} alt="logo" width="250" height="250" className="rounded "/>
              <h1 className="banner-title fs-1">{logo.name}</h1>
            </div>
          ))}
        </Carousel>
        ;
      </Col>
    </Row>
  );
};

export default Skills;
