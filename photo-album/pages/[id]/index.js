import styles from '../../styles/Home.module.css'
import Footer from '../../components/Footer'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Image from 'next/image'


const Photos = ({ photos }) => {

  return (
    <div className={styles.container}>
      <div className='ui five stackable cards'>
        {photos.map((photo) => (
          <div className='card' id='photo' key={photo.id}>
            <div className='image' id='image'>
              <Image src={photo.url} width={200} height={200} alt={photo.id} />
            </div>
            <h3 className='title'>[{photo.id}] {photo.title}</h3>
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