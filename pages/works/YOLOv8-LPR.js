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
    <Layout title="YOLOv8-LPR">
        <Container>
            <Title>
                YOLOv8-LPR <Badge>2024-</Badge>
            </Title>
            <P>
                Vehicle license plate recognition system using YOLOv8 and OCR technology.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://aiforthai.in.th/service_cr.php"> AIFORTHAI
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Python, YOLOv8, Tesseract OCR, PySerial</span>
                </ListItem>
            </List>
            <p> </p>
                <Section delay={0.1} title="Development Step">
                    <Heading as="h3" fontsize="xl" mb={2}>
                        Development Moment
                    </Heading>
                </Section>
                <p> <strong> Detected License Plate </strong></p>
                <WorkImage src="/images/works/20240829_111700.jpg">
                Detected License Plate</WorkImage>
                <p>
                    <video width="640 px" height={360} controls>
                        <source src="/images/works/videos/camface.mp4"
                            type="video/mp4" />
                    </video>
                </p>
                <WorkImage src="/images/works/output_yolo8.jpg" alt="YOLOv8-LPR" />
                <p> <strong>Detected my face</strong>
                    <WorkImage src="/images/works/face.jpg" alt="Pondfaces" />
                </p>
            <AspectRatio maxW="640px" ratio={.7} my={4}>
                <iframe
                    src="https://www.youtube.com/embed/UhECKw2c_mY"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </AspectRatio>
        </Container>
    </Layout>
)

export default Work