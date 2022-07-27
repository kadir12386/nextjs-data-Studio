import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import { dataList } from "../../components/data";
const DataDetails = ({ data }) => {
  // console.log("current data", dataList);
  return (
    <div>
      {/* <Flex h={"90vh"} justify={"center"} mt="70px">
        <Heading>{data.title}</Heading>
      </Flex> */}
      <Flex
        p={["30px 20px", "50px 40px", "50px 50px", "50px 180px"]}
        direction={["column", "column", "column", "row"]}
        justify={["center", "center", "center", ""]}
        align={["center", "center", "center", ""]}
      >
        <Box w={["100%", "100%", "80%", "60%"]}>
          <Image
            // width={["390px", "600px", "900px", "1000px"]}
            // height={["250px", "250px", "300px", "390px"]}
            width={1000}
            height={590}
            alt={data.title}
            src={data.card_img}
          />
        </Box>

        <Box
          w={["100%", "100%", "100%", "50%"]}
          pl={["10px", "10px", "10px", "50px"]}
          mt={["20px", "20px", "", ""]}
        >
          <Heading as="h3" fontSize={["20px", "30px"]}>
            {data.title}
          </Heading>
          <Text color={"#7a7a7a"} pt={"10px"}>
            By Two Minute Reports - November 24, 2021
          </Text>
          <Badge
            bg="#eeeefb"
            color={"#2a2aca"}
            textTransform="capitalize"
            fontWeight={"400"}
            my={"20px"}
          >
            Advertising (PPC)
          </Badge>
          <Flex>
            <Flex p="5px 0 20px 0">
              <Image width={35} height={35} src={data.bottom_icon} alt="icon" />
            </Flex>
            {/* <Image
              width="30px"
              height="30px"
              src={data.bottom_icon}
              alt={data.bottom_icon_name}
            />{" "} */}
            <Text
              fontSize="18px"
              color={"#696871"}
              fontWeight="400"
              my={"10px"}
              pl="10px"
            >
              {data.bottom_icon_name}
            </Text>
          </Flex>

          <Text fontSize="20px" color={"#696871"} fontWeight="600" my={"10px"}>
            For use with Google Data Studio
          </Text>
          <Button
            size="lg"
            height="48px"
            width="100%"
            fontWeight={"400"}
            bgColor="#4e4eda"
            color={"white"}
            transition={"0.5s"}
            _hover={{ bg: "#eeeefb", color: "#111" }}
          >
            Preview Template
          </Button>
          <Text color={"#4e4eda"} my={"10px"}>
            HOW TO USE?
          </Text>
          <Text fontSize="17px" color={"#696871"} fontWeight="600" my={"10px"}>
            License Type : Free with Two Minute Reports
          </Text>
        </Box>
      </Flex>
      <Stack mb="500px" p={["0px 20px", "0px 40px", "10px 50px", "10px 180px"]}>
        <Heading as="h2" fontSize="25px">
          About the Template
        </Heading>
        <Text>{data.summary}</Text>
      </Stack>
    </div>
  );
};

export default DataDetails;

// export const getServerSideProps = async (context) => {
//   const id = context.params.id;
//   const api = await fetch(
//     "https://6120e9a524d11c001762ee48.mockapi.io/dataui/" + id
//   );
//   // const api = await fetch("dataList/users/" + id);
//   const data = await api.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };

export const getStaticProps = async ({ params }) => {
  // console.log(params, "params");
  const dataLists = dataList.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      data: dataLists[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = dataList.map((s) => ({
    params: { id: s.id.toString() },
  }));
  return { paths, fallback: false };
};
