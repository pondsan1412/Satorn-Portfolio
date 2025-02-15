import {
    Box,
    Container,
    Badge,
    Link,
    ListItem,
    AspectRatio,
    List,
    Heading,

} from '@chakra-ui/react'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Head from 'next/head'
import Section from '../../components/section'


const Work = () => (
    <Layout title="MK8DX Soundboard">
        <Container>
            <Title>
                MK8DX Soundboard <Badge>2023-</Badge>
            </Title>
            <P>
                A soundboard for Mario Kart 8 Deluxe that plays sound clips from the game.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React, Next.js, Chakra UI</span>
                </ListItem>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://mk8dx-soundboard.vercel.app/">MK8DX Soundboard</Link>
                </ListItem>
            </List>
            <p> </p>
            <Section delay={0.1} title="Development Step">
                <Heading as="h3" fontsize="xl" mb={2}>
                    Development Moment
                </Heading>
            </Section>
            <p> <strong> MK8DX Soundboard </strong></p>
            <WorkImage src="/images/works/mk8dxsoundboard.png">
                MK8DX Soundboard</WorkImage>
            <p>
                <video width="640 px" height={360} controls>
                    <source src="/images/works/videos/mk8dxsoundboard.mp4"
                        type="video/mp4" />
                </video>
            </p>
            <WorkImage src="/images/works/mk8dxsoundboard.png" alt="MK8DX Soundboard" />
            <p> <strong>Soundboard</strong>
                <WorkImage src="/images/works/mk8dxsoundboard.png" alt="MK8DX Soundboard" />
            </p>
            <AspectRatio maxW="640px" ratio={.7} my={4}>
                <iframe
                    src="https://www.youtube.com/embed/hVBV-jGPSAg"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </AspectRatio>
        </Container>
    </Layout>
)