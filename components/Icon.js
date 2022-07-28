import { Flex, Image } from "@chakra-ui/react";
import React from "react";

const Icon = ({ bottom_icon }) => {
  return (
    <div>
      <Flex justifyContent="center" p="10px 0 10px 0">
        {/* <Image width={30} height={30} src={bottom_icon} alt="..." /> */}
        <Image w={30} h={30} src={bottom_icon} alt="..." />
      </Flex>
    </div>
  );
};

export default Icon;
