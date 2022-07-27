import React from "react";
import Images from "next/image";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Divider,
  Flex,
  Spacer,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";

import Link from "next/link";
import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <>
      <VStack>
        <Flex w="100%" p="20px 50px 4px 7px">
          <Box pl="16px">
            <Images src="/logo.webp" width="150" height="59" />
          </Box>
          <Spacer />

          <Flex display={["none", "none", "none", "flex"]}>
            <Link href="/">
              <Center w="100px">
                <Text>Home</Text>
              </Center>
            </Link>
            <Link href="/HomePage">
              <Center w="100px">
                <Text>Pricing</Text>
              </Center>
            </Link>
            <Link href="/">
              <Center w="170px">
                <Text>Knowledge Base</Text>
              </Center>
            </Link>
            <Link href="/">
              <Center w="110px">
                <Text>Templates</Text>
              </Center>
            </Link>

            <Link href="/">
              <Center w="120px">
                <Text>Whats New</Text>
              </Center>
            </Link>

            <Link href="/">
              <Center w="170px">
                <Text>
                  Other Products{" "}
                  <ChevronDownIcon
                    color="#4e4eda"
                    fontSize={"25px"}
                    ml={"2px"}
                    fontWeight={"900"}
                  />
                </Text>
              </Center>
            </Link>
            <Link href="/">
              <Center w="100px">
                <Text>Roadmap</Text>
              </Center>
            </Link>
            <Link href="/">
              <Center w="100px">
                <Text>Account</Text>
              </Center>
            </Link>
          </Flex>
        </Flex>
        <Divider orientation="horizontal" />
      </VStack>
      {/* 2nd header */}
      <Flex
        w="100%"
        px={["20px", "30px", "50px", "140px"]}
        mt="20px"
        direction={["column", "column", "row", "row"]}
        justify={["center", "center", "", ""]}
        alignItems={["center", "center", "", ""]}
      >
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#" color={"#4e4eda"} fontWeight={"500"}>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#" color={"#4e4eda"} fontWeight={"500"}>
              Templates
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#" fontWeight={"500"}>
              Google Data Studio
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Spacer />
        <Button
          colorScheme="#dbdbdb"
          variant="outline"
          fontWeight={"400"}
          mt={["20px", "20px", "0px", "0px"]}
        >
          Google Data Studio{" "}
          <ChevronDownIcon
            color="#4e4eda"
            fontSize={"28px"}
            ml={"5px"}
            fontWeight={"500"}
          />
        </Button>
      </Flex>
    </>
  );
};

export default Navbar;
