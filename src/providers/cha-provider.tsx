"use client";
import { theme } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

export default function ChaProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const emotionCache = createCache({
    key: "css",
    prepend: true
  });

  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
