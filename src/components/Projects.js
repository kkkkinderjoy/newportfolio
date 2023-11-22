import {
  faBorderAll,
  faChevronRight,
  faList,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import datalist from "../data/data.json";
import { useState } from "react";
import Gallery from "./Gallery";
import List from "./List";

function Projects() {
  const [isActive, setIsActive] = useState(false);
  const [list, setList] = useState(true);
  const [gallery, setGallery] = useState(false);
  const [data, setData] = useState(datalist);
  const [cateGory, setCateGory] = useState("All");

  const FilterData =
    datalist &&
    datalist.filter((e) => {
      return cateGory === "All" || cateGory === e.type;
    });

  const handleCategoryClick = (category) => {
    setCateGory(category);
  };
  const menuType = ["All", "Clone", "Team", "Personal"];

  const ActiveList = () => {
    setList(true);
    setGallery(false);
  };
  const ActiveGallery = () => {
    setList(false);
    setGallery(true);
  };

  return (
    <>
      <div id="projects" className="w-full h-auto py-20 dark:bg-slate-800 dark:text-white">
        <div className="max-w-7xl mx-auto">
          <p className="w-[89%] text-2xl font-semibold lg:text-3xl text-left mb-10 italic relative after:absolute after:ml-[1rem] after:w-full after:h-[1px] after:bg-[#7d7789] after:left-25 after:top-1/2 after:-translate-y-1/2">
            Projects
          </p>
          <div className="max-w-7xl mx-auto my-2">
            <div className="wrapper-filters">
              <div className="filters relative max-w-7xl mx-2 lg:mx-auto flex justify-between mb-10 ">
                <ul className="flex">
                  {menuType.map((category, i) => {
                    return (
                      <li
                        key={i}
                        className={`${
                          isActive === i
                            ? "bg-[#146ebe] text-white"
                            : "bg-white text-black"
                        } cursor-pointer mr-2 text-sm md:lg-md lg:text-lg border dark:bg-slate-800 dark:text-[#ebf4f1] p-1 md:p-2 rounded-md dark:hover:bg-[#146ebe]`}
                        onClick={() => {
                          setIsActive(i);
                          handleCategoryClick(category);
                        }}
                      >
                        {category}
                      </li>
                    );
                  })}
                </ul>
                <div className="flex items-center gap-1">
                  <span
                    className="p-1 cursor-pointer flex"
                    onClick={ActiveList}
                  >
                    <FontAwesomeIcon
                      icon={faList}
                      className="sm:text-md md:text-xl lg:text-2xl hover:text-[#146ebe] dark:text-white dark:hover:text-[#146ebe]"
                    />
                  </span>
                  <span
                    className="p-1 cursor-pointer flex"
                    onClick={ActiveGallery}
                  >
                    <FontAwesomeIcon
                      icon={faBorderAll}
                      className="sm:text-md md:text-xl lg:text-2xl hover:text-[#146ebe] dark:text-white dark:hover:text-[#146ebe]"
                    />
                  </span>
                </div>
              </div>
            </div>
            {list ? <List data={FilterData} /> : <Gallery data={FilterData} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
