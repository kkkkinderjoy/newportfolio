import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import 'animate.css'
import WOW from "wowjs";

function LoadingPage() {
  const [showCard, setShowCard] = useState(0);
  const [showing, setShowing] = useState(false);

useEffect(()=>{
    new WOW.WOW({
        boxClass :"wow",
        animateClass:"animate_animated",
        live:false, 
        mobile:true
    }).init();
  },[])

useEffect(() => {
  if (showCard < 8) {
    const timer = setTimeout(() => {
      setShowCard((prevShowCard) => prevShowCard + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }
  //  if(showCard === 8){
  //     const timer = setTimeout(()=>{
  //       setShowCard((prevShowcard)=> prevShowcard -1);
  //     },1000)
  //     return () => clearTimeout(timer)
  //   }
  
}, [showCard]);

 

  return (
    <>
    <div className="w-full h-[760px] bg-white text-slate-700 flex justify-center mx-auto lg:p-10 lg:mb-5">   
        <div className="max-w-7xl flex-wrap">
            <div className="w-full h-full flex justify-center">
                <div className="w-[26rem] h-[26rem] lg:w-[32rem] lg:h-[32rem] flex justify-center relative">
                { 
                    Array(8).fill().map(( _ , i)=>{  
                      
                      return( 
                              <div key={i} className={`card${i+1} opacity-0 w-[6rem] h-[7rem] lg:w-[8rem] lg:h-[11rem] bg-[#E8E4D9] wow animate__fadeIn `} data-wow-duration="4.5s" data-wow-delay={`${i* 0.5}s`}>
                                <p className="font-bold text-lg lg:text-2xl text-right mr-3 mb-2">0{i+1}</p>
                                <img src={`images/a0${i+1}.jpg`} alt="card" className='mx-auto w-[4rem] h-[4rem] lg:w-[7rem] lg:h-[8rem]'/>
                              </div>
                            )
                    })
                  }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LoadingPage