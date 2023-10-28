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
      desc:"웹 페이지의 디자인 및 레이아웃 스타일을 적용하여 반응형 레이아웃을 생성할 수 있습니다"
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
    }
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
    }

  ]
    
    

  
 
  return (
    <>
        <div className="w-full h-full flex my-20">
            <div className="mx-auto max-w-7xl flex flex-wrap p-[0_2%]">
              <div className="w-full mt-12 text-center mb-10">
                <p className='text-2xl font-semibold lg:text-4xl mb-10 italic'>Skill</p>
              </div>
              <div className="flex flex-col basis-full flex-wrap  md:basis-1/3 lg:basis-1/3 p-[4rem_1.25rem_2rem] border-[1px] border-gray-300 cursor-pointer text-center transition duration-300 box-border  hover:bg-gray-300">
                <p className="font-bold text-5 mb-5">FrontEnd</p>
                <p className="text-md text-gray-500">HTML5 / CSS3 / Javascript / Tailwind CSS / Styled-Components / SCSS / React / Redux / Typescript</p>
              </div>
              <div className="flex flex-col basis-full flex-wrap justify-between md:basis-1/3  lg:basis-1/3 p-[4rem_1.25rem_2rem] border-[1px] border-gray-300 cursor-pointer text-center transition duration-300 box-border hover:bg-gray-300">
                <p className="font-bold text-5">Backend & Database</p>
                <p className="text-md text-gray-500">Node.js / MongoDB / Firebase</p>
              </div>
             
              <div className="flex flex-col basis-full flex-wrap justify-between md:basis-1/3 lg:basis-1/3  p-[4rem_1.25rem_2rem] border-[1px] border-gray-300 cursor-pointer text-center transition duration-300 box-border  hover:bg-gray-300">
                <p className="font-bold text-5 mb-5">Etc</p>
                <p className="text-md text-gray-500">Git / Github / Vercel / Figma / Notion / Slack</p>
              </div>
              
            </div>
          </div>
    </>
  )
}

export default Skill