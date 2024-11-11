import { ReactNode } from "react";
import { Container } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}
const ContainerWorks = ({ children }: Props) => {
  return (
    <Container
      as="div"
      display="grid"
      gapX="20px"
      gridTemplateColumns="auto auto"
    >
      {children}
    </Container>
  );
};

export default ContainerWorks;
