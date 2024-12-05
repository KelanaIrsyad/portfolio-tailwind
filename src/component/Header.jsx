import { IoLogoGithub } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";


function Header() {
  return (
    <div className="py-5">
        <div className="flex justify-center">
            <div className="text-2xl p-4 text-white hover:text-primary hover:cursor-pointer lg:text-3xl">
                <IoLogoGithub />
            </div>
            <div className="text-2xl p-4 text-white hover:text-primary hover:cursor-pointer lg:text-3xl">
                <AiFillInstagram />
            </div>
            <div className="text-2xl p-4 text-white hover:text-primary hover:cursor-pointer lg:text-3xl">
                <IoLogoLinkedin />
            </div>
        </div>
    </div>
  )
}

export default Header