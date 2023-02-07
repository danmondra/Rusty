import { classifyItems } from "./classifyItems";

export async function organize({actualList, setActualList, itemsToOrganize}) {

  const cleanItemsInput = itemsToOrganize
    .split(',')
    .map((item) => item.trim().toLowerCase())
    .filter((item) => item !== '')

  const classifiedItems = await classifyItems({itemsToOrganize: cleanItemsInput})

  const classifications = classifiedItems.classifications;
  const groupsOfItems = JSON.parse(localStorage.getItem('actualList'))?.departments ?? []

  classifications.forEach(({input, prediction}) => {
    const departmentExists = groupsOfItems.findIndex(depa => depa.name === prediction)

    if(departmentExists !== -1) {
      groupsOfItems[departmentExists].items.push(input)

    } else {

      const newDepartmentGroup = {name: prediction, items: [input]}
      groupsOfItems.push(newDepartmentGroup)
    }
  })


  setActualList({name: actualList.name, departments: groupsOfItems})
  //TODO --- Verificar si hay artículos repetidos en la lista y poner x(N) según la cantidad
}
