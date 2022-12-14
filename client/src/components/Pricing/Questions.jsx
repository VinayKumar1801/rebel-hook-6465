import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import { Fragment } from "react";
import questionData from "../../assets/faqs.json";

export default function Questions() {
  return (
    <Fragment>
      <Box maxW="container.lg" m="auto" p="4" py="8">
        <Box py="4">
          <Heading>FAQ's</Heading>
        </Box>
        <Accordion allowToggle>
          {questionData.map((el) => (
            <AccordionItem key={el.question} py="4">
              <Heading>
                <AccordionButton>
                  <Box flex="1" textAlign="left" fontSize="xl">
                    {el.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel>
                <Box py="6">{el.ans}</Box>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Fragment>
  );
}
