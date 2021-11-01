import styles from '../../styles/Home.module.css'
import Footer from '../../components/Footer'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Image from 'next/image'


const Photos = ({ photos }) => {

  return (
    <div className={styles.container}>
      <div className='ui five stackable cards'>
        {photos.map((photos) => (
          <div className='card' key={photos.id}>
            <div className='image' id='image'>
              <Image src={photos.url} width={200} height={200} alt={photos.id} />
            </div>
            <h3 className='title'>[{photos.id}] {photos.title}</h3>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

Photos.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)

  const photos = await res.json()

  return {
    photos: photos
  }
}

export default Photos;