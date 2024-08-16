import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not found</Heading>
      <Text>What&apos;re you looking It&apos;s nothing here. </Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Back to Home page
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
