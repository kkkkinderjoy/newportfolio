import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { toggleTheme } from '../store';

function Header() {
  const darkMode = useSelector(state => state.dark);
  const dispatch = useDispatch()
  const[isActive,setIsActive]=useState(false);
  const [position,setPosition]=useState(0);
  const onScroll= () =>{
    // console.log(window.scrollY)
    setPosition(window.scrollY)
  }
  useEffect(()=>{
    const scrollHeight = () => {
      if (window.scrollY > 50) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }
    window.addEventListener("scroll", scrollHeight)
    return () => {
      window.removeEventListener("scroll", scrollHeight)
    }
  },[])
 

  return (
    <>   
    <div className="w-full h-[6rem] bg-white text-slate-800 p-3">        
      <div className="max-w-full mx-auto lg:mx-10 flex-wrap flex justify-between">
          <ul className="">
            <li className=""><img src={"images/logo.svg"} alt="logo" className='w-10 h-10 lg:w-12 lg:h-12' title="Hong's portfolio"/></li>
          </ul>
          <ul className='flex gap-3 dark:bg-transparent'>
                    <li className="flex items-center dark:bg-transparent">
                    <NavLink to="/about" className='nav text-sm lg:text-xl relative'>About me</NavLink></li>
                    <li className="flex items-center dark:bg-transparent"><NavLink to="/projects" className='nav text-sm lg:text-xl relative'>Projects</NavLink></li>
                    <li className="flex items-center dark:bg-transparent"><NavLink to="/projects" className='nav text-sm lg:text-xl relative'>Notion</NavLink></li>
                    <li className="flex items-center dark:bg-transparent"><NavLink to="/projects" className='nav text-sm lg:text-xl relative'>Github</NavLink></li>
                    <button type='radio' className='text-slate-400 shadow-off rounded-[70px] w-12 text-sm lg:text-lg lg:w-14 h-10 flex items-center justify-center  lg:ml-2 dark:shadow-on' onClick={()=>{dispatch(toggleTheme())}}>
                    <input type="hidden"/>{darkMode === "light" ? "dark" : "light"}
                    </button>
          </ul>
     </div>
    </div>
    </>
  )
}

export default Header