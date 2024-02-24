import { useState } from "react"
import featuresData from '../data/data'
import FeaturesComponent from "./FeaturesComponent"

const Features = () => {

    const [activeTab, setActiveTab] = useState('Bookmarking')

    const handleTabChange = (tab) => {
        setActiveTab(tab)
    }

  return (
    <div className='flex  flex-col gap-6 items-center justify-center w-full mx-auto my-24'>
        {/* features-details */}
        <div className="text-center flex flex-col items-center justify-center md:w-1/2">
           <h1 className="text-3xl">Features</h1>
           <p className="leading-8">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        </div>

        {/* features tabs */}
        <div>
            {/* tablist */}
            <div className="flex md:flex-row flex-col items-center justify-center md:gap-12 gap-4 md:my-8 my-4">
                <div onClick={() => handleTabChange('Bookmarking')} className={`cursor-pointer pb-4 ${activeTab === 'Bookmarking' ? 'font-bold border-b-red-600 border-b-[2px] ' : 'font-normal'}`}>Simple Bookmarking</div>
                <div onClick={() => handleTabChange('Searching')}  className={`cursor-pointer pb-4  ${activeTab === 'Searching' ? 'font-bold border-b-red-600 border-b-[2px]' : 'font-normal'}`}>Speedy searching</div>
                <div onClick={() => handleTabChange('Sharing')} className={`cursor-pointer pb-4  ${activeTab === 'Sharing' ? 'font-bold border-b-red-600 border-b-[2px]' : 'font-normal'}`}>Easy Sharing</div>
            </div>
            {/* tabs content */}
            <div>
            {activeTab === 'Bookmarking' && <FeaturesComponent illustration={featuresData[0].illustartion}  heading={featuresData[0].heading} text={featuresData[0].text}/>}
            {activeTab === 'Searching' && <FeaturesComponent illustration={featuresData[1].illustartion}  heading={featuresData[1].heading} text={featuresData[1].text}/>}
            {activeTab === 'Sharing' && <FeaturesComponent illustration={featuresData[2].illustartion}  heading={featuresData[2].heading} text={featuresData[2].text}/>}    
            </div>
        </div>
    </div>
  )
}

export default Features