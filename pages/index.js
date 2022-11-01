import Head from "next/head";
import { chakra, Container, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Easy Money</title>
        <meta name="description" content="Some description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="container.xl">
        <Heading>Easy Money</Heading>
        <Text>Hello world</Text>

        <chakra.footer></chakra.footer>
      </Container>
    </>
  );
}
