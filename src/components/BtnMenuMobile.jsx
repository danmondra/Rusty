
function BtnMenuMobile() {

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
        onClick={() => {
          setFormTrigger(true)

          setTimeout(() => {
            const menu = document.querySelector('#organizationMenu')
            menu.style.right = "0"
            menu.querySelector('textarea').focus()

            function closeMenu(eventDocument) {
              if(eventDocument.target !== menu || !menu.children.contains(eventDocument.target)) {
                menu.style.right = "-100%"
                document.removeEventListener('click', closeMenu)

                setTimeout(() => {
                  setFormTrigger(false)
                }, 100)
              }
            }

            document.addEventListener('click', closeMenu)
          }, 100)

        }}
      >
        +
      </button>
    </div>

  )
}
