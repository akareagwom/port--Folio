import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import './navbar.css';
// import burger from "../../images/burger.svg";




const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState()

    useEffect(()=>{
        if (theme=== 'dark') {
            document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
        }
    },[theme]);

    const handleThemeSwitch = () => {
        setTheme(theme==="dark"? "light" : "dark")
    };
    // const Burger = () =>{
        
    // }

    return ( 
        <div className="navbar">
            <nav className="flex lg:fixed dark:bg-black p-8 h-12 justify-between dark:shadow-slate-700 dark:shadow lg:flex lg:justify-between  bg-white shadow lg:w-full sm:w-full relative text-slate-600 text-2xl list-none">
                <span className="font- font-abc uppercase ">beebela</span>
                <span className=" justify-end text-3xl cursor-pointer lg:hidden block" >
                <svg name={open? "close":"menu" }onClick={()=> setOpen(!open)}  width="24" height="24"><path d="M5 6h14M5 12h14M5 18h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>
                </span>
                <div className="w-full block absolute flex-grow lg:static z-[-1] lg:z-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 lg:flex lg:items-center lg:justify-end lg:w-auto">
                <Link to=''className="block mt-4 lg:inline-block lg:mt-0 hover:text-black dark:hover:text-white mr-4"><li>Home</li></Link>
                <Link to=''className="block mt-4 lg:inline-block lg:mt-0 hover:text-black dark:hover:text-white mr-4"><li>About</li></Link>
                <Link to=''className="block mt-4 lg:inline-block lg:mt-0 hover:text-black dark:hover:text-white mr-4"><li>Contact</li></Link>
                <button onClick={handleThemeSwitch} className="block mt-4 lg:inline-block lg:mt-0 hover:text-black dark:hover:text-white mr-4"><li>Dark Mode</li></button> 
                </div>
            </nav>
        </div>
             );
}
 
export default NavBar;




{/* <div class="col-md-8 wow fadeIn animated" data-wow-delay="0.9s" style="visibility: visible; animation-delay: 0.9s; animation-name: fadeIn;">
						<h3>Simple and Elegant</h3>
						<h1>Lavish</h1>
						<h2 class="rotate" style="opacity: 1;"> UI &amp; UX SPECIALIST</h2>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
						<a href="#work" class="btn btn-default smoothScroll wow fadeInUp animated" data-wow-delay="1s" style="visibility: visible; animation-delay: 1s; animation-name: fadeInUp;">Get started</a>
					</div> */}