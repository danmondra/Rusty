import NotesVSRusty from '../assets/notesVSrusty.png'
import RustyShopping from '../assets/rusty/rustyShopping.png'

export function Home({setOrganizing}) {

  function handleClick() {
    setOrganizing(true)
  }

  return (
    <main
      className='
      w-[90%]
      mx-auto
      max-w-7xl
      py-24
      md:py-52
      flex
      flex-col
      lg:flex-row
      gap-12
      lg:gap-7'
      onClick={handleClick}
    >
      <div
        className='
        flex-1
        text-center
        text-white
        flex
        flex-col
        gap-4
        max-w-prose
        mx-auto'
      >
        <h1
          className='
          text-4xl
          md:text-5xl
          font-bold'
        >
          Rusty <span className='text-[#0E1749]'> is a </span>
          compulsive raccoon organizer
        </h1>
        <p className='text-2xl'>It will help you group each item on your shopping list according to the department to which it belongs.</p>
        <button
          className='
          bg-[#0E1749]
          w-full
          md:w-4/5
          mx-auto
          py-3
          text-4xl
          font-bold
          rounded-lg
          hover:bg-[#0E174990]
          transition-[background-color
          border]
          duration-500
          border
          border-transparent
          hover:border-white'
        >
          Let's Start
        </button>
      </div>
      <div className='flex-1'>
        <picture>
          <img
            src={NotesVSRusty}
            width="500px"
            height="200px"
            alt="Comparison of the usual block notes and the Rusty Organization"
            className="mx-auto"
          />
        </picture>
        <img
          src={RustyShopping}
          width="300px"
          height="300px"
          alt="Rusty carrying some grocery bags"
          className="aspect-[500/414]
          w-[40%]
          mt-[-1.5rem]
          md:mt-[-3.5rem]
          ml-[3rem]"
        />
      </div>
    </main>

  )
}
