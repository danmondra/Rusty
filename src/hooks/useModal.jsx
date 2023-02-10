import { useEffect, useState } from 'react'

import { BackgroundSquare } from '../components/BackgroundSquare'

export function BtnModal({color, handleClick, text}) {

  return (
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
      bg-[#2d31c8]
      transition-[background-color border-color]
      border
      border-transparent
      duration-500
      hover:bg-[#2d31c850]
      hover:border-white
      "
      onClick={handleClick}
      style={{
        backgroundColor: `${color}`
      }}
    >{text}</button>
  )
}

export function useModal() {
  const [modal, setModal] = useState(false)

  useEffect(() => {
    if(modal) {
      setTimeout(() => {
        const modalSection = document.querySelector('#modalSection')
        modalSection.style.opacity = "1"
        modalSection.style.transform = "translate(-50%) scale(1)"
      }, 50)
    }
  })


  function Modal({children, text, image}) {
    return (
      <div
        className="
        fixed
        top-0
        right-0
        bottom-0
        left-0
        z-10
        bg-[#0e174930]
        backdrop-blur-[2px]
        "
        onClick={(e) => {
          if(e.target === e.currentTarget) {
            setModal(false)
          }
        }}
      >
        <section
          className="
          px-3
          py-6
          lg:w-max
          w-[90%]
          md:max-w-[40rem]
          rounded-lg
          relative
          top-[15vh]
          left-[50%]
          translate-x-[-50%]
          bg-[#130b1c]
          transition-[opacity transform]
          duration-200
          opacity-0
          scale-90
          overflow-hidden
          flex"
          id="modalSection"
        >
          <div className='absolute w-full h-full top-0 left-0 z-[-1] opacity-40 blur-[70px]'>
            <BackgroundSquare
              position={{top: "0rem", left: "0rem"}}
              width={"9rem"}
              color={"#2e31c8"}
            />
            <BackgroundSquare
              position={{top: "70%", left: "70%"}}
              width={"9rem"}
              color={"#237811"}
            />
          </div>
          <picture className='min-w-[12rem] mx-auto aspect-square flex items-center'>
            <img src={image} alt="" className="object-contain "/>
          </picture>
          <div className="md:flex gap-6 justify-center mt-3 flex-col">
            <h2 className="text-2xl text-white font-bold text-center min-w-[28rem]">{text} </h2>
            {children}
          </div>
        </section>
      </div>
    )
  }

  return [Modal, modal, setModal] 
}
