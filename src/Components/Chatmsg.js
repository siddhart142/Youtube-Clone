import React from 'react'

const Chatmsg = ({name,msg}) => {
    console.log(name,msg)
  return (
    <div className='flex items-center shadow-sm p-2'>
      <img className="h-12 " alt='user' src="https://t3.ftcdn.net/jpg/05/53/79/60/240_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"/>
      {/* <div className='items-center'> */}
      <span className='font-bold text-xl mx-2'>{name}</span>
      <span>{msg}</span>
      {/* </div> */}
    </div>
  )
}

export default Chatmsg
