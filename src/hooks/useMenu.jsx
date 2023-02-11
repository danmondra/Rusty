import {useState} from "react"

export function useMenu() {
  const isPhone = window.innerWidth > 768
  const [menu, setMenu] = useState(isPhone)

  function handleMenu() {
    setMenu(true)

    setTimeout(() => {
      const menu = document.querySelector('#organizationMenu')

      menu.style.right = "0"
      menu.querySelector('textarea').focus()

      function closeMenu(eventDocument) {
        console.log('0')
        // Si se da click fuera del menú, se cierra
        if(eventDocument.target !== menu && !menu.contains(eventDocument.target)) {
          document.removeEventListener('click', closeMenu)
          menu.style.right = "-100%"

          setTimeout(() => {
            setMenu(false)
          }, 100)
        }
      }

      document.addEventListener('click', closeMenu)
    }, 100)
  }

  function BtnMenu() {

    return(
      <div className='fixed bottom-0 left-0 m-6'>
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
          onClick={handleMenu}
        >
          +
        </button>
      </div>
    )
  }

  return [BtnMenu, menu]
}
