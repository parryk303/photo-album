import Head from 'next/head'
import Nav from './Nav'

const Layout = ({ albums, setAlbums, children, results, setResults }) => (
  <>
    <Head>
      <link
        async
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css' />
      <title>Photo Album App</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav
      albums={albums}
      setAlbums={setAlbums}
      results={results}
      setResults={setResults}/>
    {children}
  </>
)

export default Layout;