import { useMediaQuery } from "@chakra-ui/react";

export function useIsMobile() {
  const [isPc] = useMediaQuery("(min-width: 768px)");
  return !isPc;
}
