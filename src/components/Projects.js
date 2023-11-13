import { faChevronRight, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import datalist from '../data/data.json'
import { useState } from 'react'
import Gallery from './Gallery'
import List from './List'

function Projects() {

    const[isActive,setIsActive]=useState(false);
    const[isActive2,setIsActive2]=useState(false);
    const[list,setList]=useState(true);
    const[gallery,setGallery]=useState(false);
    const[data,setData] =useState(datalist);
    const [cateGory,setCateGory] = useState("전체");

    //필터기능 넣기 
    const menuType =["All","Clone","Project","WebApp"]
    const FilterData = datalist && datalist.filter(e=>{
        return cateGory === "All" || cateGory === e.type
    })
    const handleCategoryClick = (category) => {
        setCateGory(category);
      };

    // const[type,setType]=useState('전체');
    // const dataFilter = datalist.filter(e=>{
    //   if(type ==="전체"){
    //     return e.type
    //   }else{
    //     return e.type === type
    //   }
    // })
    // console.log(dataFilter)
    // const FilterType = [...new Set(datalist.map((e=>e.type)))]
    // console.log(FilterType)
    const toggle = () =>{
      setIsActive(!isActive);
    }
    // const toggle2 = () =>{
    //   setIsActive2(!isActive2);
    // }
    const MouseLeave=()=>{
      setIsActive(false)
    }

    const ActiveList =()=>{
      setList(true);
      setGallery(false)
    }
    const ActiveGallery = () =>{
      setList(false);
      setGallery(true)
    }
    
  return (
    <>  
          <div className="w-full h-full flex mt-20">
            <div className="mx-auto max-w-7xl flex flex-wrap p-[0_2%]">
              <div className="w-full mt-12 text-center mb-5">
                <p className='text-2xl font-semibold lg:text-4xl text-center mb-10 italic'>Projects</p>
                  <div className="wrapper-filters py-10">
                      <div className="filters relative max-w-7xl mx-2 lg:mx-auto flex justify-between">
                        <ul className="flex">
                        {
                            menuType.map((category,i)=>{
                              return(
                                <li key={i} className={`${isActive === i ? 'bg-[#D3E6F9] text-white' :'bg-white text-black'} cursor-pointer mr-2 text-sm md:lg-md lg:text-lg border dark:bg-[#272929] dark:text-[#ebf4f1] p-1 md:p-2 lg:p-3 rounded-md`} onClick={()=>{setIsActive(i); handleCategoryClick(category)}}>
                                      {category}
                                </li>
                              )
                            })
                          }
                        </ul>
                        <div className="flex gap-2 md:mr-3">
                            <span className="list border-[1px] border-slate-800 dark:border-white p-1 cursor-pointer flex" onClick={ActiveList}><img src={"images/icon-filter-list.svg"} alt="list" /></span>
                            <span className="gallery border-[1px] border-slate-800 dark:border-white p-1 cursor-pointer" onClick={ActiveGallery}><img src={"images/filter_icon.svg"} alt="gallery" /></span>
                          </div>
                         
                          {/* <span className={`relative pl-[20px]  cursor-pointer ${list ? 'bg-[url("../public/images/icon-filter-list.svg")]' : 'bg-[url("../public/images/filter_icon.svg")]'} bg-no-repeat`} onClick={toggle} >View
                          </span> */}
                          {/* <ul className={`list p-[15px] ${isActive ? 'block' : 'hidden'}`} onMouseLeave={()=>{setIsActive(false)}}>
                              <li className="cursor-pointer pl-5 w-full relative" onClick={ActiveList}>as List</li>
                              <li className="cursor-pointer pl-5 w-full relative" onClick={ActiveGallery}>as Gallery</li>
                          </ul> */}
                      </div>
                  </div>
                </div>
                { 
                  list ?
                  <List />
                  :<Gallery />
                }
          </div>
        </div>
    </>
  )
}

export default Projects