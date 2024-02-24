import illustrationHero from '../assets/images/illustration-hero.svg'

const Hero = () => {
  return (
    <div className='max-w-[1120px] flex md:flex-row flex-col-reverse gap-6 items-center justify-center w-full mx-auto my-12 md:my-24'>
        {/* details */}
        <div className='md:w-1/2 p-6 flex flex-col gap-6 md:text-left text-center md:my-0 mt-12'>
            <h1 className='font-bold md:text-5xl text-3xl  '>A Simple Bookmark Manager</h1>
            <p className='md:leading-8 leading-6'> A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            <div className='flex gap-6 md:justify-start justify-center'>
            <button className='shadow-lg text-[15px] bg-blue-600 py-3 md:px-5 px-4 text-gray-800 rounded-md'>Get it on Firefox</button>
                <button className='shadow-lg text-[15px] bg-gray-300 rounded-md py-3 md:px-5 px-4 text-white'>Get it on Chrome</button>
               
            </div>
        </div>
        {/* image */}
        <div className='relative'>
            <img src={illustrationHero} alt="Illustration Hero" />
            <div className='w-[500px] md:h-[300px] h-[250px] rounded-l-full bg-blue-600 absolute top-24 right-[-10rem] z-[-1]'>
            </div>
        </div>
    </div>
  )
}

export default Hero