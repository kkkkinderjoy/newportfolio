import React from 'react'
import data from '../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function List() {
  return (
   <>
        <div className="w-full h-full bg-white">
              <div className="max-w-7xl mx-auto flex flex-wrap basis-full">
                {
                  data.map((e,i)=>{
                    return(
                    <>
                      <div key={i} className="w-full flex mb-3 mx-2 transition duration-400 hover:scale-105">
                        <div className='w-1/5 h-[200px] object-cover inset-0 flex justify-center border-[1px] border-slate-900'>
                          <img src={e.img} alt="img" className='w-full h-full'/>
                        </div>
                          <div className="text-sm lg:text-md w-4/5 border-y-[1px] border-slate-900 border-r-[1px] p-2">
                              <ul className="mb-3 flex justify-between">
                                <li className="text-md font-semibold lg:text-lg">{e.title}</li>
                              </ul>
                              <ul className="mb-2 flex flex-col gap-2">
                                <li className="text-sm lg:text-md">{e.type}</li>
                                <li className="text-sm lg:text-md">기여도 : {e.contribution}</li>
                                <li className="text-sm lg:text-md">작업기간 : {e.period}</li>
                              </ul>
                              <ul className="flex justify-between items-center">
                                <li className="text-sm lg:text-md">사용기술 : {e.skill}</li>
                                <li className="text-sm lg:text-md flex">
                                  <button className="text-xl lg:text-xl p-1 m-1"><FontAwesomeIcon icon={faPlusCircle}/></button>
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