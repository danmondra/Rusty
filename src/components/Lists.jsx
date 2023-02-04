import { List } from "./List"

import Add from "../assets/icons/add.png"

export function Lists({lists, actualList}) {
  return (
    <div className="">
      <h2 className="block text-2xl text-white font-bold max-w-prose pt-6 px-4">
        Lists:
      </h2>
      <ol className="mt-3 flex flex-col text-2xl font-regular text-white gap-3 px-4 pb-3">

        {lists.map((list) => (
          <List
            lists={list}
            actualList={actualList}
            key={list.name}
          />
        ))}

      </ol>

      <button
        className="w-full
        flex
        text-white
        text-2xl
        justify-between
        items-start
        gap-3
        duration-500
        py-2
        px-4
        border
        border-[#ffffff50]
        hover:border-[#ffffff]
        rounded-xl
        transition-[border]"
      >
        <span className="cursor-pointer">
          Create new list
        </span>
        <img src={Add} alt="Icon for create new list" className="object-contain aspect-square w-[1.9rem]"/>
      </button>

    </div>

  )
}