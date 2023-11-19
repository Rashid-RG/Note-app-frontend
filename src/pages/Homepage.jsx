import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import note from "../assets/note.png";

export default function Homepage() {
  return (
    <Box padding={8}>
      <Image position={"absolute"} right={0} w={500} src={note} />
      <Heading mt={20} textAlign={"start"} size={"4xl"}>
      Note App!
      </Heading>
      <Text mt={8} maxW={"50%"} textAlign={"justify"}>
      A note application is a versatile and essential tool for managing digital notes, ideal for students, professionals, and anyone aiming to enhance productivity and organization. It offers a user-friendly interface for creating, editing, and organizing notes with text, images, and voice memos. Features like tagging, categorization, and a robust search function make it easy to retrieve information. Additionally, its sharing capability fosters seamless collaboration for group projects or shared ideas. With sync across multiple devices, users can access their notes anytime, anywhere, ensuring continuous workflow and idea capture.
      </Text>

      <Text mt={14} maxW={"50%"} textAlign={"justify"}fontWeight={"bold"} >
      "The faintest ink is more powerful than the strongest memory. A note application helps turn thoughts into action, making your ideas indelible and your tasks achievable."
      </Text>
      
    </Box>
  );
}
