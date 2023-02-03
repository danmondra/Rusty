import RustyVacations from "../assets/rusty/rustyVacations.png"
import More from "../assets/icons/more.png"
import Add from "../assets/icons/add.png"

export function Organize() {

  return(
    <main
      className='
      w-[90%]
      mx-auto
      max-w-5xl
      py-24
      md:py-24
      md:grid
      md:grid-cols-3
      gap-12
      lg:gap-7
      '
    >
      <section className=''>
        <form className="flex flex-col gap-3">
          <label htmlFor="items" className="text-center block text-2xl text-white font-bold">Items to be organized</label>
          <textarea id="items" name="items" className="w-full py-6 px-4 resize-none rounded-lg bg-[#ffffff40] placeholder-[#FFFFFF60] text-lg text-white outline-none border-2 border-transparent focus:border-white" rows="4" placeholder="Examples: Shampoo, hand soap, toothpaste, tomatoes, tomatoes, etc." required></textarea>
          <input type="submit" value="Organize" className="text-2xl font-bold text-white p-3 rounded-lg w-full bg-[#0E1749] transition-[background-color, border] duration-500 cursor-pointer border-2 border-transparent hover:bg-[#0E174990] hover:border-white"/>
        </form>

        <div className="">
          <h2 className="block text-2xl text-white font-bold max-w-prose pt-6 px-4">
            Lists:
          </h2>
          <ol className="mt-3 flex flex-col text-2xl font-regular text-white gap-3 px-4 pb-3">
            <li className="w-full flex justify-between items-start gap-3">
              <span className="transition-[color] duration-500 hover:text-[#ffffff90] cursor-pointer">
                Shopping list
              </span>
              <button className="aspect-square w-[1.9rem] transition-[opacity] duration-500 hover:opacity-60">
                <img src={More} alt="Icon for more options" className="mx-auto"/>
              </button>
            </li>
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
          >
            <span className="cursor-pointer">
              Create new list
            </span>
            <img src={Add} alt="Icon for create new list" className="object-contain aspect-square w-[1.9rem]"/>
          </button>

        </div>

      </section>
      <section className="h-20 col-start-2 col-end-4 grid grid-cols-2 gap-3">
        <h2 className="block text-2xl text-white font-bold max-w-prose text-center col-start-1 col-end-3">
          Shopping list 
        </h2>
        <div className="col-start-1 col-end-3 my-20 grid place-items-center">
          <h2 className="block text-2xl text-white font-regular max-w-[25rem] text-center">
            Add items for Rusty to get down to business
          </h2>
          <img src={RustyVacations} alt="Rusty sunbathing on a towel" width="250px" height="250px" className="aspect-[440/500] w-[12rem]"/>
        </div>

      </section>
    </main>

  )
}
