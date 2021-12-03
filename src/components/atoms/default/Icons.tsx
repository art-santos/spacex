import { SearchIcon } from "@chakra-ui/icons";
import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import {
  FaWikipediaW,
  FaRocket,
  FaFlag,
  FaTruckLoading,
  FaWeightHanging,
} from "react-icons/fa";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { SiSpacex } from "react-icons/si";

const getIcon = (name: string) => {
  switch (name) {
    case "wikipedia":
      return FaWikipediaW;
    case "spacex":
      return SiSpacex;
    case "pdf":
      return AiOutlineFilePdf;
    case "rocket":
      return <FaRocket />;
    case "flag":
      return <FaFlag />;
    case "truck":
      return <FaTruckLoading />;
    case "weight":
      return <FaWeightHanging />;
    case "moon":
      return <RiMoonFill />;
    case "sun":
      return <RiSunLine />;
    case "search":
      return <SearchIcon />;
    default:
      return FaWikipediaW;
  }
};

export default getIcon as any;
