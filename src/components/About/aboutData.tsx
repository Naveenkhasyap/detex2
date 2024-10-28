import { Blog } from "@/types/blog";

const aboutData: Blog[] = [
  {
    id: 1,
    title: "Krishna Teja",
    paragraph: "Cheif Technology Officer",
    image: "/images/about/KT.png",
    author: {
      name: "Krishna Teja",
      image: "/images/about/KT.png",
      designation: "Cofounder & CTO",
    },
    tags: ["CTO"],
    publishDate: "2024",
  },
  {
    id: 1,
    title: "Bharat T",
    paragraph: "Cheif Executive Officer",
    image: "/images/about/BT.png",
    author: {
      name: "Bharat T",
      image: "/images/about/BT.png",
      designation: "Cofounder & CEO",
    },
    tags: ["CEO"],
    publishDate: "2024",
  },
  {
    id: 1,
    title: "Prateek Gupta",
    paragraph: "VP & Business Head",
    image: "/images/about/PG.png",
    author: {
      name: "Krishna Teja",
      image: "/images/about/PG.png",
      designation: "VP & Business Head",
    },
    tags: ["Business"],
    publishDate: "2024",
  },
];
export default aboutData;
