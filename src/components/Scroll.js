import { faAngleUp, faArrowAltCircleUp, faUpDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import ChannelService from './ChannelService';

function Scroll() {

  const [btnActive, setBtnActive] = useState(false);
  const scrolltoTop = () =>{
    window.scrollTo({top:0 , behavior:"smooth"})
  }
  useEffect(() => {
    const ShowButton = () => {
        if (window.scrollY > 150) {
          setBtnActive(true)
        } else {
          setBtnActive(false)
        }
    }

    window.addEventListener("scroll", ShowButton)
    return () => {
        window.removeEventListener("scroll", ShowButton)
    }
  }, [])

  useEffect(()=>{
    ChannelService.loadScript();
    ChannelService.boot({
      "pluginKey": `${process.env.REACT_APP_API_KEY}`
    });
  },[])
  return (
    <>  
      {
        btnActive &&
        <>
        <div className="p-[1rem] fixed right-0 bottom-12 z-10 flex flex-col transition-all duration-150 ease-in-out">
          <button className="p-6 w-10 h-10 rounded-full bg-[#f1f3f5] text-[#212519] flex justify-center items-center" id='top' type='button' onClick={scrolltoTop}><FontAwesomeIcon icon={faAngleUp} className='text-xl'/></button>
        </div>
        </>
      }    
    </>
    
  )
}

export default Scroll