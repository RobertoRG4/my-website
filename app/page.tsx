import Island from "@/components/models/island";
import RenderIsland from "@/components/models/renderIsland";
import { Box, Container, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container
      position="relative"
      zIndex={2}
      display="flex"
      justifyContent="center"
      as="main"
    >
      <Text
        marginTop="6%"
        as="h1"
        position="relative"
        fontSize="100px"
        zIndex={2}
        color="#fff"
        fontWeight="bold"
      >
        Welcome to my website.
      </Text>
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100vh"
        zIndex={1}
      >
        <RenderIsland>
          <Island />
        </RenderIsland>
      </Box>
    </Container>
  );
}
