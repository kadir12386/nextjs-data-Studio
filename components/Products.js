import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
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
            <Image width={150} height={60} alt="logo" src="/logo2.png" />
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
            <Image width={150} height={60} alt="logo" src="/logo3.png" />
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
