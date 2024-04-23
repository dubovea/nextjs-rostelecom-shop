import Image from 'next/image'
import Link from 'next/link'

const Logo = () => (
  <Link className='logo' href='/'>
    <Image className='logo__img' src='/img/logo.svg' alt='Rostelecom logo' />
  </Link>
)

export default Logo
