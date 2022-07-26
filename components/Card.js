import React from "react";
import {
  Box,
  Flex,
  AspectRatio,
  Text,
  Link,
  Button,
  Stack,
  Image,
  Divider,
} from "@chakra-ui/react";
// import Image from "next/image";

function Card(props) {
  const { card_img, summary, title, bottom_icon } = props;

  return (
    <Box
      bgColor="white"
      p="8px"
      m="0px"
      mb="40px"
      boxShadow={"0px 4px 20px rgb(188 188 188 / 50%)"}
      _hover={{ bg: "#eeeefb" }}
      _focus={{ boxShadow: "outline" }}
    >
      <Image
        width={["390px", "390px", "392px", "280px"]}
        height={["250px", "250px", "240px", "160px"]}
        src={card_img}
        alt="..."
        //   style={{ borderRadius: "3px", margin: "0", padding: "0" }}
      />

      <Stack>
        <Text
          fontWeight="bold"
          textTransform="capitalize"
          fontSize="17px"
          letterSpacing="wide"
          color="#4a4a4a"
          m="10px 0 30px 0"
        >
          {title}
        </Text>
        <Text
          my={1}
          display="block"
          fontSize="md"
          lineHeight="normal"
          fontWeight="normal"
          href="#"
          pb="14px"
        >
          {summary}
        </Text>
        <Divider />
        <Flex justifyContent="center" p="15px 0 15px 0">
          <Image
            width="30px"
            height="30px"
            src={bottom_icon}
            alt="..."
            //   style={{ borderRadius: "3px", margin: "0", padding: "0" }}
          />
        </Flex>
      </Stack>
    </Box>
  );
}

export default Card;
