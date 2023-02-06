import More from "../assets/icons/more.png"

export function Item({item, departmentName, departmentColor}) {
  
  const itemWithUppercase = item.charAt().toUpperCase() + item.slice(1)

  return (
    <li className="px-6 py-2 flex gap-4 items-center">
      <input
        type="checkbox"
        id={item}
        name={departmentName}
        value={item}
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
        bg-contain `}
        style={{
          backgroundColor: `${departmentColor}90`
        }}
      />
      <label
        htmlFor={item}
        className="flex w-full justify-between items-center"
      >
        {itemWithUppercase}
        <button className="aspect-square w-[.8rem]">
          <img src={More} alt="Icon for more options" className="object-cover mx-auto"/>
        </button>
      </label>
    </li>
  )
}
