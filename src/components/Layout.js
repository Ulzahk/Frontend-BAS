import React, { Fragment } from 'react'
import { SideBarMenu } from './SideBarMenu'
import '../assets/styles/components/Layout.scss'

export const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <SideBarMenu />
      {children}
    </div>
  )
}
