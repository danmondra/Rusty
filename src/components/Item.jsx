import { useState } from "react"

import {ItemOptions} from "./ItemOptions"

import More from "../assets/icons/more.png"

export function Item({item, departmentName, departmentColor}) {
  const [showOptions, setShowOptions] = useState(false) 

  const itemID = item.split(' ').join('')
  const itemWithUppercase = item.charAt().toUpperCase() + item.slice(1)

  function handleOptions() {
    setShowOptions(true)

    function closeOptions(eventOutside) {
      const btnActual = document.querySelector(`input[id="${itemID}"] ~ label .moreBtn`)
      const imageBtnActual = document.querySelector(`input[id=${itemID}] ~ label .more`)

      // El menú solo se cierra cuando el click no se da en el botón que lo activó
      if(btnActual !== eventOutside.target && imageBtnActual !== eventOutside.target) {
        setShowOptions(false)
        document.removeEventListener('click', closeOptions)
      }
    }

    document.addEventListener('click', closeOptions)
  }

  return (
    <>
      <li className="relative px-6 py-2 flex gap-4 items-center">
        <input
          type="checkbox"
          id={itemID}
          name={departmentName}
          value={itemID}
          className={`
            w-6
            appearance-none
            border-2
            aspect-square
            h-6
            rounded
            border-white
            checked:bg-check
            bg-center
            bg-contain
          `}
          style={{
            backgroundColor: `${departmentColor}90`
          }}
        />
        <label
          htmlFor={itemID}
          className="flex w-full justify-between items-center"
        >
          {itemWithUppercase}
          <button
            className="aspect-square w-[1.3rem] moreBtn"
            onClick={handleOptions}
          >
            <img src={More} alt="Icon for more options" className="object-cover mx-auto more"/>
          </button>
        </label>

        {showOptions && <ItemOptions />}
      </li>
    </>
  )
}
