import {useState} from "react"

export function useMenu() {
  const isPhone = window.innerWidth > 768
  const [menu, setMenu] = useState(isPhone)

  function closeMenu(event) {
    const menu = document.querySelector('#organizationMenu')

    // Si el click es en el botón organizar o fuera del menú, se cierra.
    // Si el click es una opción de la lista no se cierra

    const btnSubmit = document.querySelector('#btnOrganize')

    const isMenu = event.target === menu || menu.contains(event.target)
    const isOption = event.target.classList.contains('option')
    const isBtnSubmit = event.target === btnSubmit

    console.log(isOption)

    if(!isMenu && !isOption || isBtnSubmit) {
      document.removeEventListener('click', closeMenu)
      menu.style.right = "-100%"

      setTimeout(() => {
        setMenu(false)
      }, 100)
    }
  }

  function handleClick() {
    setMenu(true)

    setTimeout(() => {
      const menu = document.querySelector('#organizationMenu')

      menu.style.right = "0"
      menu.querySelector('textarea').focus()

      document.addEventListener('click', closeMenu)
    }, 100)
  }

  function BtnMenu() {

    return(
      <div className='fixed bottom-0 left-0 m-6 z-10'>
        <button
          className='
          block
          bg-[#2d31c8]
          mx-auto
          py-3
          text-4xl
          font-bold
          rounded-full
          hover:bg-[#2d31c850]
          transition-[background-color border]
          duration-500
          border
          border-transparent
          hover:border-white
          text-white
          aspect-square
          w-[4rem]
          '
          onClick={handleClick}
        >
          +
        </button>
      </div>
    )
  }

  return [BtnMenu, menu ]
}
