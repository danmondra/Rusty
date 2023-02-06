import Trash from "../assets/icons/trash.png"

export function ItemOptions() {

  return (
    <div className="absolute bottom-[100%] right-[5%] bg-white text-[#0e1749] text-lg rounded-md">
      <button className="px-4 py-1 block  hover:bg-gray-200 border-b rounded-md transition-[background-color] duration-300 w-full text-left">Change</button>
      <button className="px-4 py-1 flex justify-between w-full hover:bg-gray-200 rounded-md hover:text-red-700 items-center transition-[background-color color] duration-300 text-left gap-3">
        Delete
        <img src={Trash} alt="Icon from Trash" width="21px" height="25px"/>
      </button>
    </div>
  )
}
