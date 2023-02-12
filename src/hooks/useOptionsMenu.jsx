import { useState } from 'react'
import Trash from '../assets/icons/trash.png'

export function useOptionsMenu() {
  const [showMenu, setShowMenu] = useState(false) 

  function handleOptions(elementID) {
    setShowMenu(true)

    function closeOptions(eventOutside) {
      // El menú solo se cierra cuando el click se da en un lugar diferente al que lo activó
      const idOfItemTrigger = eventOutside.target.dataset.elementid
      if(idOfItemTrigger !== elementID) {
        setShowMenu(false)
        document.removeEventListener('click', closeOptions)
      }
    }

    document.addEventListener('click', closeOptions)
  }

  function OptionsMenu({handleDelete}) {

    return (
      <div
        className="
        absolute
        bottom-[100%]
        right-[5%]
        bg-white
        text-[#0e1749]
        text-lg
        rounded-md
        overflow-hidden"
      >
        {false && <button
          className="
          option
          px-4
          py-1
          block
          hover:bg-gray-200
          border-b
          transition-[background-color]
          duration-300
          w-full
          text-left"
        >
          Change
        </button>}
        <button
          className="
          option
          px-4
          py-1
          flex
          justify-between
          w-full
          hover:bg-gray-200
          hover:text-red-700
          items-center
          transition-[background-color
          color]
          duration-300
          text-left
          gap-3"
          onClick={handleDelete}
        >
          Delete
          <img src={Trash} alt="Icon from Trash" width="21px" height="25px" className='option'/>
        </button>
      </div>

    )
  }

  return [OptionsMenu, handleOptions, showMenu]
}
