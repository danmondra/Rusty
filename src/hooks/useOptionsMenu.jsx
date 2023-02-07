import { useState } from "react"
import Trash from "../assets/icons/trash.png"

export function useOptionsMenu({item}) {
  const [showMenu, setShowMenu] = useState(false) 

  const itemID = item.split(' ').join('')

  function handleOptions() {
    setShowMenu(true)

    function closeOptions(eventOutside) {
      const btnActual = document.querySelector(`input[id="${itemID}"] ~ label .moreBtn`)
      const imageBtnActual = document.querySelector(`input[id=${itemID}] ~ label .more`)

      // El menú solo se cierra cuando el click se da en un lugar diferente al que lo activó
      if(btnActual !== eventOutside.target && imageBtnActual !== eventOutside.target) {
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
        <button
          className="
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
        </button>
        <button
          className="px-4
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
          <img src={Trash} alt="Icon from Trash" width="21px" height="25px"/>
        </button>
      </div>

    )
  }

  return [OptionsMenu, handleOptions, showMenu]
}