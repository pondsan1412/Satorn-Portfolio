import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbyugimeow from '../public/images/works/yugimeow_t1.jpg'
import thumbmk from '../public/template.jpg'
import thumbchat from '../public/images/works/chatbubbles.jpg'
import thumbsochan from '../public/images/works/sochanads.png'
import thumbslx from '../public/images/works/leaderboard_slx.jpg'
import thumbverify from '../public/images/works/verify_tem.jpg'
import thumbpro from '../public/images/works/raw_app.png'
const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="yugimeow" title="Yugimeow" thumbnail={thumbyugimeow}>
            A discord bot giving you Yu-Gi-Oh card &apos;s information in discord platforms!
          </WorkGridItem>
        </Section>
       

        <Section delay={0.1}>
          <WorkGridItem
            id="wrmkbot"
            title="WR MK8DX"
            thumbnail={thumbmk}
          >
            A discord bot contains mario kart world records experiences.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="chatbubbles" thumbnail={thumbchat} title="Chat Bubbles for OBS">
            an app that litterally can do bubbes message appear on obs screen or videos
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
          id="sochan"
          title='So-Chan'
          thumbnail={thumbsochan}
          >
            A discord music bot with thai languages supported.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="googlesheet_bot" thumbnail={thumbslx} title="Google Sheet bot">
            Google sheet Management by discord bot in private server for mario kart records team&apos;s tables
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="miebot" thumbnail={thumbverify} title="Verify bot">
            To verify member if they&apos;re actually from NSO2 online game
            bot question require your game id, your ID card in game etc.
          </WorkGridItem>
        </Section>
        

      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old Application I&apos;ve made
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="#" thumbnail={thumbpro} title="Dark matter (2017)">
            TalesRunner Cheat Application called &ldquo;Dark Matter&ldquo;
            Tech Stack: VB.net
          </WorkGridItem>
        </Section>
      
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
