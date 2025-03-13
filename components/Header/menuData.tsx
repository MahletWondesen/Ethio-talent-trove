import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Our Services",
    newTab: false,
    path: "/service",
  },
  // {
  //   id: 2.1,
  //   title: "Our News",
  //   newTab: false,
  //   path: "/blog",
  // },
  // {
  //   id: 2.3,
  //   title: "About Us",
  //   newTab: false,
  //   path: "/about",
  // },
  {
    id: 2.4,
    title: "Careers",
    newTab: false,
    path: "/Careers",
  },
  {
    id: 5,
    title: "FAQs",
    newTab: false,
    path: "/faq",
  },
  {
    id: 3,
    title: "About Us",
    newTab: false,
    submenu: [
      {
        id: 32,
        title: "About Us",
        newTab: false,
        path: "/about",
      },
      {
        id: 31,
        title: "Our News",
        newTab: false,
        path: "/blog",
      },
      {
        id: 33,
        title: "Contact Us",
        newTab: false,
        path: "/support",
      },
    ],
  },

  // {
  //   id: 4,
  //   title: "Contact Us",
  //   newTab: false,
  //   path: "/support",
  // },
];

export default menuData;
