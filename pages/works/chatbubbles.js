import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'


const Work = () => (
  <Layout title="chatbubbles">
    <Container>
      <Title>
        Chat Bubbles for OBS <Badge>2024</Badge>
      </Title>
      <P>
      Chat Bubbles for OBS is a web application designed to display chat bubbles 
      on a green screen. It allows users to upload their own profile picture 
      in any file format to customize the chat bubble appearance. 
      Simply click on the web app screen to start typing, 
      and the chat bubble will appear after you press Enter. 
      This tool provides an easy and interactive way to enhance your OBS streams 
      or recordings with personalized chat elements.
      </P>
      <Link href="https://obs-chat-bubbles.vercel.app/">
        Go to App. {'    '}   <ExternalLinkIcon mx="2px" />
      </Link> 
      or you can
      
      <Link href="https://github.com/pondsan1412/Chatbubbles">
       {' '}  Forks this repo
      </Link>

      <List ml={4} my={4}>
          
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web app, OBS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Javascript, Vite, react</span>
        </ListItem>
        
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/ZzxvsHGXUjM?si=5f1EvwMs0Cj_bzAr"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>

      <WorkImage src="/images/works/chat-web.png" alt="chatbubbles" />
    
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
