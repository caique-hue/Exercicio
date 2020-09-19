// MARK: React
import React from 'react'

// MARK: Contexts
import { useContextExample } from '../context/useContextExample'
import { useSnackbar } from '@brancol/react-snackbar'

export function Home() {
  const { stateExample } = useContextExample()
  const snackbar = useSnackbar()

  return (
    <div className="flex items-center justify-around w-full h-screen bg-black">
      <div className="container flex flex-row items-center justify-between h-32 text-left bg-gray-100bg-primary-500">
        <img src="https://nstark.netlify.app/img/hero.jpg" alt="" className="w-3/12" />
        <div className="flex flex-col">
          <p className="text-sm text-white">Hey There!</p>
          <p className="text-6xl font-extrabold text-white">I'm Martin Stark</p>
          <p className="mb-2 text-base text-gray-500">
            I am Martin Stark. Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest
          </p>
          <p className="mb-2 text-base text-gray-500">
            and must set kind next many near nay. He exquisite continued explained middleton am. Impossible
          </p>
          <p className="mb-2 text-base text-gray-500">considered invitation him men instrument saw celebrated unpleasant.</p>
          <div>
            <button className="px-8 py-4 mt-4 mr-4 font-extrabold text-center text-white border border-solid rounded bg-warning-200 border-warning-200">
              DOWNLOAD C.V
            </button>
            <button className="px-4 py-2 mt-4 mr-2 text-center text-white bg-transparent border border-solid rounded-full border-warning-200">
              <i class="fab fa-facebook-f"></i>
            </button>
            <button className="px-3 py-2 mt-4 mr-2 text-center text-white bg-transparent border border-solid rounded-full border-warning-200">
              <i class="fab fa-twitter"></i>
            </button>
            <button className="px-3 py-2 mt-4 mr-2 text-center text-white bg-transparent border border-solid rounded-full border-warning-200">
              <i class="fas fa-basketball-ball"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
