import React from "react";
import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
const homePage = () => {
  return (
    <div>
      <Stack spacing={3} px={"140px"} mt="20px">
        <Text
          fontSize="40px"
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
          &apos; no code is required to use any of our Template. And if you are
          looking to create a report or dashbaord for your Mobile, Database,
          Advertising (PPC), Web Analytics, SEO, E-Commerce, Other sources, and
          Social Media activities, you have come to the right place. You don't
          need to use any proprietory tool, our templates work with Google Data
          Studio and stays with you.
        </Text>
        {/* Popular Templates*/}
        Categories Mobile Advertising (PPC) Web Analytics SEO E-Commerce Social
        Media
        <HStack spacing="24px" pt="50px">
          <Box w="20%" h="10" pt="30px">
            <Heading as="h4" size="md" mb={"20px"}>
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
          <Box w="80%" h="10" bg="teal.500">
            <Heading as="h4" fontSize="24px">
              Popular Templates
            </Heading>
          </Box>
        </HStack>
      </Stack>
    </div>
  );
};

export default homePage;
