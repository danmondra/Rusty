import Trash from "../assets/icons/trash.png"

export function ItemMenu({actualList, setActualList, departmentName, items, item}) {

  function handleChange() {

  }

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
    <div
      className="
      absolute
      bottom-[100%]
      right-[5%]
      bg-white
      text-[#0e1749]
      text-lg
      rounded-md
      overflow-hidden"
    >
      <button
        className="
        px-4
        py-1
        block
        hover:bg-gray-200
        border-b
        transition-[background-color]
        duration-300
        w-full
        text-left"
        onClick={handleChange}
      >
        Change
      </button>
      <button
        className="px-4
        py-1
        flex
        justify-between
        w-full
        hover:bg-gray-200
        hover:text-red-700
        items-center
        transition-[background-color
        color]
        duration-300
        text-left
        gap-3"
        onClick={handleDeleteItem}
      >
        Delete
        <img src={Trash} alt="Icon from Trash" width="21px" height="25px"/>
      </button>
    </div>
  )
}
