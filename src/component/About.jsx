import foto from "../assets/about.jpg"

function About() {
  return (
    <>
    <div className="container">
        <h2 className="text-4xl font-bold text-primary flex justify-center mt-20">About Me</h2>
        <div className="text-white max-w-[1200px] mx-auto my-12">
            <div className="md:grid md:grid-cols-2 sm:py-16 gap-8">
                <div className="mt-4 md:mt-0 text-left flex">
                    <div className="my-auto mx-6">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui aliquid vero ipsa aspernatur facere tempora nihil veniam, officiis rem laborum?</p>
                    </div>
                </div>
                <img src={foto} alt="" className="mx-auto rounded-3xl py-8 md:py-0" width={300} height={300}/>

                <div className="mt-4 md:mt-0 text-left flex">
                    <div className="my-auto mx-6">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo odit reiciendis in excepturi cumque, beatae laborum pariatur! Voluptas, perspiciatis? Eveniet.</p>
                    </div>
                </div>
                <img src={foto} alt="" className="mx-auto rounded-3xl py-8 md:py-0" width={300} height={300}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default About