import { useUpdateLists } from "../hooks/useUpdateLists"

import { OrganizationForm } from "./OrganizationForm"
import { BtnHome } from "./BtnHome"
import { Lists } from "./Lists"
import { Department } from "./Department"

import { RustyCoffee } from "./rusty/RustyCoffee"
import { RustyRelax } from "./rusty/RustyRelax"

export function Organize({setOrganizing}) {
  const [ lists, actualList, setActualList, updateLists ] = useUpdateLists()

  const thereAreItems = Boolean(actualList?.departments[0]?.items[0])


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
      <section>
        <BtnHome
          setOrganizing={setOrganizing}
        />
        <OrganizationForm
          actualList={actualList}
          setActualList={setActualList}
          updateLists={updateLists}
        />

        <Lists
          lists={lists}
          actualList={actualList}
        />

      </section>

      <section className="col-start-2 col-end-4 grid grid-cols-2 gap-3 auto-rows-max relative">
        <h2 className="h-max block text-2xl text-white font-bold max-w-prose text-center col-start-1 col-end-3">
          Shopping list 
        </h2>

        {thereAreItems
          ? <RustyCoffee />
          : <RustyRelax />
        }

        {actualList.departments.map((department) => (
          <Department
            actualList={actualList}
            setActualList={setActualList}
            department={department}
            key={department.name}
          />
        ))}

      </section>
    </main>

  )
}
