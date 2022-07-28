import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Icon = ({ bottom_icon }) => {
  return (
    <div>
      <Flex justifyContent="center" p="10px 0 10px 0">
        <div style={{ position: "relative", width: "30px", height: "30px" }}>
          <Image
            src={bottom_icon}
            width={30}
            height={30}
            objectFit="cover"
            layout="responsive"
          />
        </div>
        {/* image in chakra */}
        {/* <Image width={30} height={30} src={bottom_icon} alt="..." /> */}
        {/* <Image w={30} h={30} src={bottom_icon} alt="..." /> */}
      </Flex>
    </div>
  );
};

export default Icon;
