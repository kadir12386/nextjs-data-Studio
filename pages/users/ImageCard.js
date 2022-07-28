import Image from "next/image";
import React from "react";

const ImageCard = ({ card }) => {
  return (
    <div>
      <Image
        width="280px"
        height="160px"
        src={card}
        alt="..."
        layout="responsive"
      />
    </div>
  );
};

export default ImageCard;
