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
  Center,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Accordion,
  AccordionButton,
} from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import ArrowIcon from "icons/arrow";

export default function Home() {
  return (
    <>
      <Head>
        <title>Easy Money</title>
        <meta name="description" content="Some description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="1400px">
        <Stack
          py={4}
          justify="end"
          alignItems="center"
          spacing={6}
          direction="row"
        >
          <IconButton fontSize="3xl" variant="ghost" icon={<BsTwitter />} />
          <IconButton
            pt={1}
            fontSize="3xl"
            variant="ghost"
            icon={<FaDiscord />}
          />
        </Stack>

        <Stack
          py={6}
          alignItems="center"
          justify="space-between"
          direction="row"
        >
          <Stack>
            <Image
              width="32rem"
              src="/images/easy_money.svg"
              alt="Easy money"
            />

            <Stack pl={12} spacing={8} width="sm">
              <Text fontSize="xl">
                LIFE GETS WORSE BEFORE IT GETS BETTER...BUT SOMETIMES IT JUST
                GETS WORSE.
              </Text>

              <Text>Be part of the first African movie funded with NFTs</Text>
              <Button width="13rem" rounded="full">
                JOIN OUR DISCORD
              </Button>
            </Stack>
          </Stack>

          <Image width="28rem" alt="car image" src="/images/car.png" />
        </Stack>

        <Stack
          py={8}
          spacing={6}
          align="center"
          textAlign="center"
          width="100%"
        >
          <Heading textTransform="uppercase">The mint</Heading>
          <Stack pt={5} spacing={8} width="3xl">
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

        <SimpleGrid py={12} spacing={6} columns={3} direction="row">
          <Stack spacing={6}>
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
              <Text pt={4} fontSize="20px" alignSelf="center">
                0.12 ETH
              </Text>
              <Stack pb={8} pt={4} px={8}>
                <Text pb={2} fontWeight={500} fontSize="26px">
                  Utility
                </Text>
                <UnorderedList spacing={5}>
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

          <Stack spacing={6}>
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
              <Text pt={4} fontSize="20px" alignSelf="center">
                1 ETH
              </Text>
              <Stack pb={8} pt={4} px={8}>
                <Text pb={2} fontWeight={500} fontSize="26px">
                  Utility
                </Text>
                <UnorderedList spacing={5}>
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

          <Stack spacing={6}>
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
              <Text pt={4} fontSize="20px" alignSelf="center">
                5 ETH
              </Text>
              <Stack pb={8} pt={4} px={8}>
                <Text pb={2} fontWeight={500} fontSize="26px">
                  Utility
                </Text>
                <UnorderedList spacing={5}>
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
          <Stack spacing={8} width="lg" alignItems="center">
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
          <Heading pb={5} alignSelf="center" textTransform="uppercase">
            The movie
          </Heading>

          <Stack justify="space-between" align="center" direction="row">
            <Stack spacing={3} width="md">
              <Text fontWeight={500} fontSize="21px">
                Plot
              </Text>
              <Text fontSize="17px">
                A desperate man trying to escape the poverty of his life
                attempts a robbery with an old friend.
              </Text>
              <Text fontStyle="italic">Everything goes wrong.</Text>
            </Stack>

            <Image height="14rem" src="/images/gun.png" alt="gun" />
          </Stack>

          <Stack py={6} justify="space-between" align="center" direction="row">
            <Image alt="crow bar" src="/images/crowbar.png" />
            <Stack spacing={3} width="md">
              <Text fontWeight={500} fontSize="21px">
                Based on a true story
              </Text>
              <Text fontSize="17px">
                A film about wealth inequality, urban violence and escalating
                consequences.
              </Text>
            </Stack>
          </Stack>
        </Stack>

        <Stack align="center">
          <Image width="50rem" src="/images/snapshot.png" alt="" />
        </Stack>

        <Stack
          py={16}
          align="center"
          bgRepeat="no-repeat"
          bgPosition="center"
          bgImage="url(/images/map.png)"
        >
          <Heading fontSize="5xl" textTransform="uppercase">
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
              <Text fontStyle="italic">November 2022</Text>
              <Heading textTransform="uppercase">Nft mint</Heading>
            </chakra.div>

            <chakra.div>
              <Text fontStyle="italic">January - February 2023</Text>
              <Heading textTransform="uppercase">Pre-Production</Heading>
            </chakra.div>

            <chakra.div>
              <Text fontStyle="italic">March - May 2023</Text>
              <Heading textTransform="uppercase">Production</Heading>
            </chakra.div>

            <chakra.div>
              <Text fontStyle="italic">June - July 2023</Text>
              <Heading textTransform="uppercase">Post-Production</Heading>
            </chakra.div>

            <chakra.div>
              <Text fontStyle="italic">June - July 2023</Text>
              <Heading textTransform="uppercase">Post-Production</Heading>
            </chakra.div>

            <chakra.div>
              <Text fontStyle="italic">December 2023...</Text>
              <Heading textTransform="uppercase">Festival Premiere</Heading>
            </chakra.div>

            <chakra.div>
              <Text fontStyle="italic">Ongoing...</Text>
              <Heading textTransform="uppercase">
                IP ownership X Profit share
              </Heading>
            </chakra.div>
          </Stack>

          <Container textAlign="center" maxW="container.md">
            <Text>
              50% pf IP rights and lifetime revenue of the films goes to NFT
              holders. Profit from the film will be converted to ETH and
              available to claim by NFT holders.
            </Text>
          </Container>
        </Stack>

        <Container py={10} maxW="3xl">
          <Heading pb={2} textAlign="center">
            FAQs
          </Heading>

          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem border="none">
              <AccordionButton>
                <Stack alignItems="center" direction="row">
                  <AccordionIcon fontSize="4rem" />
                  <Heading fontWeight={400} fontSize="2rem">
                    What is Easy Money?
                  </Heading>
                </Stack>
              </AccordionButton>
              <AccordionPanel>
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
                  <AccordionIcon fontSize="4rem" />
                  <Heading fontWeight={400} fontSize="2rem">
                    When is the NFT launching?
                  </Heading>
                </Stack>
              </AccordionButton>
              <AccordionPanel>
                The NFTs will be available to mint in November 2022. Join the
                Discord to get updates.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none">
              <AccordionButton>
                <Stack alignItems="center" direction="row">
                  <AccordionIcon fontSize="4rem" />
                  <Heading fontWeight={400} fontSize="2rem">
                    How much is the mint price?
                  </Heading>
                </Stack>
              </AccordionButton>
              <AccordionPanel>
                The NFTs come in three tiers with different utilities and
                rarities. 0.12 ETH, 1 ETH, and 5 ETH.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none">
              <AccordionButton>
                <Stack alignItems="center" direction="row">
                  <AccordionIcon fontSize="4rem" />
                  <Heading fontWeight={400} fontSize="2rem">
                    How does the IP and Profit sharing work?
                  </Heading>
                </Stack>
              </AccordionButton>
              <AccordionPanel>
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
                  <AccordionIcon fontSize="4rem" />
                  <Heading fontWeight={400} fontSize="2rem">
                    How will profit be collected?
                  </Heading>
                </Stack>
              </AccordionButton>
              <AccordionPanel>
                After our festival run, all present and future profit will be
                continuosly converted to ETH and NFT holders will be able to
                claim from their dashboard based on NFTs they own.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none">
              <AccordionButton>
                <Stack alignItems="center" direction="row">
                  <AccordionIcon fontSize="4rem" />
                  <Heading fontWeight={400} fontSize="2rem">
                    Who is behind this project?
                  </Heading>
                </Stack>
              </AccordionButton>
              <AccordionPanel>
                Easy Money is a team effort made by African filmmakers and Web3
                communities. It’s written and directed by Lenny Johnson.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none">
              <AccordionButton>
                <Stack alignItems="center" direction="row">
                  <AccordionIcon fontSize="4rem" />
                  <Heading fontWeight={400} fontSize="2rem">
                    How can I support this project?
                  </Heading>
                </Stack>
              </AccordionButton>
              <AccordionPanel>
                You can mint an Easy Money NFT when we launch. You can also
                share this project with your friends and on social media. Teach
                them about NFTs and Web3 and contribute to this new revolution.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>

        <Stack alignItems="center" py={8} spacing={8} as="footer">
          <Heading fontWeight={400} fontSize="3rem">
            Connect With US
          </Heading>
          <Text fontSize="18px">Keep up with all the Easy Money updates</Text>
          <Stack py={4} alignSelf="center" spacing={12} direction="row">
            <IconButton fontSize="5xl" variant="ghost" icon={<BsTwitter />} />
            <IconButton
              pt={1}
              fontSize="5xl"
              variant="ghost"
              icon={<FaDiscord />}
            />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
