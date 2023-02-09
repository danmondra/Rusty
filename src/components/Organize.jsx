import { useUpdateLists } from '../hooks/useUpdateLists'

import { OrganizationForm } from './OrganizationForm'
import { BtnHome } from './BtnHome'
import { Lists } from './Lists'
import { Department } from './Department'

import { RustyCoffee } from './rusty/RustyCoffee'
import { RustyRelax } from './rusty/RustyRelax'

export function Organize({setOrganizing}) {
  const [ lists, setLists, actualList, setActualList ] = useUpdateLists()

  const thereAreItems = Boolean(actualList?.departments[0]?.items[0])

  return(
    <main
      className='
      w-[90%]
      mx-auto
      max-w-6xl
      py-24
      md:py-24
      md:grid
      md:grid-cols-[1fr_2fr]
      gap-12
      lg:gap-16
      '
    >
      <section>
        <BtnHome
          setOrganizing={setOrganizing}
        />
        <OrganizationForm
          actualList={actualList}
          setActualList={setActualList}
        />

        <Lists
          lists={lists}
          setLists={setLists}
          actualList={actualList}
          setActualList={setActualList}
        />

      </section>

      <section className="mt-16 lg:mt-0 grid md:grid-cols-2 gap-3 auto-rows-max relative">
        <h2 className="h-max block text-2xl text-white font-bold max-w-prose text-center md:col-start-1 md:col-end-3">
          {actualList?.name}
        </h2>

        {thereAreItems
          ? <RustyCoffee />
          : <RustyRelax />
        }

        <div className='w-full flex flex-col gap-3'>
          {actualList?.departments?.map((department, i) => {
            if(i % 2 === 0) {
              return (
                <Department
                  actualList={actualList}
                  setActualList={setActualList}
                  department={department}
                  key={department.name}
                />
              )

            }
          })}

        </div>
        <div className='w-full flex flex-col gap-3'>
          {actualList?.departments?.map((department, i) => {
            if(i % 2 !== 0) {
              return (
                <Department
                  actualList={actualList}
                  setActualList={setActualList}
                  department={department}
                  key={department.name}
                />
              )

            }
          })}

        </div>

      </section>
    </main>

  )
}
