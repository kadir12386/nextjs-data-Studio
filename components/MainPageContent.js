import { Stack, Text } from "@chakra-ui/react";
import React from "react";

const MainPageContent = () => {
  return (
    <div>
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
      </Stack>
    </div>
  );
};

export default MainPageContent;
