import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Satorn's homepage" />
        <meta name="author" content="Satorn Sukkang" />
        <meta name="author" content="Pondsan1412" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Satorn Sukkang" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Pondmk1412" />
        <meta name="twitter:creator" content="@Pondmk1412" />
        <meta name="twitter:image" content="https://cdn.discordapp.com/attachments/1074263724635992094/1273643217774051378/satorn_avatar.webp?ex=66bf5c2e&is=66be0aae&hm=fd1f93f87d479c3c80de7d730b914cc6d54d5ad2929d05d6e1d1616dc3ba07bf&" />
        <meta property="og:site_name" content="Satorn Sukkang" />
        <meta name="og:title" content="Satorn Sukkang" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/1074263724635992094/1273643217774051378/satorn_avatar.webp?ex=66bf5c2e&is=66be0aae&hm=fd1f93f87d479c3c80de7d730b914cc6d54d5ad2929d05d6e1d1616dc3ba07bf&" />
        <title>Satorn Sukkang - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
