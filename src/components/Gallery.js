import React from 'react'
import data from '../data/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

function Gallery() {
  return (
    <>
        <div className="w-full h-full bg-white">
          <div className="max-w-7xl mx-auto flex flex-wrap basis-full gap-2 lg:gap-3 ">     
              {
                data.map((e,i)=>{
                  
                  return(   
                  <div key={i} className={`text-md mx-10 md:mx-auto basis-[98%] md:basis-[49%] lg:basis-[32%] bg-[#fff] border-[1px] border-slate-900 transition duration-400 hover:scale-105`}>
                    <div className="text-xl lg:text-2xl border-b-[1px] border-slate-800  p-1 font-semibold">{e.title}</div>
                      <div className='' style={{ position: 'relative', paddingBottom: '100%' }}>
                        <img src={e.img} alt="img"  className='object-cover absolute inset-0 w-full h-full'/>
                      </div>
                      <div className="">
                        <ul className="">
                          <li className="text-md text-slate-600"><p className="border-t-[1px] border-slate-800 p-1">{e.type}</p></li>
                          <li className="text-md text-slate-600"><p className="p-1">작업기간 : {e.period}</p></li>
                          <li className="text-md text-slate-600"><p className="p-1">기여도 : {e.contribution}</p></li>
                          <li className="text-md"><p className="p-1">{e.skill}</p></li>
                          <li className="flex m-2 justify-end">
                            <button className="text-xl lg:text-xl p-1 m-1"><FontAwesomeIcon icon={faPlayCircle}/></button>
                            <button className='bg-slate-900 text-[#fff] rounded-lg p-1'>READ ME</button></li>
                        </ul>
                     </div>
                  </div>
                  )
                })
              }
          </div>
        </div> 
    </>
  )
}

export default Gallery