import RustyVacations from "../../assets/rusty/rustyVacations.png"

export function RustyRelax() {

  return (
    <div className="col-start-1 col-end-3 my-20 grid place-items-center">
      <h2 className="block text-2xl text-white font-regular max-w-[25rem] text-center">
        Add items for Rusty to get down to business
      </h2>
      <img
        src={RustyVacations}
        alt="Rusty sunbathing on a towel"
        width="250px"
        height="250px"
        className="aspect-[440/500] w-[12rem] mx-auto"/>
    </div>
  )
}
