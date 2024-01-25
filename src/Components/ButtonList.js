import React from 'react'
import Button from './Button'

const list = ["All","Game","Songs","Live","Cricket","News","Cooking"]
const ButtonList = () => {
  return (
    <div className='flex flex-wrap'>
      {list.map((lst,idx) => <Button key={idx} name={lst} />)}

    </div>
  )
}

export default ButtonList
