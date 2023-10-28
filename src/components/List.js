import React from 'react'
import data from '../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

function List() {
  return (
   <>
        <div className="w-full h-full bg-white">
              <div className="max-w-3xl lg:max-w-7xl mx-auto flex flex-wrap basis-full">
                {
                  data.map((e,i)=>{
                    
                    return(
                    <>
                      <div key={i} className="w-full flex mb-3 mx-2 transition duration-400 hover:scale-95">
                        <div className={`w-1/5 h-full flex justify-center project${i+1} border-[1px] border-slate-900 `}></div>
                          <div className="text-sm lg:text-md w-4/5 border-y-[1px] border-slate-900 border-r-[1px] p-2">
                              <ul className="mb-3 flex justify-between">
                                <li className="text-md lg:text-lg">{e.title}</li>
                                <li className="text-sm lg:text-md">{e.period}</li>
                              </ul>
                              <ul className="">
                                <li className="text-sm lg:text-md">{e.type}</li>
                              </ul>
                              <ul className="flex justify-between items-center">
                                <li className="text-sm lg:text-md">{e.skill}</li>
                                <li className="text-sm lg:text-md flex">
                                  <button className="text-xl lg:text-xl p-1 m-1"><FontAwesomeIcon icon={faPlayCircle}/></button>
                                  <button className='bg-slate-900 text-[#fff] rounded-lg p-1 m-1'>READ ME</button>
                                </li>
                              </ul>
                        </div>
                      </div>
                    </>
                    )
                  })
                }
              </div>
          </div>
   </>
  )
}

export default List