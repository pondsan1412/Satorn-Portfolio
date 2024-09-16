import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    UnorderedList
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="googlesheet">
      <Container>
        <Title>
          TalesRunner APIs <Badge>2024</Badge>
        </Title>
        <P> APIs giving you games data from TalesRunner game.
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, FastAPI, Vercel</span>
          </ListItem>
        </List>
  
        <UnorderedList my={4}>
          <ListItem>
            <Link href="#">
              <Badge mr={2}> Source code</Badge>
              https://github.com/pondsan1412/TalesRunner-APIs {' '}
              <ExternalLinkIcon mx="2px" />
              <Badge mr={2}> API URL</Badge>
                https://tr-game-api.vercel.app/ {' '}
                <ExternalLinkIcon mx="2px" />
            </Link>

          </ListItem>
  
        </UnorderedList>
        <WorkImage src="/images/works/tr_game.jpg" alt="tr_game" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  