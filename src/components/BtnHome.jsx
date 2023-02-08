import Home from '../assets/icons/home.png'

export function BtnHome({setOrganizing}) {

  function handleHome() {
    setOrganizing(false)
  }

  return (
    <button
      className="absolute top-2 left-2"
      onClick={handleHome}
    >
      <img src={Home} alt="Icon for go to first page" className="aspect-square w-12 m-3"/>
    </button>
  )
}
