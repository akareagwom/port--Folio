import React from "react";
import NavBar from "../../component/navbar/NavBar";
import pic from "../../images/pic.jpg";
// import './home.css';
import fort from "../../images/fort.jpg";
import folio from "../../images/folio.jpg"
import background from "../../images/background.mp4";
import About from "../about/About";
import Skils from "../skills/Skills";
import Projects from "../projects/Project";

const Home = () => {
    return ( 
        <div className="lg:w-full ">
               
            <div className="  ">
            <NavBar />
            </div>
            <main className="bg-slate-50 h-full dark:bg-black text-slate-700">
                <section>
                    <div className="  pt-32 text-slate-700  uppercase text-center lg:text-6xl text-4xl">
                        {/* <video src={background}></video> */}
                        <h1 className="font-[poppins] font-bold">akare azikang agwom</h1>
                        <h2 className="pt-16  font-bold">frontend developer</h2>
                        <div className="text-xl text-center rounded bg-slate-900 w-32 justify-center items-center mt-16">
                            <button className="p-4">get started</button>
                        </div>
                        
                    </div>
                </section>
                <section>
                    <div className="mt-60 ml-12  lg:ml-0 shadow shadow-slate-300 dark:shadow-slate-600">
                        <About/>
                    </div>
                </section>
                <section>
                    <div className=" shadow shadow-slate-300  dark:shadow-slate-600">
                        <Skils/>
                    </div>
                </section>
                <section>
                    <div className=" shadow shadow-slate-300  dark:shadow-slate-600">
                        <Projects/>
                    </div>
                </section>
            </main>
        </div>
     );
}
 
export default Home;