import Head from "next/head";
import {
  AspectRatio,
  chakra,
  Container,
  Heading,
  Link,
  Text,
  Stack,
  Button,
  Image,
  Icon,
  IconButton,
  Center,
  Wrap,
} from "@chakra-ui/react";
import { BsTwitter, BsStarFill } from "react-icons/bs";
import { FaDiscord, FaAngleDown } from "react-icons/fa";
import ArrowIcon from "icons/arrow";
import HeaderText from "components/header-text";

export default function Home() {
  return (
    <>
      <Head>
        <title>Easy Money</title>
        <meta
          name="description"
          content="A desperate man attempts a robbery with an old friend. Everything goes wrong. Be part of the first African movie funded with NFTS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW="container.xl">
        <chakra.header
          position="relative"
          bgImage="linear-gradient(60deg, rgba(0, 0, 0, 0.4) 38%, rgba(0, 0, 0, 0.1) 76%), url(/images/car.png)"
          bgRepeat="no-repeat"
          bgSize={{ base: "contain", md: "60%" }}
          bgPosition={{ base: "100% 00%", md: "100% 0%" }}
        >
          <Stack py={4} justify="end" alignItems="center" spacing={2} direction="row">
            <IconButton
              as="a"
              href="https://twitter.com/easymoneymovie"
              rounded="full"
              size="lg"
              fontSize="2xl"
              variant="ghost"
              icon={<BsTwitter />}
            />
            <IconButton
              as="a"
              href="https://discord.com/invite/8Vt2bhmPvZ"
              rounded="full"
              size="lg"
              fontSize="2xl"
              variant="ghost"
              icon={<FaDiscord />}
            />
          </Stack>

          <Stack mt={8} spacing={{ base: 4, md: 16 }} px={{ base: 4, md: 0 }}>
            <HeaderText w={{ base: "100%", md: "431px" }} height="55px" />

            <Stack spacing={10} maxW="md">
              <Text fontSize="2xl" fontWeight="500" letterSpacing="wide">
                <chakra.span color="red">&quot; </chakra.span>
                LIFE GETS WORSE BEFORE IT GETS BETTER...BUT SOMETIMES IT JUST GETS WORSE.<chakra.span color="red"> &quot;</chakra.span>
              </Text>

              <Text mt={8} fontWeight="500">
                Be part of the first African movie funded with NFTs.
              </Text>

              <chakra.div textAlign={{ base: "center", md: "unset" }}>
                <Button
                  as="a"
                  href="https://discord.com/invite/8Vt2bhmPvZ"
                  target="_blank"
                  _active={{ opacity: 0.8 }}
                  _hover={{ opacity: 0.8 }}
                  color="black"
                  bgColor="#D9D9D9"
                  px={8}
                  rounded="full"
                >
                  JOIN OUR DISCORD
                </Button>
              </chakra.div>
            </Stack>
          </Stack>
        </chakra.header>

        <chakra.section id="nfts" my={{ base: 24, md: 40 }}>
          <chakra.header textAlign="center" maxW="xl" mx="auto">
            <Heading as="h2" textTransform="uppercase">
              THE MINT - NOVEMBER 30TH
            </Heading>

            <Text mt={4}>
              Each NFT you mint helps get this movie made. Your contribution also gives you a share of the IP and life time revenue from the
              film.
            </Text>
          </chakra.header>

          <Stack
            justify="center"
            direction={{ base: "column", md: "row" }}
            mt={{ base: 14, md: 16 }}
            px={{ base: 4, md: 0 }}
            spacing={{ base: 14, md: 6 }}
            alignItems={{ base: "center", md: "stretch" }}
          >
            <Stack
              w={{ md: "sm" }}
              spacing={6}
              bg="linear-gradient(174.55deg, #92FFA6 1.75%, #12e239 91.36%)"
              rounded="25px"
              shadow="md"
              py={5}
            >
              <chakra.div px={6}>
                <Text fontWeight="500" fontSize="2xl" textTransform="uppercase" color="#000">
                  Greed
                </Text>
                <Text fontSize="xl" fontWeight="300" color="#000">
                  0.12 ETH
                </Text>
              </chakra.div>

              <Image alt="greed nft image" w="100%" src="/images/greed.png" />

              <chakra.div px={5} color="#000">
                <Text fontWeight={300} fontSize="xl" color="#000" textAlign="center">
                  Utility
                </Text>

                <Stack mt={6} spacing={6}>
                  <Stack direction="row" alignItems="center">
                    <Icon as={BsStarFill} color="#000" boxSize={3} />
                    <Text fontSize="sm">Access to the gated Discord channel</Text>
                  </Stack>

                  <Stack direction="row" alignItems="center">
                    <Icon as={BsStarFill} color="#000" boxSize={3} />
                    <Text fontSize="sm">A private link to watch the finished movie</Text>
                  </Stack>

                  <Stack direction="row" alignItems="center">
                    <Icon as={BsStarFill} color="#000" boxSize={3} />
                    <Text fontSize="sm">Your name in the credits of the film</Text>
                  </Stack>

                  <Stack direction="row" alignItems="center">
                    <Icon as={BsStarFill} color="#000" boxSize={3} />
                    <Text fontSize="sm">IP share of the film (per # of NFT owned)</Text>
                  </Stack>

                  <Stack direction="row" alignItems="center">
                    <Icon as={BsStarFill} color="#000" boxSize={3} />
                    <Text fontSize="sm">Revenue share of the film (per # of NFT owned)</Text>
                  </Stack>

                  <Stack direction="row" alignItems="center">
                    <Icon as={BsStarFill} color="#000" boxSize={3} />
                    <Text fontSize="sm">A BIG Twitter shoutout from the us!</Text>
                  </Stack>
                </Stack>
              </chakra.div>

              <chakra.div pt={12} mt="auto !important" color="#000" textAlign="center">
                <Text fontSize="lg">0.12 ETH</Text>
                <Text mt={2}>999 available</Text>
              </chakra.div>
            </Stack>

            <Stack
              w={{ md: "sm" }}
              py={5}
              shadow="md"
              spacing={6}
              rounded="25px"
              bg="linear-gradient(174.96deg, #FF7C7D 1.61%, #e43f3f 99.99%, rgba(170, 0, 1, 0) 100%)"
            >
              <chakra.div px={6}>
                <Text fontWeight="500" fontSize="2xl" textTransform="uppercase" color="#000">
                  Wrath
                </Text>
                <Text fontSize="xl" fontWeight="300" color="#000">
                  1 ETH
                </Text>
              </chakra.div>

              <Image alt="wrath nft image" w="100%" src="/images/wrath.png" />

              <chakra.div px={5} color="#000">
                <Text fontWeight={300} fontSize="xl" color="#000" textAlign="center">
                  Utility
                </Text>

                <Stack mt={6} spacing={6}>
                  <Stack direction="row" alignItems="center">
                    <Icon as={BsStarFill} color="#000" boxSize={3} />
                    <Text fontSize="sm">Everything on the GREED tier +</Text>
                  </Stack>

                  <Stack direction="row" alignItems="center">
                    <Icon as={BsStarFill} color="#000" boxSize={3} />
                    <Text fontSize="sm">Video Q & A with crew </Text>
                  </Stack>

                  <Stack direction="row" alignItems="center">
                    <Icon as={BsStarFill} color="#000" boxSize={3} />
                    <Text fontSize="sm">A limited edition Easy Money T-Shirt and Poster</Text>
                  </Stack>

                  <Stack direction="row" alignItems="center">
                    <Icon as={BsStarFill} color="#000" boxSize={3} />
                    <Text fontSize="sm">Associate Producer credits in the film</Text>
                  </Stack>

                  <Stack direction="row" alignItems="center">
                    <Icon as={BsStarFill} color="#000" boxSize={3} />
                    <Text fontSize="sm">Invite to cast & crew screening in Lagos</Text>
                  </Stack>

                  <Stack direction="row" alignItems="center">
                    <Icon as={BsStarFill} color="#000" boxSize={3} />
                    <Text fontSize="sm">Invite to come on set for a day. Watch behind the scenes in real time</Text>
                  </Stack>
                </Stack>
              </chakra.div>

              <chakra.div pt={12} mt="auto !important" color="#000" textAlign="center">
                <Text fontSize="lg">1 ETH</Text>
                <Text mt={2}>20 available</Text>
              </chakra.div>
            </Stack>

            <Stack
              w={{ md: "sm" }}
              py={5}
              shadow="md"
              spacing={6}
              rounded="25px"
              bg="linear-gradient(175.16deg, #C29DFF 1.54%, #7b3fe4 93.8%)"
            >
              <chakra.div px={6}>
                <Text fontWeight="500" fontSize="2xl" textTransform="uppercase" color="#000">
                  Envy
                </Text>
                <Text fontSize="xl" fontWeight="300" color="#000">
                  5 ETH
                </Text>
              </chakra.div>

              <Image alt="wrath nft image" w="100%" src="/images/envy.png" />

              <chakra.div px={5} color="#000">
                <Text fontWeight={300} fontSize="xl" color="#000" textAlign="center">
                  Utility
                </Text>

                <Stack mt={6} spacing={6}>
                  <Stack direction="row" alignItems="center">
                    <Icon as={BsStarFill} color="#000" boxSize={3} />
                    <Text fontSize="sm">Everything on the WRATH tier +</Text>
                  </Stack>

                  <Stack direction="row" alignItems="center">
                    <Icon as={BsStarFill} color="#000" boxSize={3} />
                    <Text fontSize="sm">Get 1 of 5 physical memrobilia from the film</Text>
                  </Stack>

                  <Stack direction="row" alignItems="center">
                    <Icon as={BsStarFill} color="#000" boxSize={3} />
                    <Text fontSize="sm">An invite to festival screenings</Text>
                  </Stack>

                  <Stack direction="row" alignItems="center">
                    <Icon as={BsStarFill} color="#000" boxSize={3} />
                    <Text fontSize="sm">Director will come to your hometown for a screening of the film for you.</Text>
                  </Stack>
                </Stack>
              </chakra.div>

              <chakra.div pt={12} mt="auto !important" color="#000" textAlign="center">
                <Text fontSize="lg">5 ETH</Text>
                <Text mt={2}>5 available</Text>
              </chakra.div>
            </Stack>
          </Stack>

          <chakra.div maxW="md" mt={16} mx="auto">
            <Text fontWeight="700" textAlign="center" fontSize="xl">
              *Unminted NFTs will be burned on 31st December 2022*
            </Text>
          </chakra.div>

          <chakra.div maxW="md" mt={{ base: 12, md: 16 }} mx="auto" textAlign="center">
            <Text>Join our discord to stay updated on our progress and also stand a chance to win limited edition prizes.</Text>

            <Button
              as="a"
              href="https://discord.com/invite/8Vt2bhmPvZ"
              target="_blank"
              mt={6}
              _active={{ opacity: 0.8 }}
              _hover={{ opacity: 0.8 }}
              color="black"
              bgColor="#D9D9D9"
              px={8}
              rounded="full"
            >
              JOIN DISCORD
            </Button>
          </chakra.div>
        </chakra.section>

        <chakra.section id="movie" my={{ base: 24, md: 40 }} position="relative">
          <chakra.div position="absolute" top={-20} left={0} display={{ base: "none", md: "block" }}>
            <Image width="12rem" alt="bullets" src="/images/bullets.png" />
          </chakra.div>

          <chakra.header spacing={7} textAlign="center" maxW="xl" mx="auto">
            <Heading as="h2" textTransform="uppercase">
              The movie
            </Heading>
          </chakra.header>

          <Stack mt={16} spacing={4} justify="space-around" align="center" direction={{ base: "column-reverse", md: "row" }}>
            <Stack textAlign={{ base: "center", md: "left" }} spacing={4} w={{ md: "md" }}>
              <Text fontWeight="500" fontSize="xl">
                Plot
              </Text>

              <Text fontWeight="500">
                A desperate man attempts a robbery with an old friend. <chakra.i>Everything goes wrong.</chakra.i>
              </Text>
            </Stack>

            <chakra.div w={{ base: "xs", md: "sm" }}>
              <Image w="full" src="/images/gun.png" alt="An unloaded gun with bullets around" />
            </chakra.div>
          </Stack>

          <Stack mt={16} spacing={4} justify="space-around" align="center" direction={{ base: "column", md: "row" }}>
            <chakra.div w={{ base: "2xs", md: "sm" }}>
              <Image w="full" src="/images/crowbar.png" alt="An unloaded gun with bullets around" />
            </chakra.div>

            <Stack spacing={4} w={{ md: "md" }} textAlign={{ base: "center", md: "right" }}>
              <Text fontWeight="500" fontSize="xl">
                A Nigerian story
              </Text>

              <Text fontWeight="500">A film about wealth inequality, urban violence and escalating consequences.</Text>
            </Stack>
          </Stack>
        </chakra.section>

        <chakra.section id="video" my={{ base: 24, md: 40 }} textAlign="center">
          <AspectRatio mx="auto" maxW="container.md" ratio={723 / 406}>
            <iframe
              src="https://player.vimeo.com/video/766254342?h=9473ff590a"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </AspectRatio>
        </chakra.section>

        <chakra.section
          id="roadmap"
          pt={{ base: 0, md: 0 }}
          pb={{ base: 12, md: 20 }}
          textAlign="center"
          bgSize={{ base: "cover", md: "contain" }}
          bgRepeat="no-repeat"
          bgPosition="center"
          bgImage="url(/images/map.png)"
          mx={{ base: "-16px", md: 0 }}
        >
          <Heading as="h2" textTransform="uppercase">
            Road map
          </Heading>

          <Stack
            my={16}
            textAlign="center"
            divider={
              <Center border="0">
                <ArrowIcon width="12px" height="48px" />
              </Center>
            }
          >
            <chakra.div>
              <Text fontStyle="italic" fontSize={{ lg: "none", md: "none", base: "sm" }}>
                November 2022
              </Text>
              <Heading as="h4" fontSize={{ lg: "3xl", md: "3xl", base: "2xl" }} textTransform="uppercase">
                Nft mint
              </Heading>
            </chakra.div>

            <chakra.div>
              <Text fontSize={{ lg: "none", md: "none", base: "sm" }}>January - February 2023</Text>
              <Heading as="h4" fontSize={{ lg: "3xl", md: "3xl", base: "2xl" }} textTransform="uppercase">
                Pre-Production
              </Heading>
            </chakra.div>

            <chakra.div>
              <Text fontSize={{ lg: "none", md: "none", base: "sm" }} fontStyle="italic">
                March - May 2023
              </Text>
              <Heading as="h4" fontSize={{ lg: "3xl", md: "3xl", base: "2xl" }} textTransform="uppercase">
                Production
              </Heading>
            </chakra.div>

            <chakra.div>
              <Text fontSize={{ lg: "none", md: "none", base: "sm" }} fontStyle="italic">
                June - July 2023
              </Text>
              <Heading as="h4" fontSize={{ lg: "3xl", md: "3xl", base: "2xl" }} textTransform="uppercase">
                Post-Production
              </Heading>
            </chakra.div>

            <chakra.div>
              <Text fontSize={{ lg: "none", md: "none", base: "sm" }} fontStyle="italic">
                December 2023...
              </Text>
              <Heading as="h4" fontSize={{ lg: "3xl", md: "3xl", base: "2xl" }} textTransform="uppercase">
                Festival Premiere
              </Heading>
            </chakra.div>

            <chakra.div>
              <Text fontSize={{ lg: "none", md: "none", base: "sm" }} fontStyle="italic">
                Ongoing...
              </Text>
              <Heading as="h4" fontSize={{ lg: "3xl", md: "3xl", base: "2xl" }} textTransform="uppercase">
                IP ownership X Profit share
              </Heading>
            </chakra.div>
          </Stack>

          <Container textAlign="center" maxW="container.md">
            <Text fontSize={{ lg: "none", md: "none", base: "13px" }}>
              50% of IP rights and lifetime revenue of the films goes to NFT holders. Profit from the film will be converted to ETH and
              available to claim by NFT holders.
            </Text>
          </Container>
        </chakra.section>

        <chakra.section id="team" my={{ base: 24, md: 40 }}>
          <chakra.header spacing={7} textAlign="center" maxW="xl" mx="auto">
            <Heading as="h2" textTransform="uppercase">
              Behind The Scenes
            </Heading>

            <Text mt={4}>Easy Money is a collaborative work by Nigerian creatives.</Text>
          </chakra.header>

          <Wrap mt={{ base: 14, md: 16 }} justify="center" spacing={{ md: 16, base: 10 }} px={{ base: 4, md: 0 }}>
            <Stack w="xs" color="#000" border="2px" borderColor="#fff" borderRadius="25px" overflow="hidden">
              <Image alt="A picture of Lenny" src="/images/Lenny.png" />

              <Stack h="full" bgColor="#D0B396" py={4} px={8}>
                <Text fontWeight="500">
                  <Link display="block" href="https://twitter.com/TheLennyJohnson" target="_blank" textDecoration="underline">
                    Lenny Johnson
                  </Link>
                  Writer and Director
                </Text>

                <Text fontWeight="300" pt={2}>
                  From Startups to DAOs to music & films. <br />
                  <br /> Lenny brings his multidisciplinary approach to the world of film making.
                </Text>
              </Stack>
            </Stack>

            <Stack width="xs" color="#000" border="2px" borderColor="#fff" borderRadius="25px" overflow="hidden">
              <Image alt="A picture of Monak" src="/images/Monak.png" />

              <Stack h="full" bgColor="#D0B396" py={4} px={8}>
                <Text fontWeight="500">
                  <Link
                    display="block"
                    href="https://open.spotify.com/artist/7d8xWmjn4YwNJ9ei4sWmJP"
                    target="_blank"
                    textDecoration="underline"
                  >
                    Monak
                  </Link>
                  Actor & Composer
                </Text>

                <Text fontWeight="300" pt={2}>
                  Monak is a Lagos based artist and producer who does everything his own way. <br />
                  <br />
                  When not making beats, he&apos;s leveraging his acting talents.
                </Text>
              </Stack>
            </Stack>

            <Stack width="xs" color="#000" border="2px" borderColor="#fff" borderRadius="25px" overflow="hidden">
              <Image alt="A picture of Versaphile" src="/images/Versaphile.png" />

              <Stack h="full" bgColor="#D0B396" py={4} px={8}>
                <Text fontWeight="500">
                  <Link display="block" href="https://www.instagram.com/versaphile/" target="_blank" textDecoration="underline">
                    Versaphile
                  </Link>
                  Digital Artist
                </Text>

                <Text fontWeight="300" pt={2}>
                  Versaphile brings his intricate world building powers to the Easy Money NFT collection. <br />
                  <br />
                  Marvel at their splendor.
                </Text>
              </Stack>
            </Stack>

            <Stack width="xs" color="#000" border="2px" borderColor="#fff" borderRadius="25px" overflow="hidden">
              <Image alt="A picture of Marvin Kome" src="/images/Kome.png" />

              <Stack h="full" bgColor="#D0B396" py={4} px={8}>
                <Text fontWeight="500">
                  <Link display="block" href="https://twitter.com/marvin_kome" target="_blank" textDecoration="underline">
                    Marvin Kome
                  </Link>
                  Engineering
                </Text>

                <Text fontWeight="300" pt={2}>
                  Marvin is in charge of building the technical infrastructure that makes this movie possible.
                </Text>
              </Stack>
            </Stack>
          </Wrap>
        </chakra.section>

        <chakra.section id="faq" my={{ base: 24, md: 40 }}>
          <chakra.header textAlign="center" maxW="xl" mx="auto">
            <Heading as="h2" textTransform="uppercase">
              FAQs
            </Heading>
          </chakra.header>

          <Stack mx="auto" maxW="container.md" mt={{ base: 14, md: 16 }} spacing={{ base: 10, md: 12 }}>
            <Stack spacing={{ base: 4, md: 8 }}>
              <Stack alignItems="center" direction="row" px={3} spacing={4}>
                <Icon as={FaAngleDown} fontSize={{ base: "3xl", md: "5xl" }} />

                <Heading as="h3" fontWeight={400} fontSize={{ base: "3xl", md: "4xl" }}>
                  What is Easy Money?
                </Heading>
              </Stack>

              <Text px={4}>
                {`Easy money is the first African film funded completely with NFTs. We're using this new wave of technology to build on the
                momentum of independent filmmaking. Setting an example for filmmakers in the African/Global film space. Holding an Easy
                Money NFT is holding a piece of history and a chance to be part of the new filmmaking revolution.`}
              </Text>
            </Stack>

            <Stack spacing={{ base: 4, md: 8 }}>
              <Stack alignItems="center" direction="row" px={3} spacing={4}>
                <Icon as={FaAngleDown} fontSize={{ base: "3xl", md: "5xl" }} />

                <Heading as="h3" fontWeight={400} fontSize={{ base: "3xl", md: "4xl" }}>
                  What is the NFT launch date?
                </Heading>
              </Stack>

              <Text px={4}>
                The NFTs will be available to mint on the 30th of November 2022.{" "}
                <chakra.a
                  target="_blank"
                  color="orange.200"
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20221130%2F20221201&details=Easy%20money%20is%20the%20first%20African%20film%20funded%20completely%20with%20NFTs.&text=Easy%20Money%20NFT%20Mint"
                  fontWeight={{ base: 600, lg: 700 }}
                >
                  Set a reminder.
                </chakra.a>
              </Text>
            </Stack>

            <Stack spacing={{ base: 4, md: 8 }}>
              <Stack alignItems="center" direction="row" px={3} spacing={4}>
                <Icon as={FaAngleDown} fontSize={{ base: "3xl", md: "5xl" }} />

                <Heading as="h3" fontWeight={400} fontSize={{ base: "3xl", md: "4xl" }}>
                  How much is the mint price?
                </Heading>
              </Stack>

              <Text px={4}>The NFTs come in three tiers with different utilities and rarities. 0.12 ETH, 1 ETH, and 5 ETH.</Text>
            </Stack>

            <Stack spacing={{ base: 4, md: 8 }}>
              <Stack alignItems="center" direction="row" px={3} spacing={4}>
                <Icon as={FaAngleDown} fontSize={{ base: "3xl", md: "5xl" }} />

                <Heading as="h3" fontWeight={400} fontSize={{ base: "3xl", md: "4xl" }}>
                  How does the IP and Profit sharing work?
                </Heading>
              </Stack>

              <Text px={4}>
                The IP and life time profit of the film will be shared 50/50 between the team and NFT holders. As an NFT holder your share
                is determined by the overall monetrary contribution to the film (in this case, what tier of NFT you own and how many you
                own). The higher your NFT tier and the more NFTs you own the greater your share.
              </Text>
            </Stack>

            <Stack spacing={{ base: 4, md: 8 }}>
              <Stack alignItems="center" direction="row" px={3} spacing={4}>
                <Icon as={FaAngleDown} fontSize={{ base: "3xl", md: "5xl" }} />

                <Heading as="h3" fontWeight={400} fontSize={{ base: "3xl", md: "4xl" }}>
                  How will I collect my share of profits?
                </Heading>
              </Stack>

              <Text px={4}>
                After our festival run, all present and future profit earned by the film will be converted to ETH and NFT holders will be
                able to claim from a dashboard.
              </Text>
            </Stack>

            <Stack spacing={{ base: 4, md: 8 }}>
              <Stack alignItems="center" direction="row" px={3} spacing={4}>
                <Icon as={FaAngleDown} fontSize={{ base: "3xl", md: "5xl" }} />

                <Heading as="h3" fontWeight={400} fontSize={{ base: "3xl", md: "4xl" }}>
                  How can I support this project?
                </Heading>
              </Stack>

              <Text px={4}>
                You can mint an Easy Money NFT. You can also share this project with your friends and on social media. Teach them about NFTs
                and Web3 and contribute to this new revolution.
              </Text>
            </Stack>
          </Stack>

          <chakra.div mt={16} textAlign="center">
            <Button
              as="a"
              target="_blank"
              href="https://twitter.com/easymoneymovie"
              width="13rem"
              rounded="full"
              colorScheme="twitter"
              leftIcon={<BsTwitter />}
            >
              Share on Twitter
            </Button>
          </chakra.div>
        </chakra.section>

        <chakra.footer my={{ base: 12, md: 20 }} maxW="xl" mx="auto">
          <chakra.header textAlign="center">
            <Heading as="h2" fontWeight={400} fontSize={{ base: "2rem", md: "3rem", lg: "3rem" }}>
              Connect With US
            </Heading>

            <Text mt={4}>Keep up with all the Easy Money updates</Text>
          </chakra.header>

          <Stack mt={6} direction="row" justifyContent="center" spacing={4}>
            <IconButton
              as="a"
              href="https://twitter.com/easymoneymovie"
              rounded="full"
              size="lg"
              fontSize="3xl"
              variant="ghost"
              icon={<BsTwitter />}
            />
            <IconButton
              as="a"
              href="https://discord.com/invite/8Vt2bhmPvZ"
              rounded="full"
              size="lg"
              fontSize="3xl"
              variant="ghost"
              icon={<FaDiscord />}
            />
          </Stack>
        </chakra.footer>
      </Container>
    </>
  );
}
