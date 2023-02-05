import More from "../assets/icons/more.png"

export function Item({item, department}) {

  return (
    <li className="px-6 py-2 flex gap-4 items-center">
      <input
        type="checkbox"
        id={item}
        name={department}
        value={item}
        className="
        accent-[#1B741F]
        w-6
        appearance-none
        border-2
        aspect-square
        h-6
        rounded
        border-white
        checked:bg-[url(/src/assets/icons/check.png)]
        bg-center
        bg-contain
        checked:bg-[#1B741F]"
      />
      <label htmlFor={item} className=" flex w-full justify-between items-center">
        {item}
        <button className="aspect-square w-[.8rem]">
          <img src={More} alt="Icon for more options" className="object-cover mx-auto"/>
        </button>
      </label>
    </li>
  )
}
