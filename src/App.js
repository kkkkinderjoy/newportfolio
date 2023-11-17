import About from "./components/About";
import Main from "./components/Main";
import Projects from "./components/Projects";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skill from "./components/Skill";
import Scroll from "./components/Scroll";
import Progressbar from "./components/Progressbar";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { toggleTheme } from "./store";

function App(){

  return(
    <Provider store={store} > 
      <Inner />
    </Provider>
  )
}

function Inner() {

  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.dark);
 
  useEffect(()=>{
    const savedTheme =localStorage.getItem("theme");
    if(savedTheme && savedTheme !== darkMode){
      dispatch(toggleTheme())
    }
  },[dispatch])


  useEffect(()=>{
    if(darkMode==="dark"){
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme","dark")
    }else{
      document.documentElement.classList.remove("dark")
      localStorage.removeItem("theme")
    }
  },[darkMode])

  const [scroll,setScroll]=useState(0);

  useEffect(() => {
    const progressBarHandler = () =>{
          const totalScroll = document.documentElement.scrollTop;
          const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scroll = `${totalScroll/windowHeight}`;
          setScroll(scroll);
    }
    window.addEventListener("scroll", progressBarHandler);
    return() =>window.removeEventListener('scroll',progressBarHandler)
    
  });


  return (
    <>
      <Progressbar scroll={scroll}/>
      <Header />
      <Main />
      <About />
      <Skill />
      <Projects />
      <Scroll />
      <Footer />
    </>
  );
}

export default App;
