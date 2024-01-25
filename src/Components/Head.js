import React from 'react'
import { toggleMenu } from '../Utils/appSlice'
import { useDispatch } from 'react-redux'

const Head = () => {

  const dispatch = useDispatch()

  const toggleMenuHandler = ()=>{

    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col shadow-lg p-2 m-2'>
      <div className='flex col-span-1'>
        <img onClick={toggleMenuHandler} className='h-12 cursor-pointer' alt='hamburger' src='https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg'/>
        <img className="h-12 mx-2 cursor-pointer" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614"/>
      </div>
      <div className='col-span-10 text-center px-10'>
        <input className='w-1/2 border border-gray-500 rounded-l-full  p-2' type='text'/>
        <button className=' border border-gray-500 py-2 px-5 rounded-r-full bg-gray-100'>🔍</button>
      </div>
      <div className='col-span-1'>
        <img className="h-12 " alt='user' src="https://t3.ftcdn.net/jpg/05/53/79/60/240_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"/>
      </div>
    </div>
  )
}

export default Head
