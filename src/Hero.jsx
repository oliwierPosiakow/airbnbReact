import photoGrid from '../public/photo-grid.png'
import './css/hero.css'

export default function Hero(){
    return (
        <div className="hero">
            <img src={photoGrid} alt="Experiences grid" />
            <h1 className="hero--h1">Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </div>
    )
}