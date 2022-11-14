import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme";
import { useRouter } from "next/router";
import ReactGA from "react-ga4";

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
    ReactGA.send({ hitType: "pageview", page: router.asPath });

    const handleRouteChange = (url) => {
      ReactGA.send({ hitType: "pageview", page: url });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
