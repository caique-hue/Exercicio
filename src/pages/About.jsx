// MARK: React
import React from 'react'

export function About() {
  return (
    <div className="flex justify-center w-full h-screen bg-black">
      <div className="flex flex-col items-center justify-center w-7/12  text-white ">
        <p className="text-left flex ">About me</p>

        <p className="font-extrabold text-center ">
          I am a creative web designer from USA, California. I love to talk with you about our unique services.
        </p>
        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque Lorem ipsum dolor sit</p>
        <p className="text-gray-500">amet, consectetur adipiscing elit. Maecenas in pulvinar neque Lorem ipsum dolor sit amet, consectetur</p>
        <p className="text-gray-500">adipiscing elit. Maecenas in pulvinar neque.</p>
        <div classname="flex flex-cow items-center justify-center">
        <button className="px-8 py-4 mt-4 mr-4 font-extrabold text-center text-white border border-solid rounded bg-warning-200 border-warning-200">
              DOWNLOAD C.V
            </button>
            <button className="px-8 py-4 mt-4 mr-4 text-center text-white border border-solid rounded bg-black border-warning-200">
              Hire me
            </button>
            </div>
      </div>
      <div className="w-5/12 h-full ">
        <img
          src="https://www.infoescola.com/wp-content/uploads/2017/04/pombo-comum_349117397-1000x701.jpg"
          alt=""
          className="object-cover w-full h-full"
        />
        
        
      </div>
    </div>
  )
}
