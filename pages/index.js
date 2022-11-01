import Head from "next/head";
import { Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Easy Money</title>
        <meta name="description" content="Some description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading>Easy Money</Heading>
      <Text>Hello world</Text>
    </>
  );
}
