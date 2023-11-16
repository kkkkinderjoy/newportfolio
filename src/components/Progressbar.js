import React from 'react'

function Progressbar({scroll}) {
  return (
    <>
        <div className="progressContainer fixed top-0 h-1 left-0 z-[120] w-full" >
            <div id="progressBar" className=" h-1 bg-gradient-to-r transform-width duration-300 origin-top-left from-sky-400 to-violet-400" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}}></div>
        </div>
    </>
  )
}

export default Progressbar