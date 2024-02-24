
const FeaturesComponent = ({illustration, heading, text}) => {
  return (
    <div className='max-w-[1120px] flex md:flex-row flex-col md:gap-24 gap-8 items-center justify-between w-full mx-auto my-12 md:my-24'>
       {/* image */}
       <div className='relative'>
            <img src={illustration} alt="Illustration" />
            <div className='w-[500px] md:h-[300px] h-[250px] rounded-r-full bg-blue-600 absolute bottom-[-6rem] left-[-10rem] z-[-1]'>
            </div>
        </div>
         {/* details */}
         <div className='md:w-1/2 p-6 flex flex-col gap-6 md:text-left text-center md:my-0 mt-12'>
            <h1 className='font-bold md:text-4xl text-3xl  '>{heading}</h1>
            <p className='md:leading-8 leading-6'>{text}</p>
            <div className='flex gap-6 md:justify-start justify-center'>
            <button className='shadow-lg text-[15px] bg-blue-600 py-3 md:px-5 px-4 text-gray-800 rounded-md'>More Info</button>   
            </div>
        </div>
    </div>
  )
}

export default FeaturesComponent