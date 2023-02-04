import More from "../assets/icons/more.png"

export function List({lists, actualList}) {
  const {name} = actualList;

  return (
    <li className="w-full flex justify-between items-start gap-3">
      <span className="transition-[color] duration-500 hover:text-[#ffffff90] cursor-pointer">
        {name} 
      </span>
      <button className="aspect-square w-[1.9rem] transition-[opacity] duration-500 hover:opacity-60">
        <img src={More} alt="Icon for more options" className="mx-auto"/>
      </button>
    </li>
  )
}
