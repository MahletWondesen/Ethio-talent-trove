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
  {
    id: 2.1,
    title: "Our News",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "About Us",
    newTab: false,
    path: "/about",
  },
  // {
  //   id: 3,
  //   title: "About Us",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "Blog Grid",
  //       newTab: false,
  //       path: "/blog",
  //     },
  //     {
  //       id: 34,
  //       title: "Sign In",
  //       newTab: false,
  //       path: "/auth/signin",
  //     },
  //     {
  //       id: 35,
  //       title: "Sign Up",
  //       newTab: false,
  //       path: "/auth/signup",
  //     },
  //     {
  //       id: 35,
  //       title: "Docs",
  //       newTab: false,
  //       path: "/docs",
  //     },
  //     {
  //       id: 35.1,
  //       title: "Support",
  //       newTab: false,
  //       path: "/support",
  //     },
  //     {
  //       id: 36,
  //       title: "404",
  //       newTab: false,
  //       path: "/error",
  //     },
  //   ],
  // },

  {
    id: 4,
    title: "Contact Us",
    newTab: false,
    path: "/support",
  },
  {
    id: 5,
    title: "FAQs",
    newTab: false,
    path: "/faq",
  },
];

export default menuData;
