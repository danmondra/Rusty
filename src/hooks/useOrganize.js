import { useEffect } from "react";
import { classifyItems } from "../services/classifyItems"

export function useOrganize({lists, setLists, actualList, setActualList}) {

  useEffect(() => {
    const newLists = lists.map((list) => {
      if(list.name === actualList.name) {
        return actualList
      } 
      return list
    })

    setLists(newLists)
  }, [actualList])

  useEffect(() => {
    localStorage.setItem('actualList', JSON.stringify(actualList))
    localStorage.setItem('lists', JSON.stringify(lists))

  }, [lists])


  async function handleOrganize({itemsToOrganize}) {

    const cleanItemsInput = itemsToOrganize
      .split(',')
      .map((item) => item.trim().toLowerCase())
      .filter((item) => item !== '')

    const classifiedItems = await classifyItems({itemsToOrganize: cleanItemsInput})

    const classifications = classifiedItems.classifications;
    const groupsOfItems = JSON.parse(localStorage.getItem('actualList')).departments ?? []

    classifications.forEach(({input, prediction}) => {
      const departmentExists = groupsOfItems.some(depa => depa.name === prediction)

      if(departmentExists) {
        const departmentPosition = groupsOfItems.findIndex(depa => depa.name === prediction)
        groupsOfItems[departmentPosition].items.push(input)

      } else {
        const newDepartmentGroup = {name: prediction, items: [input]}
        groupsOfItems.push(newDepartmentGroup)

      }
    })

    setActualList({name: actualList.name, departments: groupsOfItems})

    //TODO --- Agregar un useEffect diferente para que cada que cambie la lista se guarde en LocaL Storage
  }

  return [handleOrganize]
}
