import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
  
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  if(!isMenuOpen) return null;
  return (
    <div className='col-span-1  shadow-lg p-2 text-2xl '>
    <ul>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
      </ul>
    <h1 className='font-bold pt-5'>Subsciptions</h1>
      <ul>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
      </ul>
    </div>
  )
}

export default SideBar
