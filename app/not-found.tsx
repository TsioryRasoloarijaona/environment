import { Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import { SparklesCore } from "./components/ui/sparkles";

const NotFound = () => {
    return (
        <Box className="h-[100vh] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          <h1 className="md:text-5xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
            This page is not found
          </h1>
        </Box>
      );
};

export default NotFound;
