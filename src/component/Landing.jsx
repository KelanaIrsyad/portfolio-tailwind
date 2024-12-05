import About from "./About"
import Biodata from "./Biodata"
import Contact from "./Contact"
import Footer from "./Footer"
import Header from "./Header"
import Skill from "./Skill"

function Landing() {
  return (
    <>
    <div>
        <Header />
        <Biodata />
        <About />
        <Skill />
        <Contact />
        <Footer />
    </div>
    </>
  )
}

export default Landing