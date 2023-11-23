import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <div className="w-full h-15 bg-white pt-20 py-5 dark:bg-slate-800 ">
      <div className="max-w-7xl mx-auto flex-wrap">
        <div className="flex items-center justify-between">
          <p className="dark:text-white text-slate-800 text-sm lg:text-xl">
            COPYRIGHT © 2023. ALL RIGHTS RESERVED
          </p>
          <ul className="">
            <li className="">
              <div className="flex justify-center gap-6 lg:justify-start text-slate-800 ">
                <a href="mailto:dbswjd5562@gmail.com" target="_blank" className="flex gap-3 items-center"><FontAwesomeIcon icon={faEnvelope} size="2xl" className="cursor-pointer dark:text-white"/></a>
                <a href="https://github.com/kkkkinderjoy"  target="_blank"><FontAwesomeIcon icon={faGithubAlt} size="2xl" className="cursor-pointer dark:text-white"/></a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;