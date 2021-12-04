import React from "react";
import Card from "components/atoms/home/launches/Card";
import CardContainer from "components/atoms/home/launches/CardContainer";
import { LaunchesInterface } from "types/launches";
import { useQueryContext } from "context/QueryContext";
import LoadingScreen from "components/atoms/home/launches/Loading";
import WaypointLoading from "components/atoms/home/launches/WaypontLoading";


const CardFactory = () => {
  
  const { loading, launchData: launches } = useQueryContext();
  const [load, setLoad] = React.useState(false);

  return (
    <>
    {!loading && launches ? (
      <>
        <CardContainer >
          {launches instanceof Object &&
            launches.launches.map((item:LaunchesInterface, i) => {
            return <Card data={item} key={`${item.mission_name === "CRS-21" ? `CRS-21 (Demo)-${i}` : item.mission_name}`} />;
            }
          )}
          
        </CardContainer>
        <WaypointLoading setLoad={setLoad}/>
        </>
        ): null}
        {loading || load ? (
          <LoadingScreen />
        ) : null}
      
    </>
  );
};

export default CardFactory;
