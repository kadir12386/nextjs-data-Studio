import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Box
        color="white"
        bgColor={"rgb(22, 29, 46)"}
        p={"40px"}
        pb={"0px"}
        mt="50px"
        w={"100%"}
      >
        <Grid
          templateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(5, 1fr)",
          ]}
          gap={2}
          p={[
            "20px 7px 20px",
            "20px 7px 20px",
            "20px 10px 20px",
            "20px 80px 20px",
          ]}
          mb="50px"
        >
          {/* Grid 1 */}
          <GridItem w="100%">
            <div
              style={{ position: "relative", width: "150px", height: "59px" }}
            >
              <Image
                src="/footer_img.png"
                objectFit="cover"
                layout="responsive"
                width={150}
                height={59}
              />
            </div>
            {/* in chakra */}
            {/* <Image src="/footer_img.png" width={150} height={59} alt="logo" /> */}
            {/* <Image
              w={["150px", "150px", "150px", "150px"]}
              h={["59px"]}
              objectFit="cover"
              src="/footer_img.png"
              alt="logo"
            /> */}
          </GridItem>
          {/* Grid 2 */}
          <GridItem w="100%">
            <Heading
              as="h5"
              size="sm"
              pb={"15px"}
              color={"##cac8c8"}
              pt={["20px"]}
            >
              About
            </Heading>
            <UnorderedList color={"#b5b5b5"}>
              <ListItem pt={"10px"}>GoX.ai</ListItem>
              <ListItem pt={"10px"}>Two Minute Reports</ListItem>
              <ListItem pt={"10px"}>About us</ListItem>
            </UnorderedList>
          </GridItem>
          {/* Grid 3 */}
          <GridItem w="100%">
            <Heading
              as="h5"
              size="sm"
              pb={["6px", "6px", "10px", "15px"]}
              color={"##cac8c8"}
              pt={["20px"]}
            >
              Other Products
            </Heading>
            <UnorderedList color={"#b5b5b5"}>
              <ListItem pt={"10px"}>
                Two Minute Reports for Google Sheets
              </ListItem>
            </UnorderedList>
          </GridItem>
          {/* Grid 4 */}
          <GridItem w="100%">
            <Heading
              as="h5"
              size="sm"
              color={"##cac8c8"}
              pb={["6px", "6px", "10px", "15px"]}
              pt={["20px"]}
            >
              Resources
            </Heading>
            <UnorderedList color={"#b5b5b5"}>
              <ListItem pt={"10px"}> Pricing</ListItem>
              <ListItem pt={"10px"}> Knowledge Base </ListItem>
              <ListItem pt={"10px"}> Templates</ListItem>
              <ListItem pt={"10px"}> Supermetrics vs Portermetrics</ListItem>
            </UnorderedList>
          </GridItem>
          {/* Grid 5 */}
          <GridItem w="100%">
            <Heading
              as="h5"
              size="sm"
              color={"##cac8c8"}
              pb={["6px", "6px", "10px", "15px"]}
              pt={["20px"]}
            >
              Company
            </Heading>
            <UnorderedList color={"#b5b5b5"}>
              <ListItem pt={"10px"}> Affiliate program</ListItem>
              <ListItem pt={"10px"}> Supermetrics alternative </ListItem>
              <ListItem pt={"10px"}> Terms of Service</ListItem>
              <ListItem pt={"10px"}> Privacy Policy</ListItem>
              <ListItem pt={"10px"}> Data Security </ListItem>
              <ListItem pt={"10px"}> Support Ticket </ListItem>
            </UnorderedList>
          </GridItem>
        </Grid>
        <Box
          m={[
            "20px 20px 0 20px",
            "20px 20px 0 20px",
            "20px 20px 0 20px",
            "20px 80px 0 80px",
          ]}
        >
          <Divider opacity={"0.1"} />

          <Box>
            <Text
              fontSize="sm"
              color={"#f0f0f1"}
              p={"25px 0px"}
              textAlign={["center", "center", "left", "left"]}
            >
              © 2022 GoX.ai - All Rights Reserved
            </Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
