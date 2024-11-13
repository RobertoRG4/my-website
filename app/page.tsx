"use client";
import Island from "@/components/models/island";
import RenderIsland from "@/components/models/renderIsland";
import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  const [fov, setFov] = useState(80);
  const textOpacity = Math.max(0, (fov - 10) / 70);

  const handleZoomChange = (newFov: number) => {
    setFov(newFov);
  };
  return (
    <Box
      position="relative"
      zIndex={2}
      display="flex"
      justifyContent="center"
      width="100%"
      height="100vh"
      overflow="hidden"
    >
      <Text
        marginTop="6%"
        as="h1"
        position="absolute"
        fontSize="100px"
        zIndex={2}
        color="#fff"
        fontWeight="bold"
        style={{ opacity: textOpacity }}
      >
        Welcome to my website.
      </Text>
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex={1}
      >
        <RenderIsland onZoomChange={handleZoomChange}>
          <Island />
        </RenderIsland>
      </Box>
    </Box>
  );
}
