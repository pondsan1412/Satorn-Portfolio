import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, MoonIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoGithub, IoLogoFacebook } from 'react-icons/io5'
import thumbyugimeow from '../public/images/works/yugimeow_web.png'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        What&apos;s up! I&apos;m an experienced programmer living in bangkok!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Satorn Sukkang
          </Heading>
          <p>Web Developer | Passionate Discord Bot Developer & Musician</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/Satorn.png"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Satorn Sukkang is a freelance programmer from Bangkok specializing in website 
        development and Discord bots. His projects include notable bots like Yugimeow and WR MK8DX. {' '}   
          <Link as={NextLink} href="/works/yugimeow" passHref scroll={false}>
            Yugimeow
          </Link>
          .  and a mario kart bot called {' '}
          <Link as={NextLink} href="https://github.com/pondsan1412/MK8DX-WR-Bot" passHref scroll={false}>
            WR MK8DX
          </Link>
        
          . He publishes content for advertising his products and his YouTube
          channel called &quot;
          <Link
            as={NextLink}
            href="https://www.youtube.com/@PondThunder1"
            passHref
            target="_blank"
          >
            Pond Thunder.
          </Link>
          &quot;.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <Section delay={0.2}>
      <BioSection>
        <BioYear>2024</BioYear>
        Deployed bot called Yugimeow
      </BioSection>
      <BioSection>
        <BioYear>2022</BioYear>
        Deployed bot called WR MK8DX
      </BioSection>
      <BioSection>
        <BioYear>2021</BioYear>
        I made my first Discord bot called SLx bot for use in the Mario Kart SLx team server
      </BioSection>
      <BioSection>
        <BioYear>2020</BioYear>
        First time Learning python, javascript, html, css
      </BioSection>
      <BioSection>
        <BioYear>2019</BioYear>
        Internships that are not related to technology
      </BioSection>
      <BioSection>
        <BioYear>2016</BioYear>
        Graduated from Pasanusornbangkae Commercial Technological College
        <p></p>
        (เทคโนโลยีพานิชย์การภาษานุสรณ์บางแค)
      </BioSection>
      <BioSection>
        <BioYear>2015</BioYear>
        First time learning about .NET and building an application that could cheat in a game.
      </BioSection>
      <BioSection>
        <BioYear>2002</BioYear>
        Enrolled at Wat Muang School, Primary Education level
      </BioSection>
        </Section>

        </Section>


      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
      
          <Link href="https://www.facebook.com/pondcomp/videos/570518539762969" target="_blank">
            Guitar
          </Link>
           ,
           Virtual drum,{' '}
          
          <Link href="https://www.youtube.com/watch?v=9pUq05J6-Ro" target="_blank">
            piano(virtual piano),{' '}
          
          </Link>
          <Link href="https://www.youtube.com/watch?v=LkGdm3X1qxM&feature=youtu.be" target="_blank">
            eSport (valorant)
          </Link>
          
          
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Social
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/pondsan1412" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @pondsan1412
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/Pondmk1412" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @Pondmk1412
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://facebook.com/pondcomp" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                @ศธร สุขขัง
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          
          <GridItem
            href="https://yugimeow.vercel.app"
            title="Yugimeow"
            thumbnail={thumbyugimeow}
          >
            A Yu-Gi-Oh card&apos;s text in thai langauge!
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Join yugimeow&apos;s member!
        </Heading>
        <p>
          become yugimeow&apos;s guardian! {' '}
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://yugimeow.vercel.app/support"
            scroll={false}
            leftIcon={<MoonIcon />}
            colorScheme="teal"
          >
            Jump to donate page
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
