'use client'
import React from 'react'
import Header from '../modules/Header/Header'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import MobileNavbar from '../modules/MobileNavBar/MobileNavBar'
const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMedia800 = useMediaQuery(800)
  return (
    <>
      <Header />
      {children}
      {isMedia800 && <MobileNavbar />}
      <div className=''> </div>
    </>
  )
}

export default Layout
