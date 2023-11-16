import { faAngleUp, faArrowAltCircleUp, faUpDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
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
  return (
    <>  
      {
        btnActive &&
        <>
          <div className="p-[1rem] fixed right-1 lg:right-8 bottom-20 z-10 flex flex-col transition-all duration-150 ease-in-out">
            <button className="p-6 w-10 h-10 border-[1px] border-gray-400 bg-gray-100 shadow-md text-[#212519] flex justify-center items-center " id='top' type='button' onClick={scrolltoTop}><FontAwesomeIcon icon={faAngleUp} className='text-xl'/></button>
          </div>
        </>
      }    
    </>
    
  )
}

export default Scroll