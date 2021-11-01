import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = ({ albums }) => {

  return (
    <div className={styles.container}>
      <div className='ui ten stackable cards'>
        {albums.map((album) => (
          <Link href={`/${album.id}`} key={album.id}>
            <div className='card' id='album'>
              <h2 className='id'>{album.id} <i className="folder outline icon" /> </h2>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  )
}

Index.getInitialProps = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums')

  const albums = await res.json()

  return {
    albums: albums
  }
}

export default Index;