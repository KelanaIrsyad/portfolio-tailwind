import foto from '../assets/noBG1.png'

function Biodata() {
  return (
    <section className='pt-10'>
    <div className="container">
        <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
                <h1 className="text-base font-semibold text-primary md:text-xl">
                    Hallo saya, 
                    <span className="block font-bold text-neutral-200 text-4xl my-2
                    lg:text-5xl">
                        Irsyad Kelana
                    </span>
                </h1>
                <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">Web Developer</h2>
                <p className="font-medium text-slate-400 mb-10 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, adipisci! Asperiores, illo et architecto iure adipisci commodi cum sapiente expedita!
                </p>

                <a href="" className="text-base font-semibold text-white
                bg-cyan-500 py-2 px-6 rounded-full hover:shadow-lg
                hover:bg-cyan-400 transition duration-300 ease-in-out">CV</a>
            </div>

            <div className="w-full self-end px-4 lg:w-1/2">
                <div className="relative mt-10 lg:mt-9 lg:right-0">
                    <img src={foto} alt="irsyad kelana" 
                    className="mx-auto sm:w-56 md:w-72 lg:w-80 sm:pb-10"/>
                    <span className="absolute -bottom-10 -z-10 left-1/2 -translate-x-1/2">
                        <svg width={400} height={400} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#5ee0bb" d="M42,-76.2C52.2,-66.9,56.6,-51.1,64.9,-37.3C73.1,-23.5,85.2,-11.7,88.5,1.9C91.8,15.5,86.2,31,76.8,42.8C67.3,54.5,54,62.5,40.6,61.7C27.1,61,13.6,51.4,-0.4,52.1C-14.3,52.7,-28.6,63.5,-35.9,60.7C-43.2,57.9,-43.4,41.6,-47.5,29.2C-51.5,16.8,-59.4,8.4,-65.7,-3.6C-72,-15.7,-76.7,-31.4,-69.7,-38.5C-62.6,-45.7,-43.8,-44.4,-30.2,-51.8C-16.6,-59.1,-8.3,-75.1,3.8,-81.7C15.9,-88.3,31.8,-85.5,42,-76.2Z" transform="translate(100 100)"/>
                        </svg>
                    </span>
                </div>
            </div>
        </div>    
    </div>
    </section>
  )
}

export default Biodata