import Head from "next/head";
import {
  chakra,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Button,
  Image,
  Icon,
  IconButton,
  ListItem,
  UnorderedList,
  Input,
  InputGroup,
  InputRightElement,
  Center,
  AccordionIcon,
  Wrap,
  AccordionPanel,
  AccordionItem,
  Accordion,
  AccordionButton,
} from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import ArrowIcon from "icons/arrow";
import { CLIENT_STATIC_FILES_RUNTIME_WEBPACK } from "next/dist/shared/lib/constants";

export default function Home() {
  return (
    <>
      <Head>
        <title>Easy Money</title>
        <meta name="description" content="Some description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW={{ base: "100vw", md: "3xl", lg: "1400px" }}>
        <Stack
          // width="100%"
          py={4}
          justify="end"
          alignItems="center"
          spacing={{ lg: 6, md: 6, base: 3 }}
          direction="row"
        >
          <IconButton
            fontSize={{ lg: "3xl", md: "3xl", base: "2xl" }}
            variant="ghost"
            icon={<BsTwitter />}
          />
          <IconButton
            pt={1}
            fontSize={{ lg: "3xl", md: "3xl", base: "2xl" }}
            variant="ghost"
            icon={<FaDiscord />}
          />
        </Stack>

        <Stack
          py={{ lg: 6, md: 6, base: 0 }}
          alignItems="center"
          justify={{ md: "space-between", lg: "space-between", base: "center" }}
          direction="row"
        >
          <Stack alignItems={{ lg: "start", md: "none", base: "left" }}>
            <Image
              alignSelf={{ lg: "start", md: "none", base: "start" }}
              width={{ lg: "32rem", md: "32rem", base: "18rem" }}
              src="/images/easy_money.svg"
              alt="Easy money"
            />

            <Stack
              pl={{ lg: 12, md: 9, base: 6 }}
              pr={{ lg: 0, md: 0, base: 0 }}
              spacing={{ lg: 8, md: 8, base: 6 }}
              width={{ lg: "xl", md: "md", base: "95%" }}
            >
              <Text fontSize={{ lg: "2xl", md: "2xl", base: "16.5px" }}>
                LIFE GETS WORSE BEFORE IT GETS BETTER...BUT SOMETIMES IT JUST
                GETS WORSE.
              </Text>

              <Text
                // textAlign={{ lg: "none", md: "none", base: "left" }}
                fontSize={{ lg: "1rem", md: "1rem", base: "12px" }}
              >
                Be part of the first African movie funded with NFTs.
              </Text>
              <Button
                _active={{ opacity: 0.8 }}
                _hover={{ opacity: 0.8 }}
                color="black"
                bgColor="white"
                width="13rem"
                rounded="full"
              >
                JOIN OUR DISCORD
              </Button>
            </Stack>
          </Stack>

          <Image
            display={{ base: "none", md: "none", lg: "flex" }}
            width="28rem"
            alt="car image"
            src="/images/car.png"
          />
        </Stack>

        <Stack
          pt={{ lg: 8, md: 8, base: 14 }}
          pb={{ lg: 8, md: 8, base: 4 }}
          spacing={{ lg: 6, md: 6, base: 8 }}
          alignItems={{ base: "start", md: "center", lg: "center" }}
          textAlign="center"
        >
          <Image
            // pr={{ base: 3, md: "none", lg: "none" }}
            display={{ base: "flex", md: "none", lg: "none" }}
            width="17rem"
            alt="car image"
            src="/images/car.png"
            alignSelf="center"
          />

          <Stack
            px={{ base: 6, md: 0, lg: 0 }}
            pt={{ lg: 5, md: 5, base: 6 }}
            spacing={7}
            width={{ base: "100%", md: "xl", lg: "3xl" }}
          >
            <Heading
              alignSelf={{ base: "start", md: "center", lg: "center" }}
              textTransform="uppercase"
            >
              The mint
            </Heading>
            <Text>
              Each NFT you mint helps get this movie made. Your contribution
              also gives you a share of the IP and life time revenue from the
              film.
            </Text>

            <Text>
              Lets make history by creating the first African film fully funded
              with NFTs.
            </Text>
          </Stack>
        </Stack>

        <SimpleGrid
          pt={{ base: 12, md: 12, lg: 12 }}
          pb={{ base: 6, md: 12, lg: 12 }}
          px={{ base: 2, md: 0, lg: 0 }}
          spacing={{ base: 10, md: 6, lg: 6 }}
          columns={{ lg: 3, md: 3, base: 1 }}
          direction="row"
        >
          <Stack spacing={{ base: 4, md: 6, lg: 6 }}>
            <Text
              fontWeight={500}
              fontSize="20px"
              alignSelf="center"
              textTransform="uppercase"
            >
              Greed
            </Text>
            <Stack border="1px" borderColor="gray.200" borderRadius="lg">
              <Image alt="hero image" src="/images/question_mark.png" />
              <Text pt={4} fontSize="1.5rem" alignSelf="center">
                0.12 ETH
              </Text>
              <Stack pb={8} pt={4} px={8}>
                <Text pb={2} fontWeight={500} fontSize="26px">
                  Utility
                </Text>
                <UnorderedList
                  fontSize={{ base: "15px", md: "15px", lg: "16px" }}
                  spacing={5}
                >
                  <ListItem> Access to the gated Discord channel</ListItem>
                  <ListItem>
                    A private link to watch the finished movie
                  </ListItem>
                  <ListItem>Your name in the credits of the film</ListItem>
                  <ListItem>IP share of the film (per # of NFT owned)</ListItem>
                  <ListItem>
                    Revenue share of the film (per # of NFT owned)
                  </ListItem>
                  <ListItem>
                    A shoutout on Twitter from the Easy Money account
                  </ListItem>
                </UnorderedList>
              </Stack>
            </Stack>
          </Stack>

          <Stack spacing={{ base: 4, md: 6, lg: 6 }}>
            <Text
              fontWeight={500}
              fontSize="20px"
              alignSelf="center"
              textTransform="uppercase"
            >
              Wrath
            </Text>
            <Stack border="1px" borderColor="gray.200" borderRadius="lg">
              <Image alt="hero image" src="/images/question_mark.png" />
              <Text pt={4} fontSize="1.5rem" alignSelf="center">
                1 ETH
              </Text>
              <Stack pb={8} pt={4} px={8}>
                <Text pb={2} fontWeight={500} fontSize="26px">
                  Utility
                </Text>
                <UnorderedList
                  fontSize={{ base: "15px", md: "15px", lg: "16px" }}
                  spacing={5}
                >
                  <ListItem>Everything on the GREED tier +</ListItem>
                  <ListItem>Video Q & A with crew</ListItem>
                  <ListItem>
                    A limited edition Easy Money T-Shirt and Poster
                  </ListItem>
                  <ListItem>Associate Producer credits in the film</ListItem>
                  <ListItem>Invite to cast & crew screening in Lagos</ListItem>
                  <ListItem>
                    Invite to come on set for a day. Watch behind the scenes in
                    real time
                  </ListItem>
                </UnorderedList>
              </Stack>
            </Stack>
          </Stack>

          <Stack spacing={{ base: 4, md: 6, lg: 6 }}>
            <Text
              fontWeight={500}
              fontSize="20px"
              alignSelf="center"
              textTransform="uppercase"
            >
              Envy
            </Text>
            <Stack border="1px" borderColor="gray.200" borderRadius="lg">
              <Image alt="hero image" src="/images/question_mark.png" />
              <Text pt={4} fontSize="1.5rem" alignSelf="center">
                5 ETH
              </Text>
              <Stack pb={8} pt={4} px={8}>
                <Text pb={2} fontWeight={500} fontSize="26px">
                  Utility
                </Text>
                <UnorderedList
                  fontSize={{ base: "15px", md: "15px", lg: "16px" }}
                  spacing={5}
                >
                  <ListItem>Everything on the GREED tier +</ListItem>
                  <ListItem>Video Q & A with crew</ListItem>
                  <ListItem>
                    A limited edition Easy Money T-Shirt and Poster
                  </ListItem>
                  <ListItem>Associate Producer credits in the film</ListItem>
                  <ListItem>Invite to cast & crew screening in Lagos</ListItem>
                  <ListItem>
                    Invite to come on set for a day. Watch behind the scenes in
                    real time
                  </ListItem>
                </UnorderedList>
              </Stack>
            </Stack>
          </Stack>
        </SimpleGrid>

        <Stack py={8} alignItems="center">
          <Stack
            spacing={8}
            width={{ sm: "sm", md: "md", lg: "lg" }}
            alignItems="center"
          >
            <Text align="center">
              Join our discord to stay updated on our progress and also stand a
              chance to win limited edition prizes.
            </Text>
            <Button width="13rem" rounded="full">
              JOIN OUR DISCORD
            </Button>
          </Stack>
        </Stack>

        <Stack>
          <Image width="12rem" alt="bullets" src="/images/bullets.png" />
          <Heading
            pt={{ base: 4, md: 0, lg: 0 }}
            pb={5}
            alignSelf="center"
            textTransform="uppercase"
          >
            The movie
          </Heading>

          <Stack
            justify="space-between"
            align="center"
            direction={{ lg: "row", md: "row", base: "column-reverse" }}
          >
            <Stack
              px={{ base: 4, md: 0, lg: 0 }}
              spacing={3}
              width={{ lg: "md", md: "xs" }}
            >
              <Text
                fontWeight={500}
                fontSize={{ lg: "21px", md: "21px", base: "18px" }}
              >
                Plot
              </Text>
              <Text fontSize={{ lg: "17px", md: "17px", base: "15px" }}>
                A desperate man trying to escape the poverty of his life
                attempts a robbery with an old friend.
              </Text>
              <Text
                fontSize={{ lg: "none", md: "none", base: "14px" }}
                fontStyle="italic"
              >
                Everything goes wrong.
              </Text>
            </Stack>

            <Image
              height={{ lg: "14rem", base: "12rem", md: "14rem" }}
              src="/images/gun.png"
              alt="gun"
            />
          </Stack>

          <Stack
            py={6}
            justify="space-between"
            align="center"
            direction={{ lg: "row", md: "row", base: "column" }}
          >
            <Image
              alt="crow bar"
              height={{ base: "17rem", md: "none", lg: "none" }}
              src="/images/crowbar.png"
            />
            <Stack
              pt={{ base: 4, md: 0, lg: 0 }}
              px={{ base: 4, md: 0, lg: 0 }}
              spacing={3}
              width={{ lg: "md", md: "xs" }}
            >
              <Text
                fontWeight={500}
                fontSize={{ lg: "21px", md: "21px", base: "18px" }}
              >
                Based on a true story
              </Text>
              <Text fontSize={{ lg: "17px", md: "17px", base: "15px" }}>
                A film about wealth inequality, urban violence and escalating
                consequences.
              </Text>
            </Stack>
          </Stack>
        </Stack>

        <Stack align="center">
          <Image
            width={{ lg: "50rem", base: "40rem" }}
            src="/images/snapshot.png"
            alt=""
          />
        </Stack>

        <Stack
          py={{ lg: 16, md: 16, base: 12 }}
          align="center"
          bgSize={{ base: "auto", lg: "none", md: "none" }}
          bgRepeat="no-repeat"
          bgPosition="center"
          bgImage="url(/images/map.png)"
        >
          <Heading
            fontSize={{ lg: "5xl", md: "5xl", base: "4xl" }}
            textTransform="uppercase"
          >
            Road map
          </Heading>

          <Stack
            py={8}
            textAlign="center"
            divider={
              <Center border="0">
                <ArrowIcon width="12px" height="48px" />
              </Center>
            }
          >
            <chakra.div>
              <Text
                fontStyle="italic"
                fontSize={{ lg: "none", md: "none", base: "sm" }}
              >
                November 2022
              </Text>
              <Heading
                fontSize={{ lg: "3xl", md: "3xl", base: "2xl" }}
                textTransform="uppercase"
              >
                Nft mint
              </Heading>
            </chakra.div>

            <chakra.div>
              <Text fontSize={{ lg: "none", md: "none", base: "sm" }}>
                January - February 2023
              </Text>
              <Heading
                fontSize={{ lg: "3xl", md: "3xl", base: "2xl" }}
                textTransform="uppercase"
              >
                Pre-Production
              </Heading>
            </chakra.div>

            <chakra.div>
              <Text
                fontSize={{ lg: "none", md: "none", base: "sm" }}
                fontStyle="italic"
              >
                March - May 2023
              </Text>
              <Heading
                fontSize={{ lg: "3xl", md: "3xl", base: "2xl" }}
                textTransform="uppercase"
              >
                Production
              </Heading>
            </chakra.div>

            <chakra.div>
              <Text
                fontSize={{ lg: "none", md: "none", base: "sm" }}
                fontStyle="italic"
              >
                June - July 2023
              </Text>
              <Heading
                fontSize={{ lg: "3xl", md: "3xl", base: "2xl" }}
                textTransform="uppercase"
              >
                Post-Production
              </Heading>
            </chakra.div>

            <chakra.div>
              <Text
                fontSize={{ lg: "none", md: "none", base: "sm" }}
                fontStyle="italic"
              >
                December 2023...
              </Text>
              <Heading
                fontSize={{ lg: "3xl", md: "3xl", base: "2xl" }}
                textTransform="uppercase"
              >
                Festival Premiere
              </Heading>
            </chakra.div>

            <chakra.div>
              <Text
                fontSize={{ lg: "none", md: "none", base: "sm" }}
                fontStyle="italic"
              >
                Ongoing...
              </Text>
              <Heading
                fontSize={{ lg: "3xl", md: "3xl", base: "2xl" }}
                textTransform="uppercase"
              >
                IP ownership X Profit share
              </Heading>
            </chakra.div>
          </Stack>

          <Container textAlign="center" maxW="container.md">
            <Text fontSize={{ lg: "none", md: "none", base: "13px" }}>
              50% pf IP rights and lifetime revenue of the films goes to NFT
              holders. Profit from the film will be converted to ETH and
              available to claim by NFT holders.
            </Text>
          </Container>
        </Stack>

        <Stack
          px={{ base: 4, md: 0, lg: 0 }}
          spacing={{ lg: 10, base: 3, md: 10 }}
        >
          <Stack
            spacing={{ lg: 6, base: 3, md: 6 }}
            alignItems={{ base: "none", md: "center", lg: "center" }}
          >
            <Heading>Behind The Scenes</Heading>
            <Text>
              Easy Money is a collaborative work by Nigerian creatives.
            </Text>
          </Stack>
          <Wrap
            justify="center"
            spacing={{ lg: 16, md: 16, base: 10 }}
            // columns={{ lg: 3, base: 1, md: 3 }}
            // rows={{ lg: 2, base: "none", md: "none" }}
          >
            <Stack
              width={{ lg: "26%", base: "80%" }}
              spacing={0}
              color="#000000"
              border="2px"
              borderColor="#ffffff"
              borderRadius="1.5rem"
              // box-shadow="4px 5px 10px rgba(255, 255, 255, 0.25)"
            >
              <Image alt="hero image" src="/images/Lenny.png" />
              <Stack
                height="100%"
                bgColor="#D0B396"
                borderBottomRadius="1.4rem"
                spacing={{ md: 0, base: 0, lg: 0 }}
                pb={8}
                pt={4}
                px={8}
              >
                <Text
                  fontWeight={600}
                  fontSize={{ lg: "19px", md: "19px", base: "17px" }}
                >
                  Lenny Johnson
                </Text>
                <Text
                  fontWeight={600}
                  fontSize={{ lg: "19px", md: "19px", base: "17px" }}
                >
                  Writer and Director
                </Text>
                <Stack pt={6}>
                  <Text
                    fontWeight={400}
                    fontSize={{ lg: "18px", md: "18px", base: "16px" }}
                  >
                    From Startups to DAOs to music & films.
                  </Text>
                  <Text
                    fontWeight={400}
                    fontSize={{ lg: "18px", md: "18px", base: "16px" }}
                  >
                    Lenny brings his multidisciplinary approach to the world of
                    film making.
                  </Text>
                </Stack>
              </Stack>
            </Stack>

            <Stack
              width={{ lg: "26%", base: "80%" }}
              spacing={0}
              color="#000000"
              border="2px"
              borderColor="#ffffff"
              borderRadius={{ base: "1.6rem", md: "1.6rem", lg: "2rem" }}
            >
              <Image
                // borderRadius="inherit"
                alt="hero image"
                src="/images/Monak.png"
              />
              <Stack
                height="100%"
                bgColor="#D0B396"
                borderBottomRadius={{
                  base: "1.5rem",
                  md: "1.5rem",
                  lg: "1.9rem",
                }}
                spacing={{ md: 0, base: 0, lg: 0 }}
                pb={8}
                pt={4}
                px={8}
              >
                <Text
                  fontWeight={600}
                  fontSize={{ lg: "19px", md: "19px", base: "17px" }}
                >
                  Monak
                </Text>
                <Text
                  fontWeight={600}
                  fontSize={{ lg: "19px", md: "19px", base: "17px" }}
                >
                  Actor & Composer
                </Text>
                <Stack pt={6}>
                  <Text
                    fontWeight={400}
                    fontSize={{ lg: "18px", md: "18px", base: "16px" }}
                  >
                    Monak is a Lagos based artist and producer who does
                    everything his own way.
                  </Text>
                  <Text
                    fontWeight={400}
                    fontSize={{ lg: "18px", md: "18px", base: "16px" }}
                  >
                    {`When not making beats, he's leveraging his acting talents.`}
                  </Text>
                </Stack>
              </Stack>
            </Stack>

            <Stack
              width={{ lg: "26%", base: "80%" }}
              spacing={0}
              color="#000000"
              border="2px"
              borderColor="#ffffff"
              borderRadius="37px"
            >
              <Image alt="hero image" src="/images/Versaphile.png" />
              <Stack
                height="100%"
                bgColor="#D0B396"
                borderBottomRadius="35px"
                spacing={{ md: 0, base: 0, lg: 0 }}
                pb={8}
                pt={4}
                px={8}
              >
                <Text
                  fontWeight={600}
                  fontSize={{ lg: "19px", md: "19px", base: "17px" }}
                >
                  Versaphile
                </Text>
                <Text
                  fontWeight={600}
                  fontSize={{ lg: "19px", md: "19px", base: "17px" }}
                >
                  Digital Artist
                </Text>
                <Stack pt={6}>
                  <Text
                    fontWeight={400}
                    fontSize={{ lg: "18px", md: "18px", base: "16px" }}
                  >
                    Versaphile brings his intricate world building powers to the
                    Easy Money NFT collection.
                  </Text>
                  <Text
                    fontWeight={400}
                    fontSize={{ lg: "18px", md: "18px", base: "16px" }}
                  >
                    Marvel at their splendor.
                  </Text>
                </Stack>
              </Stack>
            </Stack>

            <Stack
              width={{ lg: "26%", base: "80%" }}
              spacing={0}
              color="#000000"
              border="2px"
              borderColor="#ffffff"
              borderRadius={{ lg: "37px", base: "2rem" }}
            >
              <Image
                // width="intrinsic"
                alt="hero image"
                src="/images/Kome.png"
                // borderTopRadius="4px"
              />
              <Stack
                height="100%"
                bgColor="#D0B396"
                borderBottomRadius="35px"
                spacing={{ md: 0, base: 0, lg: 0 }}
                pb={8}
                pt={4}
                px={8}
              >
                <Text
                  fontWeight={600}
                  fontSize={{ lg: "19px", md: "19px", base: "17px" }}
                >
                  Marvin Kome
                </Text>
                <Text
                  fontWeight={600}
                  fontSize={{ lg: "19px", md: "19px", base: "17px" }}
                >
                  Engineering
                </Text>
                <Stack pt={6}>
                  <Text
                    fontWeight={400}
                    fontSize={{ lg: "18px", md: "18px", base: "16px" }}
                  >
                    Marvin is in charge of building the technical infrastructure
                    that makes this movie possible.
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Wrap>
        </Stack>

        <Container py={10} maxW="3xl">
          <Heading pb={2} textAlign="center">
            FAQs
          </Heading>

          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem border="none">
              <AccordionButton>
                <Stack alignItems="center" direction="row">
                  <AccordionIcon
                    fontSize={{ lg: "4rem", md: "4rem", base: "2.5rem" }}
                  />
                  <Heading
                    fontWeight={400}
                    fontSize={{ lg: "2rem", md: "2rem", base: "1.5rem" }}
                  >
                    What is Easy Money?
                  </Heading>
                </Stack>
              </AccordionButton>
              <AccordionPanel
                fontSize={{ lg: "18px", md: "18px", base: "14px" }}
              >
                Easy money is the first African film funded completely with
                NFTs. We using this new wave of technology to build on the
                momentum of independent filmmaking. Setting an example for
                filmmakers in the African/Global film space. Holding an Easy
                Money NFT is holding a piece of history and a chance to be part
                of the new filmmaking revolution.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none">
              <AccordionButton>
                <Stack alignItems="center" direction="row">
                  <AccordionIcon
                    fontSize={{ lg: "4rem", md: "4rem", base: "2.5rem" }}
                  />
                  <Heading
                    fontWeight={400}
                    fontSize={{ lg: "2rem", md: "2rem", base: "1.5rem" }}
                  >
                    When is the NFT launching?
                  </Heading>
                </Stack>
              </AccordionButton>
              <AccordionPanel
                fontSize={{ lg: "18px", md: "18px", base: "14px" }}
              >
                The NFTs will be available to mint in November 2022. Join the
                Discord to get updates.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none">
              <AccordionButton>
                <Stack alignItems="center" direction="row">
                  <AccordionIcon
                    fontSize={{ lg: "4rem", md: "4rem", base: "2.5rem" }}
                  />
                  <Heading
                    fontWeight={400}
                    fontSize={{ lg: "2rem", md: "2rem", base: "1.5rem" }}
                  >
                    How much is the mint price?
                  </Heading>
                </Stack>
              </AccordionButton>
              <AccordionPanel
                fontSize={{ lg: "18px", md: "18px", base: "14px" }}
              >
                The NFTs come in three tiers with different utilities and
                rarities. 0.12 ETH, 1 ETH, and 5 ETH.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none">
              <AccordionButton>
                <Stack alignItems="center" direction="row">
                  <AccordionIcon
                    fontSize={{ lg: "4rem", md: "4rem", base: "2.5rem" }}
                  />
                  <Heading
                    textAlign={{ base: "left", lg: "none", md: "none" }}
                    fontSize={{ lg: "2rem", md: "2rem", base: "1.4rem" }}
                    fontWeight={400}
                  >
                    How does the IP and Profit sharing work?
                  </Heading>
                </Stack>
              </AccordionButton>
              <AccordionPanel
                fontSize={{ lg: "18px", md: "18px", base: "14px" }}
              >
                The IP and life time profit of the film will be shared 50/50
                between the team and NFT holders. As an NFT holder your share is
                determined by the overall monetrary contribution to the film (in
                this case, what tier of NFT you own and how many you own). The
                higher your NFT tier and the more NFTs you own the greater your
                share.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none">
              <AccordionButton>
                <Stack alignItems="center" direction="row">
                  <AccordionIcon
                    fontSize={{ lg: "4rem", md: "4rem", base: "2.5rem" }}
                  />
                  <Heading
                    fontWeight={400}
                    textAlign={{ base: "left", lg: "none", md: "none" }}
                    fontSize={{ lg: "2rem", md: "2rem", base: "1.4rem" }}
                  >
                    How will profit be collected?
                  </Heading>
                </Stack>
              </AccordionButton>
              <AccordionPanel
                fontSize={{ lg: "18px", md: "18px", base: "14px" }}
              >
                After our festival run, all present and future profit will be
                continuosly converted to ETH and NFT holders will be able to
                claim from their dashboard based on NFTs they own.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none">
              <AccordionButton>
                <Stack alignItems="center" direction="row">
                  <AccordionIcon
                    fontSize={{ lg: "4rem", md: "4rem", base: "2.5rem" }}
                  />
                  <Heading
                    fontWeight={400}
                    textAlign={{ base: "left", lg: "none", md: "none" }}
                    fontSize={{ lg: "2rem", md: "2rem", base: "1.4rem" }}
                  >
                    Who is behind this project?
                  </Heading>
                </Stack>
              </AccordionButton>
              <AccordionPanel
                fontSize={{ lg: "18px", md: "18px", base: "14px" }}
              >
                Easy Money is a team effort made by African filmmakers and Web3
                communities. It’s written and directed by Lenny Johnson.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none">
              <AccordionButton>
                <Stack alignItems="center" direction="row">
                  <AccordionIcon
                    fontSize={{ lg: "4rem", md: "4rem", base: "2.5rem" }}
                  />
                  <Heading
                    fontWeight={400}
                    textAlign={{ base: "left", lg: "none", md: "none" }}
                    fontSize={{ lg: "2rem", md: "2rem", base: "1.4rem" }}
                  >
                    How can I support this project?
                  </Heading>
                </Stack>
              </AccordionButton>
              <AccordionPanel
                fontSize={{ lg: "18px", md: "18px", base: "14px" }}
              >
                You can mint an Easy Money NFT when we launch. You can also
                share this project with your friends and on social media. Teach
                them about NFTs and Web3 and contribute to this new revolution.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>

        <Stack alignItems="center">
          <Button
            width="13rem"
            rounded="full"
            bgColor="#2079FF"
            leftIcon={<BsTwitter />}
          >
            Share on Twitter
          </Button>
        </Stack>

        <Stack
          alignItems="center"
          py={{ lg: 8, md: 8, base: 4 }}
          spacing={{ lg: 8, md: 8, base: 6 }}
          as="footer"
        >
          <Heading
            fontWeight={400}
            fontSize={{ base: "2rem", md: "3rem", lg: "3rem" }}
          >
            Join the mailing list
          </Heading>
          <Text fontSize={{ lg: "18px", md: "18px", base: "14px" }}>
            Keep up with all the Easy Money updates
          </Text>
          <Stack direction="row" border="2px" borderRadius="full">
            <Input focusBorderColor="none" border="none" />
            <Button bgColor="white" color="black" borderRadius="full">
              JOIN
            </Button>
          </Stack>
          <Stack
            py={4}
            alignSelf="center"
            spacing={{ lg: 12, md: 12, base: 8 }}
            direction="row"
          >
            <IconButton
              fontSize={{ lg: "5xl", md: "5xl", base: "4xl" }}
              variant="ghost"
              icon={<BsTwitter />}
            />
            <IconButton
              pt={1}
              fontSize={{ lg: "5xl", md: "5xl", base: "4xl" }}
              variant="ghost"
              icon={<FaDiscord />}
            />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
