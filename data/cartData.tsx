import { StaticImageData } from "next/image";
import { fade, autotronic, gammaDoppler } from "./imagesData/knifes";
import {
  bloodSport,
  fuelInjector,
  legionOfAnubis,
  oniTaiji,
  theEmpress,
} from "./imagesData/rifles";

type CartData = {
  weaponNames: WeaponNames[];
  weaponType: string;
};

type WeaponNames = {
  name: string;
  img: StaticImageData;
  price: number;
  // imgLarge:StaticImageData;
};

const data: CartData[] = [
  {
    weaponType: "Knife",
    weaponNames: [
      {
        name: "Fade",
        img: fade,
        price: 200,
      },
      {
        name: "Autotronic",
        img: autotronic,
        price: 300,
      },
      {
        name: "GammaDoppler",
        img: gammaDoppler,
        price: 100,
      },
    ],
  },
  {
    weaponType: "Rifle",
    weaponNames: [
      {
        name: "Blood sport",
        img: bloodSport,
        price: 50,
      },
      {
        name: "Fuel injector",
        img: fuelInjector,
        price: 100,
      },
      {
        name: "Legion of anubis",
        img: legionOfAnubis,
        price: 70,
      },
      {
        name: "Oni tai ji",
        img: oniTaiji,
        price: 90,
      },
      {
        name: "The empress",
        img: theEmpress,
        price: 100,
      },
    ],
  },
];

export default data;
