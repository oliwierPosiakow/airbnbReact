import star from '../public/star.png'
import katie from '../public/katie-zaferes.png'
import './css/cards.css'

export default function Card(){
    return(
        <div className="card">
            <img src={katie} className='card--img' alt="Picture of Katie Zaferes" />
            <div className="card--rating">
                <img src={star} className='card--star' alt="Star icon" />
                <span>5.0 </span>
                <span className='gray'>(6) •</span>
                <span className='gray'>USA</span>
            </div>
            <p className="card--desc">Life lessons with Katie Zaferes</p>
            <p className="card--price"><span>From $136</span> / person</p>
        </div>
    )
}