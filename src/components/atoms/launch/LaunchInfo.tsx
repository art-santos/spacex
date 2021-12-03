import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Divider,
} from "@chakra-ui/react";
import React from "react";

const LaunchInfo = ({ data }) => {
  const { launch } = data;
  const { rocket } = launch.rocket;
  return (
    <>
      <Table
        width="80%"
        m="auto"
        marginY="10px"
        size={["sm", "md", "lg", "xl"] as any}
      >
        <Thead>
          <Tr>
            <Th>INFO</Th>
            <Th>DATA</Th>
            <Th>INFO</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td fontWeight="bold">Mission Name</Td>
            <Td>{launch.mission_name}</Td>
            <Td>{launch.mission_id}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Rocket Name</Td>
            <Td>{rocket.name}</Td>
            <Td>{rocket.id}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Cost Per Launch</Td>
            <Td>{rocket.cost_per_launch}</Td>
            <Td>U$D</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Diameter</Td>
            <Td>{rocket.diameter.feet} feet</Td>
            <Td>{rocket.diameter.meters} meters</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Height</Td>
            <Td>{rocket.height.feet} feet</Td>
            <Td>{rocket.height.meters} meters</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Mass</Td>
            <Td>{rocket.mass.lb} Lbs</Td>
            <Td>{rocket.mass.kg} Kg</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Engine</Td>
            <Td>{rocket.engines.type}</Td>
            <Td>{rocket.engines.version}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Thrust Vacuum</Td>
            <Td>kN {rocket.engines.thrust_vacuum.kN}</Td>
            <Td>lbf {rocket.engines.thrust_vacuum.lbf}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Propelant</Td>
            <Td>{rocket.engines.propellant_1}</Td>
            <Td>{rocket.engines.propellant_2}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Payload</Td>
            <Td>{launch.rocket.second_stage.payloads[0].payload_type}</Td>
            <Td>{launch.rocket.second_stage.payloads[0].nationality}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Launch Site</Td>
            <Td>{data.launch.launch_site.site_name}</Td>
            <Td>{data.launch.launch_site.site_id}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Payload Mass</Td>
            <Td>{rocket.payload_weights[0].lb} lbs</Td>
            <Td>{rocket.payload_weights[0].kg} Kg</Td>
          </Tr>
          <Tr>
            <Td fontWeight="bold">Launch Site</Td>
            <Td>CCAFS SLC 40</Td>
            <Td>ccafs_slc_40</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>INFO</Th>
            <Th>DATA</Th>
            <Th>INFO</Th>
          </Tr>
        </Tfoot>
      </Table>
      <Divider />
    </>
  );
};

export default LaunchInfo;
