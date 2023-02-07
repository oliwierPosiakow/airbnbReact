import logo from '../public/airbnb-logo.png'
import './css/navbar.css'

export default function Navbar(){
    return(
        <nav>
            <img 
                src={logo}
                alt="Airbnb logo"
                className='nav--logo' />
        </nav>
    )
}