import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"

function App() {

  const cardsArr = data.map( cardData => {
    return <Card
      key= {cardData.id}
      {...cardData}
    />
  })

  return (
    <main>
      <header>
        <Navbar />
        <Hero />
      </header>
      <section className="cards--section">
        {cardsArr}
      </section>
    </main>
    
  )
}

export default App
