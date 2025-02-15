import {
    Container,
    Badge,
    Link,
    ListItem,
    AspectRatio,
    List
} from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="YOLOv8-LPR">
        <Container>
            <Title>
                YOLOv8-LPR <Badge>2024-</Badge>
            </Title>
            <P>
                A project that detect license plate using YOLOv8 and Tesseract OCR
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