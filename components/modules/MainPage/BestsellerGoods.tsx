import { useUnit } from 'effector-react'
import React from 'react'
import { $bestsellerProducts } from '@/context/goods'

const Bestsellergoods = () => {
  const goods = useUnit($bestsellerProducts)
  console.log(goods)
  return <div>Bestsellergoods</div>
}

export default Bestsellergoods
