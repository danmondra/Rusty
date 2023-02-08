import { useState } from 'react'

import { BackgroundBlur } from './components/BackgroundBlur'
import { Organize } from './components/Organize.jsx'
import { Home } from './components/Home'

const existingLists = JSON.parse(localStorage.getItem('lists'))

function App() {
  const [organizing, setOrganizing] = useState(Boolean(existingLists) ?? false)

  return (
    <>
      <BackgroundBlur />

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
