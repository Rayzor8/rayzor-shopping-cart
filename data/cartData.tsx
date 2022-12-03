type CartData = {
  weaponName: string;
  weaponType: string;
  weaponMiniImg: string;
  weaponLargeImg: string;
  weaponPricesList: PriceList[];
};

type PriceList = {
  condition: string;
  price: string;
};

const data: CartData[] = [
  {
    weaponName: "AK47",
    weaponType: "rifle",
    weaponMiniImg: "1.jpg",
    weaponLargeImg: "2.jpg",
    weaponPricesList: [
      { condition: "factory new", price: "$300" },
      { condition: "minimal wear", price: "$100" },
      { condition: "battle scarred", price: "$50" },
    ],
  },
  {
    weaponName: "AK47",
    weaponType: "rifle",
    weaponMiniImg: "1.jpg",
    weaponLargeImg: "2.jpg",
    weaponPricesList: [
      { condition: "factory new", price: "$300" },
      { condition: "minimal wear", price: "$100" },
      { condition: "battle scarred", price: "$50" },
    ],
  },
  {
    weaponName: "AK47",
    weaponType: "rifle",
    weaponMiniImg: "1.jpg",
    weaponLargeImg: "2.jpg",
    weaponPricesList: [
      { condition: "factory new", price: "$300" },
      { condition: "minimal wear", price: "$100" },
      { condition: "battle scarred", price: "$50" },
    ],
  },
];

export default data;
