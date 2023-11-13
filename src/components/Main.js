import { faShoePrints } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'

function Main() {
  const [position,setPosition]=useState(0);
  const onScroll= (e) =>{
    setPosition(window.scrollY)
  }
  useEffect(()=>{
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  },[])
  return (
    <>
    {/* 다크모드 버튼 */}
      <div className="w-full h-[780px] bg-white text-slate-900 pt-10">
         {/*   bg-[#F8FAFB] */}
          <div className="max-w-7xl mx-auto flex-wrap relative">
                <div className="flex justify-center my-8 ">
                    <div className="lg:flex lg:items-center lg:flex-row lg:gap-12">
                        <div className="wave w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] lg:w-[30rem] lg:h-[30rem] animate-morph">
                        <div className="txt ">
                            <div className="absolute top-10 right-10 ">
                              <p className="bg-transparent txt-box text-[2rem] md:text-[4rem] lg:text-[6rem]" style={{transform:`translate(${position}px)`}}>Hong YoonJung</p>
                            </div>
                            <div className="absolute bottom-20 left-14">
                               <p className="bg-transparent txt-box text-[2rem] md:text-[4rem] lg:text-[6rem]" style={{transform:`translate(${-position}px)`}}>FrontEnd Developer</p>
                            </div>
                        </div>
                        </div>
                    </div>             
                  </div>
              <div className="mt-20">
                  <ul className="flex justify-end">
                    <li className="text-[0.9rem] lg:text-sm mr-2">Last update: 2023.10.28</li>
                  </ul>
              </div>
          </div>
          
      </div>
   
      
      
  </>
  )
}

export default Main