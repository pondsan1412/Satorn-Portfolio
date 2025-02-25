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
  useColorModeValue,
  Progress,
  Text,
  Stack
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoGithub, IoLogoFacebook, IoCloudyNight } from 'react-icons/io5'
import thumbyugimeow from '../public/images/works/yugimeow_web.png'
import Image from 'next/image'
import chatbub from '../public/images/works/ch.png'


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
        Coding &lt; Sleeping 💀
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Satorn Sukkang
          </Heading>
          <p> passionate with coding/learning </p>
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
              src="/images/satorn_old.jpg"
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
          Satorn Sukkang is a hired back-end developer
          specializing in developing robust server-side solutions. 
          Previously, he has worked as a freelance programmer and delivery guy.
          Notable projects include the <Link href="https://yugimeow.vercel.app/">
          Yugimeow</Link>,
          <Link href="https://github.com/pondsan1412/MK8DX-WR-Bot"> WRMKBOT</Link>,
          <Link href="https://www.pxteam.site/"> MK8DXSoundboard {' '} </Link>
          He also manages a YouTube channel called 
          <Link
            as={NextLink}
            href="https://www.youtube.com/@PondThunder1"
            passHref
            target="_blank"
          >
            {'  '}Pond Thunder
          </Link>
          {' '} where he publishes content to promote his projects.
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
        <BioSection>
          <BioYear>present</BioYear>
          back-end developer at <Link href='https://www.masscorporation.co.th/'>
          Mass Corporation Co., Ltd.
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2020-2024</BioYear>
          Freelance programmer and worked as delivery guy
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Internships unrelated to technology
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Graduated from Pasanusornbangkae Commercial Technological College
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          First time learning about .NET and building a game cheat application.
        </BioSection>
        <BioSection>
          <BioYear>199x</BioYear>
          Born in Bangkok, Thailand
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My Skills
        </Heading>
        <Box mb={6}>
          <Text fontSize="lg" fontWeight="bold" mb={4}>Python Frameworks</Text>
          
          <Stack spacing={4}>
            <Box>
              <Text mb={1}>Flask</Text>
              <Progress 
                value={65} 
                colorScheme="green" 
                hasStripe 
                isAnimated 
                size="sm"
                css={{
                  '& > div': {
                    animation: 'progress-stripe 0.5s linear infinite', 
                  },
                  '@keyframes progress-stripe': {
                    from: {
                      backgroundPosition: '1rem 0'
                    },
                    to: {
                      backgroundPosition: '0 0'
                    }
                  }
                }}
              />
            </Box>
            
            <Box>
              <Text mb={1}>Django</Text>
              <Progress 
                value={15} 
                colorScheme="blue" 
                hasStripe 
                isAnimated 
                size="sm"
                css={{
                  '& > div': {
                    animation: 'progress-stripe 0.9s linear infinite',
                },
                '@keyframes progress-stripe': {
                  from: {
                    backgroundPosition: '1rem 0'
                  },
                  to: {
                    backgroundPosition: '0 0'
                  }
                }
              }} 
              />
            </Box>
            
            <Box>
              <Text mb={1}>FastAPI</Text>
              <Progress 
                value={85} 
                colorScheme="purple" 
                hasStripe 
                isAnimated 
                size="sm"
                css={{
                  '& > div': {
                    animation: 'progress-stripe 0.1s linear infinite',
                },
                '@keyframes progress-stripe': {
                  from: {
                    backgroundPosition: '1rem 0'
                  },
                  to: {
                    backgroundPosition: '0 0'
                  }
                }}} 
              />
            </Box>
            
            <Box>
              <Text mb={1}>PyTorch</Text>
              <Progress
                value={25}
                colorScheme="red"
                hasStripe
                isAnimated
                size="sm"
                css={{
                  '& > div': {
                    animation: 'progress-stripe 0.7s linear infinite',
                },
                '@keyframes progress-stripe': {
                  from: {
                    backgroundPosition: '1rem 0'
                  },
                  to: {
                    backgroundPosition: '0 0'
                  }
                }}}
                />
            </Box>
            <Box>
              <Text mb={1}>PySerial</Text>
              <Progress
                value={10}
                colorScheme="yellow"
                hasStripe
                isAnimated
                size="sm"
                css={{
                  '& > div': {
                    animation: 'progress-stripe 0.5s linear infinite',
                },
                '@keyframes progress-stripe': {
                  from: {
                    backgroundPosition: '1rem 0'
                  },
                  to: {
                    backgroundPosition: '0 0'
                  }
                }}}
                />
            </Box>
            <p></p>
            <Text fontSize="lg" fontWeight="bold" mb={4}>IoT & Libraries </Text>
            <Box>
              <Text mb={1}>Paho MQTT</Text>
              <Progress
                value={50}
                colorScheme="green"
                hasStripe
                isAnimated
                size="sm"
                css={{
                  '& > div': {
                    animation: 'progress-stripe 0.5s linear infinite',
                },
                '@keyframes progress-stripe': {
                  from: {
                    backgroundPosition: '1rem 0'
                  },
                  to: {
                    backgroundPosition: '0 0'
                  }
                }}}
                />
            </Box>
            <Box>
              <Text mb={1}>OpenCV</Text>
              <Progress
                value={40}
                colorScheme="blue"
                hasStripe
                isAnimated
                size="sm"
                css={{
                  '& > div': {
                    animation: 'progress-stripe 0.9s linear infinite',
                },
                '@keyframes progress-stripe': {
                  from: {
                    backgroundPosition: '1rem 0'
                  },
                  to: {
                    backgroundPosition: '0 0'
                  }
                }}}
                />
            </Box>
            <p></p>
            <Text fontSize="lg" fontWeight="bold" mb={4}>Javascript Frameworks</Text>
            <Box>
              <Text mb={1}>React</Text>
              <Progress
                value={20}
                colorScheme="teal"
                hasStripe
                isAnimated
                size="sm"
                css={{
                  '& > div': {
                    animation: 'progress-stripe 0.9s linear infinite',
                },
                '@keyframes progress-stripe': {
                  from: {
                    backgroundPosition: '1rem 0'
                  },
                  to: {
                    backgroundPosition: '0 0'
                  }
                }}}

                />
            </Box>
            <Box>
              <Text mb={1}>Next.js</Text>
              <Progress
                value={40}
                colorScheme="gray"
                hasStripe
                isAnimated
                size="sm"
                css={{
                  '& > div': {
                    animation: 'progress-stripe 0.9s linear infinite',
                },
                '@keyframes progress-stripe': {
                  from: {
                    backgroundPosition: '1rem 0'
                  },
                  to: {
                    backgroundPosition: '0 0'
                  }
                }}}
                />

            </Box>
            <Box>
              <Text mb={1}>Node.js & Express</Text>
              <Progress
                value={60}
                colorScheme="green"
                hasStripe
                isAnimated
                size="sm"
                css={{
                  '& > div': {
                    animation: 'progress-stripe 0.9s linear infinite',
                },
                '@keyframes progress-stripe': {
                  from: {
                    backgroundPosition: '1rem 0'
                  },
                  to: {
                    backgroundPosition: '0 0'
                  }
                }}}
                />
            </Box>
            

          </Stack>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          <Link href="https://www.facebook.com/pondcomp/videos/570518539762969" target="_blank">
            Guitar
          </Link>
          , Virtual drum,{' '}
          <Link href="https://www.youtube.com/watch?v=9pUq05J6-Ro" target="_blank">
            Piano (virtual piano)
          </Link>
          , and{' '}
          <Link href="https://www.youtube.com/watch?v=LkGdm3X1qxM&feature=youtu.be" target="_blank">
            eSport (Valorant)
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
            แปลไทยการ์ดยูกิ!!! 
          </GridItem>
        </SimpleGrid>
       
        <Box align="left" my={3}>
          
        </Box>

        <SimpleGrid columns={[1,2,2]} gap = {6}>
          <GridItem
          href="https://www.youtube.com/watch?v=quJjogAaZjQ&t=89s"
          title="Chatbubbles Web Application"
          thumbnail={chatbub}
          >
            chat pop up green screen use for making any video!
          </GridItem>
        </SimpleGrid>
        <Heading as="h3" variant="section-title">
          Try chatbubbles, it&apos;s free!
        </Heading>
        <Box align="" my={4}>
        </Box>
        <Box align="left" my={4}>
          <Button
          as={NextLink}
          href="https://www.youtube.com/watch?v=quJjogAaZjQ&t=89s"
          scroll={false}
          leftIcon={<IoCloudyNight/>}
          colorScheme='teal'
          >
            Watch example for Chatbubbles web app!
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
