import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GetDogs } from './components/Dogs'
import { GetBreeds } from './components/Type'

function App() {
  const [selectedBreed, setSelectedBreed] = useState(null);

  return (
    <>
      <GetDogs selectedBreed={selectedBreed} />
      <GetBreeds setSelectedBreed={setSelectedBreed} />
    </>
  )
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { GetDogs } from './components/Dogs'
// import { GetBreeds } from './components/Type'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <GetDogs/>
//       <GetBreeds/>  
//     </>
//   )
// }

// export default App
