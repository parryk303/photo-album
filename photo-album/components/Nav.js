import Link from 'next/link';

const Nav = () => (
  <nav className='nav'>
      <Link href='/'>
          <a className='brand'>Photo Album App</a>
      </Link>

      <Link href='/view'>
          <a className='view'>View Albums</a>
      </Link>
  </nav>
)

export default Nav;