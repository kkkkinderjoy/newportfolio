import React, { useEffect, useState } from 'react'

function About() {
  const [position,setPosition]=useState(0);
  const onScroll= () =>{
    // console.log(window.scrollY)
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
        <div className="w-full h-full bg-white my-20">
          <p className='text-2xl font-semibold lg:text-4xl text-center mb-10 italic'>About  HYJ</p>
          <div className="max-w-7xl mx-auto flex flex-wrap mt-10 justify-center basis-full text-gray-600">
                <div className="img basis-full lg:basis-1/2"> 
                  <div className="w-[30rem] h-[30rem] lg:w-[25rem] lg:h-[25rem] rounded-xl profile"></div>
                </div>
                <div className="txt mt-10 basis-full lg:basis-1/2">
                    <ul className=" font-medium text-lg lg:text-xl">
                      <li className="ko" style={{opacity: (position - 380)/100}}>안녕하세요 👋 주니어 프론트엔드 개발자 홍윤정입니다.</li>
                      <li className="ko my-2" style={{opacity: (position - 400)/150}}>수학문제를 풀면서 어려운 문제를 풀었을 때의 쾌감을 코딩을 하면서 똑같이 느낄 때 즐거움을 느껴요!</li>
                      <li className="ko my-2" style={{opacity: (position - 450)/150}}>React 라이브러리에서 컴포넌트 단위의 마크업 작업을 할 수 있어요. 반응형, 웹 접근성과 웹 표준을 고려한 웹 페이지를 만들수있습니다.</li>
                    </ul>
                    <ul className="font-medium text-sm text-gray-600 lg:text-lg my-3" style={{opacity: (position - 500)/150}}>
                            <li className="ko">🎉 <span className='ko'>1998.08.26</span></li>
                            <li className="ko"> 📍<span className='ml-2'> 대구</span></li>
                            <li className="ko">🎓 <span className=''>금오공과대학교 신소재공학부 (2017.02~ 2021.08)</span></li>
                            <li className="ko">💼 <span className=''>시매쓰 수학학원 (2021.12 ~ 2023.04)</span></li>
                            <li className="ko">👩🏻‍💻 <span className=''>그린컴퓨터아트학원 (혼합+디지털컨버저스) React를 활용한 프론트엔드 <br className='block lg:hidden'/>개발자 양성 (SPA 프로젝트 개발)A  (2023.06~2023.11)</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default About