import { Waves } from './Waves'

function App() {

  return (
    <>
      <Waves />

      <main className='w-[90%] mx-auto max-w-7xl h-5 py-24 md:py-52 flex flex-col lg:flex-row gap-6'>
        <div className='flex-1 text-center text-white flex flex-col gap-4'>
          <h1 className='text-4xl md:text-5xl font-bold'>Rusty 
            <span className='text-[#0E1749]'> is a </span>
            compulsive raccoon organizer</h1>
          <p className='text-2xl'>It will help you group each item on your shopping list according to the department to which it belongs.</p>
          <button className='bg-[#0E1749] w-full md:w-4/5 mx-auto py-3 text-4xl font-bold rounded-lg hover:bg-[#0E174990] transition-[background-color border] duration-500 border border-transparent hover:border-white'>
            Let's Start
          </button>
        </div>
        <div className='flex-1'>


        </div>
      </main>
    </>
  )
}

export default App
