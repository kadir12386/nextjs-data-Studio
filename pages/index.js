import styles from "../styles/Home.module.css";
// import {
//   Box,
//   Container,
//   Flex,
//   Heading,
//   SimpleGrid,
//   Stack,
//   Text,
// } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
// import Card from "../components/Card";
// import { dataList } from "../components/data";
// import Products from "../components/Products";
import dynamic from "next/dynamic";
import MainPageContent from "../components/MainPageContent";
// import MainPage from "../components/MainPage";

export const config = {
  unstable_runtimeJs: false,
};

const MainPage = dynamic(() => import("../components/MainPage"));
export default function Home() {
  return (
    <div className={styles.container}>
      <MainPageContent />
      <MainPage />
    </div>
  );
}
