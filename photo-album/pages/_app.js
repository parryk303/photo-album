import '../styles/globals.css'
import Layout from '../components/Layout'
import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

function MyApp({ Component, pageProps }) {
  const [albums, setAlbums] = useState();
  const [results, setResults] = useState();
  const [photos, setPhotos] = useState([]);

  useEffect(async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/albums')
    const albums = await res.json()
    setAlbums(albums)
    setResults(albums)
  }, [])

  return (
    <Layout
      albums={albums}
      setAlbums={setAlbums}
      results={results}
      setResults={setResults}
      ><Component albums={albums} results={results}  {...pageProps} /></Layout>
  )
}

export default MyApp
