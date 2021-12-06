import Image from "next/image";
import React from "react";

const DefaultLogo = () => {
  return <Image loading="eager" height={30} width={190} src="/spacex-logo.png" />;
};

export default DefaultLogo;
