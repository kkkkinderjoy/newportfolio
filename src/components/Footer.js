import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <div className="w-full h-15 bg-white mt-20">
      <div className="max-w-7xl mx-5 lg:mx-auto flex-wrap ">
       <div className="flex items-center justify-between">
          <h3 className='text-slate-800 text-xs lg:text-lg'>COPYRIGHT © 2023. ALL RIGHTS RESERVED</h3>
          <ul className="">
            <li className="">
                  <div className="flex justify-center gap-5 lg:justify-start text-slate-800"><FontAwesomeIcon icon={faEnvelope} size='xl'/><FontAwesomeIcon icon={faGithub} size='xl'/></div>
                  {/*메일, 깃허브 링크 연결해줘야함!*/}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer