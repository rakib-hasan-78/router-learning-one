
import Nav from './components/Nav';
import PriceOptions from './components/PriceOptions';
import Lines from './components/charts/Lines'

function App() {
  
  return (
    <>
      <Nav />
      <h1 className='text-7xl text-red-400 font-bold underline p-5 text-center'>Vite + React</h1>
      <PriceOptions />
      <Lines />
    </>
  )
}

export default App
