import chrome from '../assets/images/logo-chrome.svg'
import firefox from '../assets/images/logo-firefox.svg'
import opera from '../assets/images/logo-opera.svg'

const Extension = () => {
  return (
    <div className='w-full mx-auto md:my-24 flex items-center justify-center flex-col'>
        <div className='flex flex-col gap-3 items-center justify-center'>
            <h1 className='text-2xl font-semibold'>Download the extension</h1>
            <p className='w-3/4 text-center'> We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
        </div>
        <div className='flex md:flex-row flex-col md:gap-12 gap-4 justify-between md:my-12 my-6'>
            {/* chrome */}
            <div className='shadow-lg rounded-lg bg-white p-4 w-full'>
                <div className='flex items-center justify-center flex-col'>
                  <img src={chrome} alt="chrome" className='p-3' />
                  <h1 className='text-xl font-bold mb-1'>Add to Chrome</h1>
                  <p className='text-[14px]'>Minimum version 62</p>
                </div>
                <div className='py-6'>
                <button className='px-4 py-2 rounded-lg  bg-blue-600 text-white'>Add & Install Extension</button>
                </div>
              
            </div>
            {/* firefox */}
            <div className='shadow-lg rounded-lg bg-white p-4 w-full md:relative md:top-[2rem]'>
                <div className='flex items-center justify-center flex-col'>
                  <img src={firefox} alt="firefox" className='p-3' />
                  <h1 className='text-xl font-bold mb-1'>Add to Firefox</h1>
                  <p className='text-[14px]'>Minimum version 55</p>
                </div>
                <div className='py-6'>
                <button className='px-4 py-2 rounded-lg  bg-blue-600 text-white'>Add & Install Extension</button>
                </div>
            </div>
            {/* opera */}
            <div className='shadow-lg rounded-lg bg-white p-4 w-full md:relative md:top-[4rem]'>
                <div className='flex items-center justify-center flex-col'>
                  <img src={opera} alt="firefox" className='p-3' />
                  <h1 className='text-xl font-bold mb-1'>Add to Opera</h1>
                  <p className='text-[14px]'>Minimum version 46</p>
                </div>
                <div className='py-6'>
                <button className='px-4 py-2 rounded-lg  bg-blue-600 text-white'>Add & Install Extension</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Extension