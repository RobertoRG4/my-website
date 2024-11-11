import Model from "@/components/models/iphone";
import RenderModel from "@/components/models/renderModel";
import {
  Badge,
  List,
  ListItem,
  Box,
  Container,
  Span,
  Text,
  Link,
} from "@chakra-ui/react";

const Page = () => {
  return (
    <Container display={"flex"} alignContent={"center"}>
      <Box width={"400px"} height={"800px"} padding={"50px"}>
        <RenderModel>
          <Model />
        </RenderModel>
      </Box>
      <Box margin={"50px"}>
        <Text as="h2" fontSize={"x-large"} fontWeight="bold">
          Option Bus
        </Text>
        <Text as="p" paddingY="10px">
          This project offers an intuitive tool that helps users locate the
          nearest and most efficient bus routes, making daily commutes faster
          and more convenient. By optimizing route options, it aims to reduce
          travel time and improve the overall transit experience.
        </Text>
        <List.Root gapY="10px" variant="plain" paddingX="20px" paddingY="10px">
          <ListItem>
            <Badge variant="solid" padding="5px" colorPalette="purple">
              STACK
            </Badge>
            <Span paddingX="10px">React JS, Expo, Redux</Span>
          </ListItem>
          <ListItem>
            <Badge variant="solid" padding="5px" colorPalette="blue">
              WEBSITE
            </Badge>
            <Link
              target="_blank"
              paddingX="10px"
              href="https://shorturl.at/fUoLq"
            >
              https://shorturl.at/fUoLq
            </Link>
          </ListItem>
          <ListItem>
            <Badge variant="solid" padding="5px" colorPalette="green">
              PLATFORM
            </Badge>
            <Span paddingX="10px">Android</Span>
          </ListItem>
          <ListItem>
            <Badge variant="solid" padding="5px" colorPalette="yellow">
              Source Code
            </Badge>
            <Link
              paddingX="10px"
              href="https://github.com/RobertoRG4/Option-Bus"
            >
              https://github.com/RobertoRG4/Option-Bus
            </Link>
          </ListItem>
        </List.Root>
      </Box>
    </Container>
  );
};

export default Page;
