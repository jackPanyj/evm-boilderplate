import ChaProvider from "./cha-provider";
import WagProvider from "./wag-provider";

export default function Providers({ children }) {
  return (
    <WagProvider>
      <ChaProvider>{children}</ChaProvider>
    </WagProvider>
  );
}
