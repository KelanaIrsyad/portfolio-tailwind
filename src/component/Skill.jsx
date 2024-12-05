import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { IoLogoHtml5 } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";

function Skill() {
  return (
    <div className="">
        <h2 className="text-4xl font-bold text-primary flex justify-center my-20">Skills</h2>

        <div className="container border-2 max-w-screen-md w-3/4 mx-auto mb-10 rounded-xl
        border-primary shadow-all hover:shadow-2all md:w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                <div className="h-40 text-3xl lg:text-5xl flex flex-col items-center justify-center">
                    <IoLogoJavascript className="text-primary"/>
                    <span className="text-2xl text-primary">JavaScript</span>
                </div>
                <div className="h-40 text-3xl lg:text-5xl flex flex-col items-center justify-center">
                    <FaJava className="text-primary"/>
                    <span className="text-2xl text-primary">Java</span>
                </div>
                <div className="h-40 text-3xl lg:text-5xl flex flex-col items-center justify-center">
                    <IoLogoReact className="text-primary"/>
                    <span className="text-2xl text-primary">React</span>
                </div>
                <div className="h-40 text-3xl lg:text-5xl flex flex-col items-center justify-center">
                    <FaNodeJs className="text-primary"/>
                    <span className="text-2xl text-primary">NodeJs</span>
                </div>
                <div className="h-40 text-3xl lg:text-5xl flex flex-col items-center justify-center">
                    <IoLogoHtml5 className="text-primary"/>
                    <span className="text-2xl text-primary">HTML</span>
                </div>
                <div className="h-40 text-3xl lg:text-5xl flex flex-col items-center justify-center">
                    <BiLogoTailwindCss className="text-primary"/>
                    <span className="text-2xl text-primary">Tailwind</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill