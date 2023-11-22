import React from "react";
import data from "../data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

function List({ data }) {
  return (
    <>
      <div className="w-full h-full bg-white dark:bg-slate-800 dark:text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap basis-full">
          {data.map((e, i) => {
            return (
              <>
                <div
                  key={i}
                  className="w-full flex mb-3 mx-2 transition duration-400 hover:scale-105"
                >
                  <div className="w-1/5 h-[200px] object-cover inset-0 flex justify-center border-[1px] border-slate-900 dark:border-white dark:bg-white">
                      <img src={e.img} alt="img" className="w-full h-full" />
                  </div>
                  <div className="text-sm lg:text-md w-4/5 border-y-[1px] border-slate-900 border-r-[1px] px-3 dark:border-white basis-full flex flex-col">
                    <ul className="mb-3 flex justify-between basis-1/3">
                      <li className="text-md font-semibold lg:text-lg">
                        {e.title}
                      </li>
                    </ul>
                    <ul className="mb-2 flex flex-col gap-3 basis-1/3">
                      <li className="text-sm lg:text-md">{e.type}</li>
                      <li className="text-sm lg:text-md">
                        기여도 : {e.contribution}
                      </li>
                      <li className="text-sm lg:text-md">
                        작업기간 : {e.period}
                      </li>
                    </ul>
                    <ul className="flex justify-between items-center mt-4 basis-1/3">
                      <li className="text-sm lg:text-md">
                        사용기술 : {e.skill}
                      </li>
                      <li className="flex gap-1 text-md font-semibold lg:text-lg pb-2">
                        <a href={e.vercel} target="_blank" className="border-[1px] border-black rounded-xl p-1 dark:border-white">Vercel</a>
                        <a href={e.github} target="_blank" className="border-[1px] border-black rounded-xl p-1 dark:border-white">READ ME</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default List;
