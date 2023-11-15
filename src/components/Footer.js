import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <div className="w-full h-15 bg-white mt-20">
      <div className="max-w-7xl mx-auto flex-wrap">
       <div className="flex items-center justify-center">
          <p className='text-slate-800 text-md lg:text-xl'>COPYRIGHT © 2023. ALL RIGHTS RESERVED</p>
          {/* <ul className="">
            <li className="">
                  <div className="flex justify-center gap-5 lg:justify-start text-slate-800"><FontAwesomeIcon icon={faEnvelope} size='xl'/><FontAwesomeIcon icon={faGithubAlt} size='xl'/></div>
                  
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default Footer