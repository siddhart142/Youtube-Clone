import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../Utils/appSlice'
import { useDispatch } from 'react-redux'
import { YOUTUBE_SEARCH_API } from '../Utils/Constants';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion,setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false)
 
  const getSearchQuerySuggestions = async () => {
    // console.log(searchQuery)
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
    const json = await data.json();
    // console.log(json[1])
    setSuggestion(json[1]);
  }
  useEffect(()=>{
    //MAKE AN API CALL AFTER EVERY KEY PRESS
    // BUT IF THE DIFF BETWEEN 2 API CALLS IS <200MS
    // DECLINE THE API CALL
    const timer = setTimeout(()=> getSearchQuerySuggestions(),200);

    return () => {
      clearTimeout(timer);
    }
  },[searchQuery])


  const dispatch = useDispatch()

  const toggleMenuHandler = ()=>{

    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col shadow-lg p-2 m-2'>
      <div className='flex col-span-1'>
        <img onClick={toggleMenuHandler} className='h-12 cursor-pointer' alt='hamburger' src='https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg'/>
        <a href='/'><img className="h-12 mx-2 cursor-pointer" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614"/></a>
      </div>
      <div className='col-span-10  px-10 shadow-2xl '>
        <div>
          <input placeholder='Search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={()=> setShowSuggestion(true)} onBlur={()=> setShowSuggestion(false)} className=' w-1/2 border border-gray-500 rounded-l-full  p-2' type='text'/>
          <button className=' border border-gray-500 py-2 px-5 rounded-r-full bg-gray-100'>🔍</button>
        </div>
        {showSuggestion && <div className='w-[59rem] bg-white fixed  rounded-2xl shadow-lg border-2 '>
          <ul className='m-4 font-medium'>
          {suggestion.map((sug)=> <li key={sug} className='p-2 hover:bg-gray-100 rounded-md'>🔍 {sug}</li>)}
            {/* <li className='p-2 hover:bg-gray-100 rounded-md'>🔍 iphone</li>
            <li className='p-2'>🔍 iphone</li>
            <li className='p-2'>🔍 iphone</li>
            <li className='p-2'>🔍 iphone</li>
            <li className='p-2'>🔍 iphone</li> */}
          </ul>
        </div>}
      </div>
      <div className='col-span-1'>
        <img className="h-12 " alt='user' src="https://t3.ftcdn.net/jpg/05/53/79/60/240_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"/>
      </div>
    </div>
  )
}

export default Head
