
import { useRef, useState } from 'react'
import { useModal } from '../hooks/useModal'

import { List } from './List'
import { BtnModal } from '../hooks/useModal'
import Add from '../assets/icons/add.png'
import RustyExperimental from '../assets/rusty/rustyExperimental.png'

export function Lists({lists, setLists, actualList, setActualList}) {
  const [Modal, modal, setModal] = useModal()
  const newListRef = useRef()
  const [error, setError] = useState('')

  function handleNewList() {
    //TODO --- Crear alerta personalizada
    const nameNewList = newListRef.current.value

    const nameExists = lists.some(({name}) => name === nameNewList)

    if(nameExists) {
      setError('There is already a list with that name')
      return
    }

    if(nameNewList) {
      const newList = {name: nameNewList, departments: []}

      setLists([...lists, newList])
    }

    setModal(false)
  }

  return (
    <div>
      <h2 className="block text-2xl text-white font-bold max-w-prose pt-6 px-4">
        Lists:
      </h2>
      <ol className="mt-3 flex flex-col text-2xl font-regular text-white gap-3 px-4 pb-3">

        {lists.map((list) => (
          <List
            actualList={actualList}
            setActualList={setActualList}
            lists={lists}
            setLists={setLists}
            list={list}
            key={list?.name}
          />
        ))}

      </ol>

      <button
        className="w-full
        flex
        text-white
        text-2xl
        justify-between
        items-start
        gap-3
        duration-500
        py-2
        px-4
        border
        border-[#ffffff50]
        hover:border-[#ffffff]
        rounded-xl
        transition-[border]"
        onClick={() => setModal(true)}
      >
        <span className="cursor-pointer">
          Create new list
        </span>
        <img src={Add} alt="Icon for create new list" className="object-contain aspect-square w-[1.9rem]"/>
      </button>

      {modal && 
        <Modal
          text={'Choose a name for the new list'}
          textBtn={'Delete'}
          image={RustyExperimental}
        >
          <form className='flex-1 flex flex-col justify-center gap-3'>
            <input
              type="text"
              id="deleteList"
              placeholder='"Christmas Shopping"'
              ref={newListRef}
              className='
              bg-[#ffffff40]
              text-lg
              font-bold
              border-2
              border-transparent
              hover:border-white
              focus:border-white
              rounded-md
              md:w-[70%]
              mx-auto
              p-2
              placeholder-[#fffffff60]
              text-white
              outline-none'
            />
            {error && <p className='md:w-[70%] mx-auto text-red-400'>{error}</p>}
            <BtnModal
              color={"#2d31c8"}
              handleClick={handleNewList}
              text={'Create'}
            />
          </form>
        </Modal>
      }
    </div>

  )
}
