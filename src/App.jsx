import Nav from './components/Nav'
import Room from './components/Room/Room'
import About from './components/About'

function App() {
  return (
    <div className='font-league-spartan h-screen flex flex-col'>
      <Nav />
      <Room />
      <About />
    </div>
  )
}

export default App
