import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-5' >
      <div className='flex-center wrapper flex-between flex flex-col text-center sm:flex-row'>
        <Link href='/'>
          <Image src="/assets/images/logo.svg" alt="logo" width={128} height={38} />
        </Link>

        <p>2024 Your Choice. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer