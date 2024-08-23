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
        Google Sheet bot <Badge>2022</Badge>
      </Title>
      <P>
      A Discord bot that interacts with Google Sheets, 
      allowing you to insert, append, or fetch information using commands on Discord
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>discord</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, discord.py, Google sheet APIs</span>
        </ListItem>
      </List>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="#">
            <Badge mr={2}>Bot&apos;s Source code</Badge>
            https://github.com/pondsan1412/SLxBot {' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

      </UnorderedList>
      <WorkImage src="/images/works/leaderboard_table.png" alt="leaderboard_table" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
