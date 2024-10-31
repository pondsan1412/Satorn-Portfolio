import Image from 'next/image';
import { Container, Badge, Link, List, ListItem, AspectRatio } from '@chakra-ui/react';
import Layout from '../../components/layouts/article';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, Meta } from '../../components/work';
import P from '../../components/paragraph';
import imgjson from '../../public/images/works/outputjson.png';
const Work = () => (
  <Layout title="discord-insights-api">
    <Container>
      <Title>
        Discord Insights API <Badge>2024</Badge>
      </Title>
      <P>
        Discord Insights API is a tool designed to extract in-depth analytics from Discord servers. 
        It provides insights on user engagement, daily message counts, channel activity, 
        and other key metrics, empowering server admins and managers to better understand member behavior and participation.
      </P>
      <Link href="https://github.com/pondsan1412/Discord-Insights-API">
        Visit this repo {'    '}   <ExternalLinkIcon mx="2px" />
      </Link> 
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Discord</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Flask, Discord.py</span>
        </ListItem>
      </List>
      <Image src={imgjson} alt="Example output JSON" width={500} height={300} />
      <p>Example output JSON</p>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <Link href="https://www.youtube.com/watch?v=nVQ-baDmoTg" target="_blank" rel="noopener noreferrer">
          <Image
            src="https://img.youtube.com/vi/nVQ-baDmoTg/maxresdefault.jpg"
            alt="YouTube video preview"
            layout="fill"
            objectFit="cover"
            style={{ cursor: 'pointer' }}
          />
        </Link>
      </AspectRatio>
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from '../../components/chakra';
