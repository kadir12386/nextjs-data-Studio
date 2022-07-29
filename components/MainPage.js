import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Card from "./Card";
import { dataList } from "./data";

import Products from "./Products";

const MainPage = () => {
  return (
    <div>
      <Stack spacing={3} px={["20px", "30px", "30px", "140px"]} mt="20px">
        {/* Popular Templates*/}
        <Flex
          spacing="24px"
          pt={["20px", "20px", "50px", "50px"]}
          direction={["column", "column", "column", "row"]}
        >
          <Box
            w={["100%", "100%", "100%", "20%"]}
            pt={["0px", "0px", "20px", "30px"]}
          >
            <Heading
              as="h4"
              size="md"
              mb={"20px"}
              pt={["10px", "10px", "30px", "40px"]}
            >
              Categories
            </Heading>

            <Text fontSize="17px" fontWeight={600} pt="8px" color={"#4a4a4a;"}>
              <ChevronDownIcon
                color="#4e4eda"
                fontSize={"20px"}
                ml={"5px"}
                mr={"15px"}
                fontWeight={"500"}
              />{" "}
              Mobile
            </Text>

            <Text fontSize="17px" fontWeight={600} pt="10px" color={"#4a4a4a;"}>
              <ChevronDownIcon
                color="#4e4eda"
                fontSize={"20px"}
                ml={"5px"}
                mr={"15px"}
                fontWeight={"500"}
              />{" "}
              Advertising (PPC)
            </Text>
            <Text fontSize="17px" fontWeight={600} pt="10px" color={"#4a4a4a;"}>
              <ChevronDownIcon
                color="#4e4eda"
                fontSize={"20px"}
                ml={"5px"}
                mr={"15px"}
                fontWeight={"500"}
              />{" "}
              Web Analytics
            </Text>
            <Text fontSize="17px" fontWeight={600} pt="10px" color={"#4a4a4a;"}>
              <ChevronDownIcon
                color="#4e4eda"
                fontSize={"20px"}
                ml={"5px"}
                mr={"15px"}
                fontWeight={"500"}
              />{" "}
              SEO
            </Text>
            <Text fontSize="17px" fontWeight={600} pt="10px" color={"#4a4a4a;"}>
              <ChevronDownIcon
                color="#4e4eda"
                fontSize={"20px"}
                ml={"5px"}
                mr={"15px"}
                fontWeight={"500"}
              />{" "}
              E-Commerce
            </Text>
            <Text fontSize="17px" fontWeight={600} pt="10px" color={"#4a4a4a;"}>
              <ChevronDownIcon
                color="#4e4eda"
                fontSize={"20px"}
                ml={"5px"}
                mr={"15px"}
                fontWeight={"500"}
              />{" "}
              Social Media
            </Text>
          </Box>

          <Box
            w={["100%", "100%", "100%", "80%"]}
            pt={["10px", "10px", "30px", "40px"]}
          >
            <Heading as="h4" fontSize="24px">
              Popular Templates
            </Heading>

            <Container maxW="80rem" centerContent p={"0px"} pt="40px">
              <SimpleGrid
                columns={[1, 1, 2, 3]}
                spacingX={["0px", "20px", "20px", "20px"]}
              >
                {dataList.map(function (data, key) {
                  const { id, card_img, summary, title, bottom_icon } = data;
                  return (
                    <Card
                      key={key}
                      id={id}
                      card_img={card_img}
                      title={title}
                      summary={summary}
                      bottom_icon={bottom_icon}
                    />
                  );
                })}
              </SimpleGrid>
            </Container>
            <Box pb={["20px"]} pt={"20px"} pl={"0px"}>
              <Products />
            </Box>
          </Box>
        </Flex>
        {/* Products */}
      </Stack>
    </div>
  );
};

export default MainPage;

export const getStaticProps = async () => {
  return {
    props: {
      dataList: dataList,
    },
  };
};
