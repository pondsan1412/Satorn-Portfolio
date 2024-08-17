import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Verify.bot">
    <Container>
      <Title>
         Verify Bot for Online game Community<Badge>2024</Badge>
      </Title>
      <P>The bot keeps asking for your ID card in the online game Called</P>
      
        <Link href="https://pso2.com/agegate/lp/"> Fantasy Star Online 2 {' '}</Link>
      
      . which is based in Japan. To access the server, you need to answer
      each question from the bot. After you submit your responses, 
      a verification button will be immediately sent to the owner.
      

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>discord</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, discord.py</span>
        </ListItem>
        
        <ListItem>
          <Meta>Source code</Meta>
          <Link href="https://github.com/pondsan1412/verify-bot---MieShop-Dc">
            Mie PSO 2 NGS Global รับเติม AC{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/verify_raw.PNG" alt="Verify.bot" />
      <WorkImage src="/images/works/asking.PNG" alt="Verify.bot" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/verified_member.PNG" alt="Verify.bot" />
        <WorkImage src="/images/works/to_avoid_pic_gone.PNG" alt="Verify.bot" />
      </SimpleGrid>
      <WorkImage src="/images/works/calling.PNG" alt="Verify.bot" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
