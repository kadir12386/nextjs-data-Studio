import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";
// import Image from "next/image";
import React from "react";
import Link from "next/link";
const Products = () => {
  return (
    <div>
      <Box>
        <Heading as="h4" fontSize="24px" mb={["30px"]}>
          Our Products
        </Heading>
        <Flex
          justify={"space-evenly"}
          direction={["column", "column", "row", "row"]}
        >
          {/* Box1 */}
          <Box>
            <div
              style={{ position: "relative", width: "150px", height: "59px" }}
            >
              <Image
                src="/logo2.png"
                objectFit="cover"
                layout="responsive"
                width={150}
                height={59}
              />
            </div>
            {/* try */}
            {/* <Image width={150} height={60} alt="logo" src="/logo2.png" /> */}
            {/* <Image
              w={["150px", "150px", "150px", "150px"]}
              h={["59px"]}
              objectFit="cover"
              src="/logo2.png"
              alt="logo"
            /> */}
          </Box>
          <Flex
            direction={"column"}
            pl={"20px"}
            pt={["10px", "10px", "0px", "0px"]}
          >
            <Link href="/">
              <Heading as="h4" size="md">
                Google Sheets
              </Heading>
            </Link>

            <Text>See all report templates for Google Sheets</Text>
          </Flex>
          {/* Box2 */}
          <Box pt={["30px", "30px", "0px", "0px"]}>
            <div
              style={{ position: "relative", width: "150px", height: "59px" }}
            >
              <Image
                src="/logo3.png"
                objectFit="cover"
                layout="responsive"
                width={150}
                height={59}
              />
            </div>
            {/* <Image width={150} height={60} alt="logo" src="/logo3.png" /> */}
            {/* <Image
              w={["150px", "150px", "150px", "150px"]}
              h={["59px"]}
              objectFit="cover"
              src="/logo3.png"
              alt="logo"
            /> */}
          </Box>
          <Flex
            direction={"column"}
            pl={"20px"}
            pt={["10px", "10px", "0px", "0px"]}
          >
            <Link href="/">
              <Heading as="h4" size="md">
                Google Data Studio
              </Heading>
            </Link>

            <Text> See all report templates for Google Data Studio</Text>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
};

export default Products;
