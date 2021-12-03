import React from "react";
import Card from "components/atoms/home/launches/Card";
import CardContainer from "components/atoms/home/launches/CardContainer";
import { DataHome, LaunchesInterface } from "types/launches";

const CardFactory = ({ data }: DataHome) => {
  return (
    <>
      <CardContainer >
        {data instanceof Array &&
        data.map((item:LaunchesInterface) => {
          return <Card data={item} key={`${item.mission_name}-${item.id}`} />;
          }
        )}
      </CardContainer>
    </>
  );
};

export default CardFactory;
