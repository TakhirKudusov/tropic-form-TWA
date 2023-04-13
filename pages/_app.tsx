import type { AppProps } from "next/app";
import Global from "@/common/styles/Global";
import "@fontsource/roboto";
import "@fontsource/inter";
import "@fontsource/lekton";
import "@fontsource/exo";
import "@fontsource/exo-2";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  );
}
