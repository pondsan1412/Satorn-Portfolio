import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="So-chan">
    <Container>
      <Title>
        So-chan <Badge>2022</Badge>
      </Title>
      <P>
        A discord music bot using in over 100+ server 
      </P>
      <P>
        
        So-chan was inspired by a fork of the repository created by <Link href="https://github.com/Raptor123471" target="_blank">
          Raptor123471 <ExternalLinkIcon mx="2px" />
        </Link>, 
        the founder of DingoLingo. This Discord music bot, which is used in over 100 servers,
        has been enhanced with various new features. The goal was to adapt the bot for 
        Thai-speaking users and add functionalities such as:

        <p>- Song Lyrics: Displaying lyrics of the currently playing song.</p>
        <p>- Incorporating Thai language buttons with beautiful emojis.</p>
        <p>- User-Friendly: easy-to-use interface with improved features.</p>
        <p>This project aims to make the music bot more accessible and enjoyable for Thai-speaking communities.</p>
      </P>

      <List ml={4} my={4}>
        
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            python / pycord / Docker / yt-dl / FFmpeg
          </span>
        </ListItem>
        <ListItem>
          <Meta> Source code</Meta>
          <span>
            <Link href='https://github.com/pondsan1412/So-Chan-music' target="_blank">
            So-chan bot
            <ExternalLinkIcon mx="2px" /> </Link>
          </span>
        </ListItem>
       
      </List>

      <WorkImage src="/images/works/sochan.png" alt="Website" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
