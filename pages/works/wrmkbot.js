import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon} from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="wrmkbot">
    <Container>
      <Title>
        WRMKBOT <Badge>2023</Badge>
      </Title>
      <P>
      `WRMK8DX bot`, also known as `wrmkbot`, is a Discord bot designed 
      to display global statistics for Mario Kart 8 Deluxe. It pulls data 
      from various sources, such as websites or APIs, to retrieve information about 
      player times and other details in Mario Kart 8 Deluxe. 
      This information is then shown in an embed format on Discord, 
      making it easy for players to access and view stats quickly. 
      Additionally, the bot can also display relevant YouTube video clips 
      related to the game.
      </P>
      <P>
        
      </P>
      <UnorderedList my={4}>
        <ListItem>Show global Mario Kart 8 Deluxe stats based on player data</ListItem>
        <ListItem>Display current top player times and records</ListItem>
        <ListItem>Open detailed stats in Mario Kart 8 Deluxe leaderboards</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>discord</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, discord.py, requests</span>
          
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
            undeployed
          
        </ListItem>
        <ListItem>
          <Meta>Example Video</Meta>
          <Link href="https://www.youtube.com/watch?v=hVBV-jGPSAg">
            Example how to use bot <ExternalLinkIcon mx='2px' />
          </Link>
          
        </ListItem>
        
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/pondsan1412/MK8DX-WR-Bot">
          https://github.com/pondsan1412/MK8DX-WR-Bot <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Box align="center" my={6}>
        
      </Box>

      <WorkImage src="/images/web_mk.png" alt="wrmkbot" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/table.png" alt="wrmkbot" />
        <WorkImage src="/images/player_rank.png" alt="menkiki" />
      </SimpleGrid>
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/hVBV-jGPSAg?si=4nGxqJtd06YxS2Fi"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
