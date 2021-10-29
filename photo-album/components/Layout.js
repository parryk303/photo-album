import Head from 'next/head'
import Nav from './Nav'

const Layout = ({ children }) => (
  <>
    <Head>
      <link
        async
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css' />
      <title>Photo Album App</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav />
    {children}
  </>
)

export default Layout;