import { faShoePrints } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'

function Main() {
  const [position,setPosition]=useState(0);


  // 스크롤 이벤트에 따라 가로 스크롤이 발생하는 이유는 position 상태 변수를 사용하여 텍스트를 가로로 이동시키는 부분입니다. 이를 해결하기 위해서는 position 값을 조정하는 방법이 필요합니다.
  // onScroll 이벤트 핸들러 함수를 수정하여 스크롤 이벤트가 발생할 때 position 값을 제한하는 방법입니다.
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
      <div className="w-full h-[820px] bg-white text-slate-900 pt-10 dark:bg-slate-800 dark:text-white">
         {/*   bg-[#F8FAFB] */}
          <div className="max-w-7xl mx-auto flex-wrap relative">
                <div className="flex justify-center my-8">
                    <div className="lg:flex lg:items-center lg:flex-row lg:gap-12 overflow-x-hidden">
                        <div className="wave w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] lg:w-[30rem] lg:h-[30rem] animate-morph">
                        <div className="txt ">
                            <div className="absolute top-10 right-10 ">
                              <p className="txt-box text-[2rem] md:text-[4rem] lg:text-[6rem]" style={{transform:`translate(${position}px)`, background: 'transparent'}}>Hong YoonJung</p>
                            </div>
                            <div className="absolute bottom-20 left-14">
                               <p className="dark:!bg-transparent txt-box text-[2rem] md:text-[4rem] lg:text-[6rem]" style={{transform:`translate(${-position}px)`, background: 'transparent!important'}}>FrontEnd Developer</p>
                            </div>
                        </div>
                        </div>
                    </div>             
                  </div>
              <div className="mt-20">
                  <ul className="flex justify-end">
                    <li className="text-[0.9rem] lg:text-lg mr-2">Last update: 2023.11.16</li>
                  </ul>
              </div>
          </div>
          
      </div>
   
      
      
  </>
  )
}

export default Main