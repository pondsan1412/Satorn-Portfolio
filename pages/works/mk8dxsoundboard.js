import {
    Container,
    Badge,
    Link,
    ListItem,
    AspectRatio,
    List,
    Heading
} from '@chakra-ui/react'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Work = () => (
    <Layout title="MK8DXSoundboard">
        <Container>
            <Title>
                MK8DXSoundboard <Badge>2024-</Badge>
            </Title>
            <P>
                A soundboard application for Mario Kart 8 Deluxe.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://www.pxteam.site/"> MK8DXSoundboard
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>JavaScript, React, Chakra UI</span>
                </ListItem>
            </List>
            <Section delay={0.1} title="Development Step">
                <Heading as="h3" fontsize="xl" mb={2}>
                    Development Moment
                </Heading>
            </Section>
            <p> <strong> Soundboard Interface </strong></p>
            <WorkImage src="/images/works/mk8dxsoundboard.png" alt="MK8DXSoundboard Interface" />
            
            <AspectRatio maxW="640px" ratio={.7} my={4}>
                <iframe
                    src="https://www.youtube.com/embed/RlS7qDuaiJw"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </AspectRatio>
        </Container>
    </Layout>
)

export default Work
