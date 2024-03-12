import React from 'react'
import Link from 'next/link'

import { IMenuLinkItemProps } from '@/types/modules'

const MenuLinkItem = ({
  item,
  handleRedirectToCatalog,
}: IMenuLinkItemProps) => {
  const handleRedirect = () => handleRedirectToCatalog(item.href)
  return (
    <li key={item.id} className='nav-menu__accordion__item__list__item'>
      <Link
        href={item.href}
        className='nav-menu__accordion__item__list__item__link'
        onClick={handleRedirect}
      >
        {item.text}
      </Link>
    </li>
  )
}

export default MenuLinkItem
