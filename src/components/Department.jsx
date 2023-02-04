import { Item } from "./Item"

import Extend from "../assets/icons/extend.png"

export function Department({}) {

  return (
    <div>
      <header className="flex justify-between bg-[#1B741F]  px-6 py-1 cursor-pointer">
        <h3 className="text-white font-bold text-2xl">Vegetables</h3>
        <img src={Extend} alt="" className="aspect-[22/11] object-contain"/>
      </header>

      <ul className="flex flex-col bg-[#1B741F80] text-white text-2xl font-regular rounded-b-lg py-2">
        <Item
          item={"Carrots"}
          department={"Vegetables"}
        />
      </ul>
    </div>

  )
}
