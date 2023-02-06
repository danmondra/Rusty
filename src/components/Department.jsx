import { Item } from "./Item"

import Extend from "../assets/icons/extend.png"

import { colorDepartments } from "../data/colorDepartments"
import {useEffect, useState} from "react"


export function Department({name, items}) {
  const [expanded, setExpanded] = useState(true)

  const departmentColor = colorDepartments[name]

  useEffect(() => {
    //TODO --- Crear grid masonry
    //console.log(document.querySelectorAll('ul'))
  }, [])

  return (
    <div>
      <header
        className="flex justify-between px-6 py-1 cursor-pointer"
        style={{backgroundColor: departmentColor}}
        onClick={() => {setExpanded(!expanded)}}
      >
        <h3 className="text-white font-bold text-2xl">{name}</h3>
        <img
        src={Extend}
        alt="Icon for expand list of items"
        className="aspect-[22/11] object-contain transtion-[transform] duration-200"
          style={{
            transform: `${expanded ? 'rotate(180deg)' : 'unset' }`
          }}
        />
      </header>

      <ul
        className="flex flex-col text-white text-2xl font-regular rounded-b-lg py-2"
        style={{
          backgroundColor: `${departmentColor}80`,
          display: `${expanded ? 'flex' : 'none'}`

        }}
      >
        {items.map((item, i) => (
          <Item
            item={item}
            departmentName={name}
            departmentColor={departmentColor}
            key={item+i}
          />
        ))}
      </ul>
    </div>

  )
}
