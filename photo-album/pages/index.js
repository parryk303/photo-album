import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = ({ albums, results }) => {
  const yes = (results) => {
    return results.map((album) => (
      <Link href={`/${album.id}`} key={album.id}>
        <div className='card' id='album'>
          <h2 className='id'>{album.id} <i className="folder outline icon" /> </h2>
        </div>
      </Link>
    ))
  }

  const no = (albums) => {
    return albums.map((album) => (
      <Link href={`/${album.id}`} key={album.id}>
        <div className='card' id='album'>
          <h2 className='id'>{album.id} <i className="folder outline icon" /> </h2>
        </div>
      </Link>
    ))
  }
  return (
    <div className={styles.container}>
      <div className='ui ten stackable cards'>
        {results ?
         yes(results)
         :
         albums && no(albums)
        }
      </div>
      <Footer />
    </div>
  )
}

export default Index;