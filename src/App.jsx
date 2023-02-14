import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"

function App() {

  const cardsArr = data.map( cardData => {
    return <Card 
      key= {cardData.id}
      img= {cardData.coverImg}
      rating={cardData.stats.rating}
      reviewCount={cardData.stats.reviewCount}
      country={cardData.location}
      title={cardData.title}
      price={cardData.price}
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
