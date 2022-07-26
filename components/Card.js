import React from "react";
import { Box, Flex, Text, Stack, Image, Divider } from "@chakra-ui/react";
import Link from "next/link";
import ContentPage from "./ContentPage";
// import Image from "next/image";

function Card(props) {
  const { key, id, card_img, summary, title, bottom_icon } = props;
  console.log(props);
  return (
    <Link key={key} href={"/users/" + props.id}>
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
        />

        <Stack>
          <Text
            fontWeight="bold"
            textTransform="capitalize"
            fontSize="17px"
            letterSpacing="wide"
            color="#4a4a4a"
            m="12px 0 20px 0"
            height={["30px", "30px", "55px", "55px"]}
          >
            {title}
          </Text>

          <Flex height={["30px", "50px", "50px", "100px"]}>
            <Text
              my={1}
              display="block"
              fontSize="md"
              lineHeight="22px"
              fontWeight="normal"
              href="#"
              pb="0px"
              noOfLines={[1, 2, 3, 4]}
            >
              {summary}
            </Text>
          </Flex>

          <Divider pt={["10px"]} />
          <Flex justifyContent="center" p="10px 0 10px 0">
            <Image width="30px" height="30px" src={bottom_icon} alt="..." />
          </Flex>
        </Stack>
      </Box>
    </Link>
  );
}

export default Card;
