import React from "react";
import PBM, { PBMProps } from "../PBM";

const PBMWebWrapper: React.FC<PBMProps> = ({
  originalProductPrice,
  industryLogo,
}) => {
  const parsedPrice =
    typeof originalProductPrice === "string"
      ? parseFloat(originalProductPrice)
      : originalProductPrice;

  console.log("PBMWebWrapper props:", { parsedPrice, industryLogo });

  return (
    <PBM
      originalProductPrice={parsedPrice || 0}
      industryLogo={industryLogo || ""}
    />
  );
};

export default PBMWebWrapper;
