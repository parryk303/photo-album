import Link from 'next/link'
import Image from 'next/image'

const Nav = ({ albums, setAlbums, results, setResults }) => {
    const searchAlbums = (string) => {
        let result = [];
        albums.forEach(album => {
            const title = album.id.toString();
            if (title.includes(string)) {
                result.push(album);
            } else {
                return null;
            }
            setResults(result)
        });
        let photos = []
        photos.forEach(photo => {
            const title = photo.id.toString();
            if (title.includes(string)) {
                result.push(photo);
            } else {
                return null;
            }
            setPhotos(photos)
        });

    }

    return (
        <nav className='nav'>
            <Link href='/'>
                <div id='title'>
                    <Image src='/albumIcon.png' id='logo' width={150} height={150} />
                    <a className='brand'>Photo Album App</a>
                </div>
            </Link>
            <div className='ui search'>
                <div className='ui icon input'>
                    <input className='prompt' type='text' placeholder='Search albums...'
                        onChange= {e => {
                            searchAlbums( e.target.value.toLowerCase().trim());
                          }}/>
                    <i className='search icon'></i>
                </div>
                <div className='results'></div>
            </div>
        </nav>
    )
}

export default Nav;