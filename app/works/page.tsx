import ContainerWorks from "@/components/containerWorks";
import WorksItem from "@/components/works";
import { Text, Container } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container
      display="flex"
      flexDirection="column"
      maxW="5/12"
      paddingY="20px"
    >
      <Text as="h2" fontSize="xx-large" paddingY="50px">
        Works
      </Text>
      <ContainerWorks>
        <WorksItem
          title="Option Bus"
          description="This project offers an intuitive tool that helps users locate the nearest and most efficient bus routes, making daily commutes faster and more convenient. By optimizing route options, it aims to reduce travel time and improve the overall transit experience."
          url="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-light-blue-solid-color-background.jpg"
          categoria="works"
          id="option-bus"
        />
      </ContainerWorks>
    </Container>
  );
};

export default Page;
