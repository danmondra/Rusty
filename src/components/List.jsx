import {useOptionsMenu} from '../hooks/useOptionsMenu'
import { useModal, BtnModal } from '../hooks/useModal'

import More from '../assets/icons/more.png'
import RustyExplosion from '../assets/rusty/rustyExplosion.png'

export function List({actualList, setActualList, lists, setLists, list}) {
  const [OptionsMenu, handleOptions, showMenu] = useOptionsMenu()
  const [Modal, modal, setModal] = useModal()

  const {name} = list

  const listID = list.name.split(' ').join('')

  function handleChangeList() {
    setActualList(list)
  }

  function handleDeleteList() {
    setModal(true)

    const newLists = lists.filter(({name}) => name !== list.name)

    if(newLists.length === 0) {
      alert('Debe haber por lo menos una lisa')
      setModal(false)

      return
    }

    setLists(newLists)

    if(actualList.name === list.name) {
      setActualList(newLists[0])
    }
  }

  return (
    <li className="relative w-full flex justify-between items-start gap-3">
      <span
        className="
        list
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
        className="
        option
        aspect-square
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
          className="mx-auto option"
          data-elementid={listID}
        />
      </button>
      {showMenu && 
      <OptionsMenu
        handleDelete={() => setModal(true)}
      />
      }

      {modal && 
        <Modal
          text={`Are you sure you want to delete the "${list.name}" list?`}
          textBtn={'Delete'}
          image={RustyExplosion}
        >
          <div className="flex-1 flex flex-col justify-center gap-2">
            <BtnModal
              color={"#2d31c8"}
              handleClick={handleDeleteList}
              text={'Delete'}
            />

            <BtnModal
              color={"transparent"}
              handleClick={() => setModal(false)}
              text={"Cancel"}
            />
          </div>
        </Modal>
      }
    </li>
  )
}
