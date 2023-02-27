import html5 from "../../images/html5.png"
import CSSLogo from "../../images/CSSLogo.png"
import JavaScript from "../../images/JavaScript.png"
import reactjs from "../../images/reactjs.png"
import Tailwind from "../../images/Tailwind.png"
import chakra from "../../images/chakra.png"
import material from "../../images/material.png"

const Skils = () => {
    return ( 
        <div>
            <section className="block  lg:grid lg:grid-rows-3 lg:grid-cols-6 p-28 items-center justify-center">
                <div className="block ">
                    <h1 className="text-3xl font-bold">Skills</h1>
                    <div className="w-32">
                        <img src= {html5} alt="" srcset="" />
                        <h2>HTML5</h2>
                    </div>
                    <div className="">
                        <img src= {CSSLogo} alt="" srcset="" />
                        <h2>CSS</h2>
                    </div>
                    <div className="">
                        <img src={JavaScript} alt="" srcset="" />
                        <h2>JAVASCRIPT</h2>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold">Framework</h1>
                    <div className="w-36">
                        <img src={reactjs} alt="" srcset="" />
                        <h2>Reactjs</h2>
                    </div>
                </div>
                <div className="block ">
                    <h1 className="text-3xl font-bold">Style Library</h1>
                    <div className="w-28">
                        <img src={Tailwind} alt="" srcset="" />
                        <h2>Tailwind CSS</h2>
                    </div>
                    <div className="w-44">
                        <img src={chakra} alt="" srcset="" />
                        <h2>Chakra UI</h2>
                    </div>
                    <div className="w-44">
                        <img src={material} alt="" srcset="" />
                        <h2>Material UI</h2>
                    </div>
                </div>
            </section>
        </div>

     );
}
 
export default Skils;