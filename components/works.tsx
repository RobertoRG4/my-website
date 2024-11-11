import { Box, Image, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";

interface Props {
  title: string;
  url: string;
  description: string;
  categoria: string;
  id: string;
}

const WorksItem = ({
  title,
  url,
  description,
  categoria,
  id,
}: Props): JSX.Element => {
  return (
    <Box w="100%" textAlign="center" paddingY="10px">
      <LinkBox display="flex" flexDirection="column" alignItems="center">
        <Image
          width="fit-content"
          borderRadius="10px"
          src={url}
          alt={title}
          loading="lazy"
        />
        <LinkOverlay href={`/${categoria}/${id}`}>
          <Text as="h2" fontSize="x-large">
            {title}
          </Text>
          <Text as="p">{description}</Text>
        </LinkOverlay>
      </LinkBox>
    </Box>
  );
};
export default WorksItem;
