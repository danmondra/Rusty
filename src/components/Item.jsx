import More from '../assets/icons/more.png'
import {useOptionsMenu} from '../hooks/useOptionsMenu'

export function Item({actualList, setActualList, item, items, departmentName, departmentColor}) {

  const [OptionsMenu, handleOptions, showMenu] = useOptionsMenu()

  const itemID = item.split(' ').join('')
  const itemWithUppercase = item.charAt().toUpperCase() + item.slice(1)

  function handleDeleteItem() {

    const newItems = items.filter(itemList => itemList !== item)

    // Si no hay items se elmina el departamento
    if(newItems.length === 0) {
      const newDepartmentsFiltered = actualList.departments.filter(department => department.name !== departmentName)

      setActualList({name: actualList.name, departments: newDepartmentsFiltered})

      return
    }

    const newDepartments = actualList.departments.map(department => {
      if(department.name === departmentName) {
        return newItems.length ? {name: department.name, items: newItems} : null
      }
      return department
    })

    setActualList({name: actualList.name, departments: newDepartments})
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
            data-elementid={itemID}
            onClick={() => handleOptions(itemID)}
          >
            <img
              src={More}
              alt="Icon for more options"
              className="object-cover mx-auto more"
              data-elementid={itemID}
            />
          </button>
        </label>

        {showMenu && 
        <OptionsMenu
          handleDelete={handleDeleteItem}
        />
        }
      </li>
    </>
  )
}
