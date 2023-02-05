import { useState } from "react"

import { Waves } from "./components/Waves"
import { Organize } from "./components/Organize.jsx"
import { Home } from "./components/Home"

function App() {
  const [organizing, setOrganizing] = useState(false)

  return (
    <>
      <Waves />

      {organizing
        ? <Organize
            organizing={organizing}
            setOrganizing={setOrganizing}
          />
        : <Home
            setOrganizing={setOrganizing}
          />
      }

    </>
  )
}

export default App
