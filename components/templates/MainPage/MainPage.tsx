'use client'
import { useGate } from 'effector-react'
import { MainPageGate } from '@/context/goods'
import Categories from '@/components/modules/MainPage/Categories/Categories'
import Hero from '@/components/modules/MainPage/Hero/Hero'
import Bestsellergoods from '@/components/modules/MainPage/BestsellerGoods'

const MainPage = () => {
  useGate(MainPageGate)
  return (
    <main>
      <Hero />
      <Categories />
      <Bestsellergoods />
    </main>
  )
}

export default MainPage
