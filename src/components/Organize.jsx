import { useUpdateLists } from '../hooks/useUpdateLists'
import {useMenu} from '../hooks/useMenu'

import { OrganizationForm } from './OrganizationForm'
import { BtnHome } from './BtnHome'
import { Lists } from './Lists'
import { Department } from './Department'

import { RustyCoffee } from './rusty/RustyCoffee'
import { RustyRelax } from './rusty/RustyRelax'

export function Organize({setOrganizing}) {
  const [ lists, setLists, actualList, setActualList ] = useUpdateLists()
  const [ BtnMenu, menu ] = useMenu()

  const thereAreItems = Boolean(actualList?.departments[0]?.items[0])

  return(
    <main
      className='
      w-[90%]
      mx-auto
      max-w-6xl
      py-8
      md:py-24
      md:grid
      md:grid-cols-[1fr_2fr]
      gap-12
      lg:gap-16
      overflow-hidden
      '
    >
      <BtnHome
        setOrganizing={setOrganizing}
      />

      {menu 
        ? <section className="
          overflow-auto
          fixed
          h-full
          w-[80%]
          py-24
          px-3
          top-0
          right-[-100%]
          transition-[right]
          duration-500
          bg-[#130b1c]
          z-10

          md:static
          md:h-[unset]
          md:w-[unset]
          md:p-[unset]
          md:bg-[unset]
          md:z-[unset]
          "
          id="organizationMenu"
        >
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

        : <BtnMenu />
      }

      <section className="mt-16 flex flex-col lg:mt-0 md:grid md:grid-cols-2 gap-3 auto-rows-max relative">
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
