import { Box } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Platform from "../components/Pricing/Platform";

export default function Pricing() {
  return (
    <Box userSelect="none">
      <Navbar/>
      <Platform />
      <Footer/>
    </Box>
  );
}
