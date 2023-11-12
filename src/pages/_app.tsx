
import GlobalStyles from "@/styles/globals";
import type { AppProps } from "next/app";
import {
  QueryClient,
  QueryClientProvider
} from "react-query";

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
