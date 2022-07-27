import styles from "../styles/Home.module.css";
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
import Card from "../components/Card";
import { dataList } from "../components/data";
import Products from "../components/Products";

export default function Home({ dataList }) {
  return (
    <div className={styles.container}>
      <Stack spacing={3} px={["20px", "30px", "30px", "140px"]} mt="20px">
        <Text
          fontSize={["30px", "30px", "30px", "40px"]}
          fontWeight={700}
          color="#363636"
          lineHeight={"45px"}
        >
          20+ Google Data Studio Report Templates every Marketer Needs
        </Text>
        <Text color={"#7a7a7a"}>By Two Minute Reports - February 25, 2022</Text>
        <Text py="13px">
          We have carefully crafted over 20+ Google Data Studio report templates
          for Marketers to create instant reports and dashboards. Best of all
          &#x2D; no code is required to use any of our Template. And if you are
          looking to create a report or dashbaord for your Mobile, Database,
          Advertising (PPC), Web Analytics, SEO, E-Commerce, Other sources, and
          Social Media activities, you have come to the right place. You don
          &apos; t need to use any proprietory tool, our templates work with
          Google Data Studio and stays with you.
        </Text>
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
            <Box pb={["20px"]} pt={"20px"}>
              <Products />
            </Box>
          </Box>
        </Flex>
        {/* Products */}
      </Stack>
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      dataList: dataList,
    },
  };
};
