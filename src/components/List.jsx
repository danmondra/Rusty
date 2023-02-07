import {useOptionsMenu} from "../hooks/useOptionsMenu";

import More from "../assets/icons/more.png"

export function List({actualList, setActualList, lists, setLists, list}) {
  const [OptionsMenu, handleOptions, showMenu] = useOptionsMenu()

  const {name} = list;

  const listID = list.name.split(' ').join('')

  function handleChangeList() {
    setActualList(list)
  }

  function handleDeleteList() {
    const newLists = lists.filter(({name}) => name !== list.name)

    if(newLists.length === 0) {
      alert('Debe haber por lo menos una lisa')
      return
    }

    setLists(newLists)

    if(actualList.name === list.name) {
      setActualList(lists[0])
    }
  }

  return (
    <li className="relative w-full flex justify-between items-start gap-3">
      <span
        className="
        transition-[color text-decoration-color]
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
        data-elementid={listID}
        onClick={() => handleOptions(listID)}
      >
        <img
          src={More}
          alt="Icon for more options"
          className="mx-auto"
          data-elementid={listID}
        />
      </button>
      {showMenu && 
      <OptionsMenu
        handleDelete={handleDeleteList}
      />
      }
    </li>
  )
}
