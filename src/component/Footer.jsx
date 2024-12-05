import { IoLogoGithub } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";

function Footer() {
  return (
    <footer className="relative bottom-0 w-full p-4">
    <div className="text-center pb-4">
        <a className="inline-block justify-center items-center text-2xl md:text-4xl text-center px-4 text-white hover:text-[#38f7ff]">
        <IoLogoGithub/>
        </a>
        <a className="inline-block justify-center items-center text-2xl md:text-4xl text-center px-4 text-white hover:text-[#38f7ff]">
        <AiFillInstagram/>
        </a>
        <a className="inline-block justify-center items-center text-2xl md:text-4xl text-center px-4 text-white hover:text-[#38f7ff]">
        <IoLogoLinkedin/>
        </a>
    </div>
    
    <p className="text-center mt-4 text-[#19C7BE] hover:text-[#38f7ff] cursor-default">
    © Irsyad Kelana | All Rights Reserved
    </p>
</footer>
  )
}

export default Footer