import Link from 'next/link'
import Image from 'next/image'

const Nav = () => (
    <nav className='nav'>
        <Link href='/'>
            <div id='title'>
                <Image src='/albumIcon.png' id='logo' width={150} height={150} />
                <a className='brand'>Photo Album App</a>
            </div>
        </Link>
        <div className='ui search'>
            <div className='ui icon input'>
                <input className='prompt' type='text' placeholder='Search albums...' />
                <i className='search icon'></i>
            </div>
            <div className='results'></div>
        </div>
        <Link href='/'>
            <a className='brand'>View All Albums</a>
        </Link>
    </nav>
)

export default Nav;