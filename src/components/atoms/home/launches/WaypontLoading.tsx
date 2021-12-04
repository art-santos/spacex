import { useQueryContext } from 'context/QueryContext';
import React from 'react'
import { Waypoint } from 'react-waypoint';
import { Launches } from 'types/launches';

const WaypointLoading = ({ setLoad }) => {
const { launchData: launches, fetchMore } = useQueryContext();

  return (
    <>
      <Waypoint
          onEnter={() => {
            setLoad(true);
            fetchMore({
              variables: {
                offset: launches.launches.length + 8 || 0,
                limit: 8,
              },
              updateQuery: (prev: Launches, { fetchMoreResult }) => {
                !fetchMoreResult.launches[0] ? setLoad(false) : setLoad(true);

                if (fetchMoreResult){
                  return {
                    ...prev,
                    launches: [...prev.launches, ...fetchMoreResult.launches],
                  };
                }else if(!fetchMoreResult){
                  setLoad(false)
                }
                return {
                  ...prev,
                  launches: [...prev.launches, ...fetchMoreResult.launches],
                };
              },
            });
          }}
          onLeave={() => {
            setLoad(false);
          }}
        />
    </>
  )
}

export default WaypointLoading
