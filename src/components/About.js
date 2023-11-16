import React, { useEffect, useState } from 'react'

function About() {
  const [position,setPosition]=useState(0);
  const [offsetTop, setOffsetTop] = useState(0)
  const onScroll= () =>{
    // console.log(window.scrollY)
    setPosition(window.scrollY)
    const eleTxt = document.querySelector(".txt").getBoundingClientRect();
    setOffsetTop(eleTxt.top)
  }
  useEffect(()=>{
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  },[])
  return (
    <>
        <div className="w-full h-full bg-white py-20">
        <div className="max-w-7xl mx-auto">
          <p className='inline-block w-[69rem] text-2xl font-semibold lg:text-3xl text-left mb-10 italic relative after:absolute after:ml-[1rem] after:w-full after:h-[1px] after:bg-[#7d7789] after:left-25 after:top-1/2 after:-translate-y-1/2'>About  HYJ</p>
          <div className="max-w-7xl mx-auto flex flex-wrap mt-10 justify-center basis-full text-gray-600">
                <div className="img basis-full lg:basis-1/2 lg:mt-9"> 
                  <div className="w-[30rem] h-[30rem] lg:w-[32rem] lg:h-[32rem] rounded-xl profile mx-auto"></div>
                </div>
                <div className="txt mt-10 lg:mt-14 basis-full lg:basis-1/2">
                    <ul className=" font-medium text-lg md:text-xl lg:text-2xl mx-3">
                    {/* {offsetTop} */}
                      <li className="ko" style={{opacity: (position - 400)/200}}>안녕하세요 👋 주니어 프론트엔드 개발자 홍윤정입니다.</li>
                      <li className="ko my-2" style={{opacity: (position - 450)/230}}>수학문제를 풀면서 어려운 문제를 풀었을 때의 쾌감을 코딩을 하면서 똑같이 느낄 때 즐거움을 느껴요!</li>
                    </ul>
                    <ul className="flex flex-col gap-1 font-medium text-md text-gray-600 lg:text-xl m-3 mt-10 lg:mt-14" style={{opacity: (position - 650)/150}}>
                            <li className="ko">🎉 <span className='ko'>1998.08.26</span></li>
                            <li className="ko"> 📍<span className='ml-2'> 대구</span></li>
                            <li className="ko">👩🏻‍💻 <span className=''>그린컴퓨터아트학원 (혼합+디지털컨버저스) React를 활용한 프론트엔드 개발자 양성 (SPA 프로젝트 개발)A  (2023.06 - 2023.11)</span></li>
                            <li className="ko">💼 <span className=''>시매쓰 수학학원 (2021.12 - 2023.04)</span></li>
                            <li className="ko">🎓 <span className=''>금오공과대학교 신소재공학부 (2017.03 - 2021.08)</span></li>
                            <li className="ko">🎓 <span className=''>원화여자고등학교(2014.03 - 2017.02)</span></li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default About