import React from "react";

function Progressbar({ scroll }) {
  return (
    <>
      <div className="progressContainer fixed top-0 h-1 left-0 z-[120] w-full">
        <div
          id="progressBar"
          className=" h-2 bg-gradient-to-r transform-width duration-300 origin-top-left from-sky-300 to-violet-300"
          style={{ transform: `scale(${scroll}, 1)`}}
        ></div>
      </div>
    </>
  );
}

export default Progressbar;
