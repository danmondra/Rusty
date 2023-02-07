import More from "../assets/icons/more.png"

export function List({actualList, setActualList, list}) {
  const {name} = list;

  function handleChangeList() {
    setActualList(list)
  }

  return (
    <li className="w-full flex justify-between items-start gap-3">
      <span
        className="transition-[color text-decoration-color]
        duration-500
        decoration-transparent
        underline
        hover:decoration-white
        cursor-pointer"
        style={{
          color: `${actualList.name === name ? '#ffffff90' : '#ffffff'}`,
        }}
        onClick={handleChangeList}
      >
        {name} 
      </span>
      <button
        className="aspect-square
        w-[1.9rem]
        transition-[opacity]
        duration-500
        hover:opacity-60"
      >
        <img src={More} alt="Icon for more options" className="mx-auto"/>
      </button>
    </li>
  )
}
