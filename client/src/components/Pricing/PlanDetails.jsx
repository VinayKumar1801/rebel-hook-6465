import {
  Box,
  HStack,
  Table,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Fragment } from "react";
import details from "../../assets/plandetails.json";
import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

const [Tick, Cross] = [<TiTick size="1.5rem" />, <RxCross1 size="1.5rem" />];

export default function PlanDetails() {
  return (
    <Fragment>
      <Box py="6">
        <Table maxW={{ lg: "container.lg" }} m="auto">
          <Thead></Thead>
          <Tbody>
            {details.map((el) => (
              <Tr key={el.title}>
                <Td
                  textAlign="start"
                  maxW={{ base: "24", lg: "sm" }}
                  px={{ base: "4", lg: "6" }}
                >
                  {el.title}
                </Td>
                <Td textAlign="start">
                  <HStack justify="center">
                    {el.paid === true ? (
                      Tick
                    ) : el.paid === false ? (
                      <Text>{Cross}</Text>
                    ) : (
                      <Text>{el.paid}</Text>
                    )}
                  </HStack>
                </Td>
                <Td color={el.free ? "black" : "gray.400"}>
                  <HStack justify="center">
                    {el.free === true ? (
                      Tick
                    ) : el.free === false ? (
                      <Text>{Cross}</Text>
                    ) : (
                      <Text>{el.free}</Text>
                    )}
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Fragment>
  );
}
