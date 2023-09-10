
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/dogfeetIcon.png';
export default function Navbar() {

    return (
        <div className='Navbar'>
            <Link to="/"><p>Dog<img src={logo} alt=''/>Lover</p></Link>
        </div>
    )

}