import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"

function App() {
  return (
    <main>
      <header>
        <Navbar />
        <Hero />
      </header>
      <section className="cards--section">
        <Card />
      </section>
    </main>
    
  )
}

export default App
