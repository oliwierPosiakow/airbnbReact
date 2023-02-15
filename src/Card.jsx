import star from '../public/star.png'
import './css/cards.css'

export default function Card(props){
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <p className="card--openSpots">{badgeText}</p>}
            <img src={props.coverImg} className='card--img'/>
            <div className="card--rating">
                <img src={star} className='card--star' alt="Star icon" />
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount}) •</span>
                <span className='gray'>{props.location}</span>
            </div>
            <p className="card--desc">{props.title}</p>
            <p className="card--price"><span>From ${props.price}</span> / person</p>
        </div>
    )
}