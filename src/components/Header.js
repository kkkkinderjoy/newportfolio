import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { toggleTheme } from '../store';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const darkMode = useSelector(state => state.dark);
  const dispatch = useDispatch();

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, []);

  return (
    <>   
    <div className={`z-[100] w-full h-auto bg-white text-slate-800 p-3 dark:text-white dark:bg-slate-800 ${isSticky ? "sticky top-0 h-[4rem] opacity-90 shadow-md" : "h-[6rem]"}`}>        
      <div className="max-w-full mx-auto lg:mx-10 flex-wrap flex justify-between">
        <div className="">
          <div className="logo font-extrabold sm:text-lg md:text-xl lg:text-3xl">HYJ</div>
        </div>
        <div className="">
          <ul className='flex gap-3 dark:bg-transparent'>
                    <li className="flex items-center dark:bg-transparent">
                    <NavLink to="/about" className='nav text-sm lg:text-xl relative'>About me</NavLink></li>
                    <li className="flex items-center dark:bg-transparent"><NavLink to="/projects" className='nav text-sm lg:text-xl relative'>Projects</NavLink></li>
                    <button type='radio' className='text-slate-400 shadow-off rounded-[70px] w-12 text-sm lg:text-lg lg:w-14 h-10 flex items-center justify-center  lg:ml-2 dark:shadow-on' onClick={()=>{dispatch(toggleTheme())}}>
                    <input type="hidden"/>{darkMode === "light" ? "dark" : "light"}
                    </button>
          </ul>
        </div>
     </div>
    </div>
    </>
  )
}

export default Header