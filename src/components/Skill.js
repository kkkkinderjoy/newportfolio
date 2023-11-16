import React, { useState } from 'react'

function Skill() {

  const FrontEnd=[
    {
      type:"FrontEnd",
      name:"HTML5",
      desc:"HTML5로 마크업하여 구조를 정의할 수 있습니다"
    },
    {
      type:"FrontEnd",
      name:"CSS3",
      desc:"프로젝트의 디자인에 알맞은 스타일을 적용할 수 있으며 반응형 레이아웃을 생성할 수 있습니다"
    },
    {
      type:"FrontEnd",
      name:"Javascript",
      desc:"이벤트 처리를 통해 동적인 기능을 추가할 수 있고, API 호출 및 데이터를 가져오고 가공할 수 있습니다"
    },
    {
      type:"FrontEnd",
      name:"Tailwind CSS",
      desc:"클래스 기반 스타일링을 사용하여 빠른 디자인 및 반응형을 적용할 수 있습니다"
    },
    {
      type:"FrontEnd",
      name:"SCSS",
      desc:"유지보수 가능한 CSS코드를 작성할 수 있습니다."
    },
    {
      type:"FrontEnd",
      name:"Styled-Components",
      desc:"React를 이용한 프로젝트에서 컴포넌트 스타일링을 위해 사용할 수 있습니다"
    },
    {
      type:"FrontEnd",
      name:"React",
      desc:"컴포넌트의 재사용과 라우팅을 이용하여 SPA를 구현할 수 있습니다"
    },
    {
      type:"FrontEnd",
      name:"Redux",
      desc:"React 프로젝트에서 전역 상태를 효과적으로 관리하는데 사용할 수 있습니다"
    },
    {
      type:"FrontEnd",
      name:"Next.js",
      desc:"React 프로젝트에서 전역 상태를 효과적으로 관리하는데 사용할 수 있습니다"
    },
    {
      type:"FrontEnd",
      name:"TypeScript",
      desc:"React 프로젝트에서 전역 상태를 효과적으로 관리하는데 사용할 수 있습니다"
    },
  ]
  const BackEnd =[
    {
      type:"BackEnd",
      name:"Node.js",
      desc:"백엔드 서버를 만들어 데이터베이스 시스템과 상호작용하도록 할 수 있습니다"
    }
  ]

  const Database = [
      { 
        type:"Database",
        name:"MongoDB",
        desc:"Node.js와 함께 NoSQl 데이터베이스를 이용하여 CRUD 작업을 수행하는데 사용할 수 있습니다 "
      },
      {
        type:"Database",
        name:"Firebase",
        desc:"Firebase의 인증과 클라우드 데이터베이스를 활용하여 회원가입,로그인,로그아웃 페이지를 구성할 수 있습니다"
      },
      {
        type:"Database",
        name:"MYSQL",
        desc:"Firebase의 인증과 클라우드 데이터베이스를 활용하여 회원가입,로그인,로그아웃 페이지를 구성할 수 있습니다"
      }
  ]
    

  const Etc =[
    {
      type:"Etc",
      name:"Git",
      desc:"프로젝트 관리와 팀원들 간의 협업을 위해 사용할 수 있습니다"
    },
    {
      type:"Etc",
      name:"Github",
      desc:"프로젝트 관리와 팀원들 간의 협업을 위해 사용할 수 있습니다"
    },
    {
      type:"Etc",
      name:"Vercel",
      desc:"프로젝트를 빠르게 배포하는데 사용할 수 있습니다"
    },
    {
      type:"Etc",
      name:"Figma",
      desc:"와이어프레임에서 프로토타입을 생성할 수 있습니다"
    },
    {
      type:"Etc",
      name:"Notion",
      desc:"팀원들간의 의사소통을 위해 사용할 수 있습니다"
    },
    {
      type:"Etc",
      name:"Slack",
      desc:"팀원들간의 의사소통을 위해 사용할 수 있습니다"
    },
    {
      type:"Etc",
      name:"yarn",
      desc:"팀원들간의 의사소통을 위해 사용할 수 있습니다"
    },
    {
      type:"Etc",
      name:"npm",
      desc:"팀원들간의 의사소통을 위해 사용할 수 있습니다"
    },

  ]
    
    

  
 
  return (
    <>
        <div className="w-full h-full bg-white py-20">
            <div className="max-w-7xl mx-auto flex flex-wrap">
              <p className='inline-block w-[74rem] text-2xl font-semibold lg:text-3xl text-left mb-10 italic relative after:absolute after:ml-[1rem] after:w-full after:h-[1px] after:bg-[#7d7789] after:left-25 after:top-1/2 after:-translate-y-1/2'>Skills</p>
              <div className="max-w-7xl mx-2 flex flex-wrap flex-col">
              <div className="flex flex-col gap-3">
                <p className="font-semibold text-md md:text-lg lg:text-xl">📕Front-End</p>
                <div className="w-full flex flex-wrap mx-auto gap-2 lg:gap-3 mb-5">
                {
                  FrontEnd.map((e,i)=>{
                    return(
                      <p key={i} className=" font-medium border-[2px] border-gray-500 rounded-2xl p-2 text-sm text-md lg:text-lg">{e.name}</p>
                    )
                  })
                }
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm md:text-md lg:text-xl">📙Back-End</p>
                <div className="w-full flex flex-wrap mx-auto gap-2 lg:gap-3 mb-5">
                {
                  BackEnd.map((e,i)=>{
                    return(
                      <p key={i}  className=" font-medium border-[2px] border-gray-500 rounded-2xl p-2 text-sm text-md lg:text-lg">{e.name}</p>
                    )
                  })
                }
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold  text-sm md:text-md lg:text-xl">📒DB</p>
                <div className="w-full flex flex-wrap mx-auto gap-2 lg:gap-3 mb-5">
                {
                  Database.map((e,i)=>{
                    return(
                      <p key={i}  className=" font-medium border-[2px] border-gray-500 rounded-2xl p-2 text-sm text-md lg:text-lg">{e.name}</p>
                    )
                  })
                }
                </div>
              </div>
              <div className="">
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-sm md:text-md lg:text-xl">📗Collaboration &amp; Tools</p>
                <div className="w-full flex flex-wrap mx-auto gap-2 lg:gap-3 mb-5">
                {
                  Etc.map((e,i)=>{
                    return(
                      <p key={i} className=" font-medium border-[2px] border-gray-500 rounded-2xl p-2 text-sm text-md lg:text-lg">{e.name}</p>
                    )
                  })
                }
                <div className="flex flex-wrap  p-[2rem] gap-9 w-full">
                    <div className="basis-full md:basis-[45%] h-auto border-[2px] border-gray-500 rounded-[2rem] relative m-2">
                      <div className="absolute -left-10 -top-5 text-[1.1rem] md:text-[1.5rem] border-[0.2rem] border-[#7da8d0] bg-white p-[0.5rem_1rem] lg:text-[2rem] font-medium">React</div>
                      <div className="m-[3rem] text-gray-600 font-medium text-md  lg:text-lg">
                          <div className="leading-[2.5rem] relative z-10 ">
                            • Redux로 상태관리 라이브러리 사용경험이 있습니다
                          </div>
                          <div className="leading-[2.5rem] relative z-10">
                            • 컴포넌트의 재사용성을 고려해 컴포넌트를 구현할 수 있습니다
                          </div>
                          <div className="leading-[2.5rem] relative z-10">
                          • React Router와 같은 라이브러리를 사용하여 라우팅을 구현할 수 있습니다
                          </div>
                      </div>
                    </div>
                    <div className="basis-full md:basis-[45%] h-auto border-[2px] border-gray-500  rounded-[2rem] relative m-2">
                     <div className="absolute -left-10 -top-5 text-[1.1rem] md:text-[1.5rem] border-[0.2rem] border-[#7da8d0] bg-white p-[0.5rem_1rem] lg:text-[2rem] font-medium">Next.js</div>
                     <div className="m-[3rem] text-gray-600 font-medium text-md lg:text-lg">
                          <div className="leading-[2.5rem] relative z-10">
                          • 서버와의 데이터 통신을 위해 API 엔드포인트를 생성하거나 외부 API와의 통신을 구현할 수 있습니다
                          </div>
                          <div className="leading-[2.5rem] relative z-10">
                          • fetch나 axios 등의 라이브러리를 활용하여 데이터를 요청하고 응답을 처리할 수 있습니다
                          </div>
                          <div className="leading-[2.5rem] relative z-10">
                          •  MYSQL과 연동하여 CRUD 기능을 구현하기 위해 RESTful API를 설계할 수 있습니다
                          </div>
                      </div>
                     
                    </div>
                    <div className="basis-full md:basis-[45%] h-auto border-[2px] border-gray-500  rounded-[2rem] relative m-2">
                     <div className="absolute -left-10 -top-5 text-[1.1rem] md:text-[1.5rem] border-[0.2rem] border-[#7da8d0] bg-white p-[0.5rem_1rem] lg:text-[2rem] font-medium">HTML/CSS</div>
                     <div className="m-[3rem] text-gray-600 font-medium text-md lg:text-lg">
                          <div className="leading-[2.5rem] relative z-10">
                          • CSS 미디어 쿼리를 사용하여 반응형 웹 디자인을 구현할 수 있습니다.
                          </div>
                          <div className="leading-[2.5rem] relative z-10">
                          • CSS의 트랜지션과 애니메이션 속성을 사용하여 웹 페이지에 애니메이션 효과를 추가할 수 있습니다.
                          </div>
                          <div className="leading-[2.5rem] relative z-10">
                          • Semantic Web에 대한 이해를 바탕으로 상황에 따라 적절한 Semantic Tag를 사용합니다
                          </div>
                      </div>
                    </div>
                    <div className="basis-full md:basis-[45%] h-auto border-[2px] border-gray-500  rounded-[2rem] relative m-2">
                     <div className="absolute -left-10 -top-5 text-[1.1rem] md:text-[1.5rem] border-[0.2rem] border-[#7da8d0] bg-white p-[0.5rem_1rem] lg:text-[2rem] font-medium">Javascript</div>
                     <div className="m-[3rem] text-gray-600 font-medium text-md lg:text-lg">
                          <div className="leading-[2.5rem] relative z-10">
                          • JavaScript를 사용하여 서버와의 데이터 통신을 구현할 수 있습니다.
                          </div>
                          <div className="leading-[2.5rem] relative z-10">
                          • 최신 JavaScript 기능인 ES6 이후의 문법과 기능을 활용할 수 있습니다.
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            </div> 
          </div>
          
    </>
  )
}

export default Skill