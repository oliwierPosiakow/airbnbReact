import star from '../public/star.png'
import katie from '../public/katie-zafers.png'
import './css/cards.css'

export default function Card(){
    return(
        <div className="card">
            <img src={katie} className='card--img' alt="Picture of Katie Zaferes" />
            <img src={star} className='card--star' alt="Star icon" />
            <p className="rating">5.0 (6) | USA</p>
            <p className="card--desc">Life lessons with Katie Zaferes</p>
            <p className="card--price"><span>From $136</span> / person</p>
        </div>
    )
}