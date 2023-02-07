import { useState } from "react"

import RustyExplosion from "../assets/rusty/rustyExplosion.png"

export function useWarning() {
  const [showWarning, setShowWarning] = useState(false)
  const [response, setResponse] = useState('')

  function Warning({children, handleCancel, handleOk}) {
    return (
      <div className="fixed top-0 right-0 bottom-0 left-0 z-10 bg-[#0e174930] grid place-items-center backdrop-blur-[2px]">
        <section
          className="bg-gray-100 px-3 py-6 w-[90%] lg:w-max max-w-[45ch] rounded-lg"
        >
          {children}
          <div className="md:flex gap-6 justify-center mt-3">
            <img src={RustyExplosion} alt="" className="flex-1 aspect-[500/422] max-w-[12rem] mx-auto"/>
            <div className="mt-3 flex-1 flex flex-col justify-center gap-2">
              <button 
                className="
                text-2xl
                font-bold
                text-white
                md:max-w-[70%]
                mx-auto
                p-3
                rounded-lg
                w-full
                bg-[#0E1749]
                transition-[opacity]
                border
                border-transparent
                duration-500
                hover:opacity-80"
                onClick={() => setResponse(true)}
                
              >Delete</button>
              <button 
                className="
                text-2xl
                md:max-w-[70%]
                mx-auto
                font-semibold
                p-3
                rounded-lg
                w-full
                text-[#0E1749]
                border
                border-transparent
                transition-[border]
                duration-500
                hover:border-[#0E1749]"
              >Cancel</button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return [Warning, showWarning, setShowWarning] 
}
