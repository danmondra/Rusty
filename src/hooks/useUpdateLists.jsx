import { useEffect, useState } from "react"

export function useUpdateLists() {
  const existingLists = JSON.parse(localStorage.getItem('lists'))
  const existingActualList = JSON.parse(localStorage.getItem('actualList'))

  const [lists, setLists] = useState(existingLists ?? [ {name: "Shopping List", departments: []} ])
  const [actualList, setActualList] = useState(existingActualList ?? lists[0] )

  function updateLists() {
    const newLists = lists.map((list) => {
      if(list.name === actualList.name) {
        return actualList
      } 
      return list
    })

    setLists(newLists)
  }

  useEffect(() => {
    updateLists()

    localStorage.setItem('actualList', JSON.stringify(actualList))
    localStorage.setItem('lists', JSON.stringify(lists))
  }, [actualList])

  return [lists, actualList, setActualList, updateLists]

}
