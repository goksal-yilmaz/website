import '../../style/HomePage/appbar.scss'
import Logo from '../../assest/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Appbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = event => {
        setActive(current => !current)
    }

    return (
        <div className='appbar'>
            <nav className='navbar'>
                <figure className='figure'>
                    <img src={Logo} alt='logo' className='logo'/>
                </figure>
                <ul className={`menu-item ${active ? 'mobile-menu' : ''}`}>
                    <li className='item'>
                        <Link to="/" className='link'>
                            Home
                        </Link>
                    </li>
                    <li className='item'>
                        <Link to="/hax" className='link'>
                            HAX
                        </Link>
                    </li>
                    <li className='item'>
                        <Link to='/hakkimizda' className='link'>Hakkımızda</Link>
                    </li>
                    <li className='item'>
                        <Link to='/iletisim' className='btn'>İletişim</Link>
                    </li>
                </ul>
                <div className='toggle' onClick={handleClick}>
                    <label for="menu_checkbox" className={`${active ? "change-toggle" : 'label'}`}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </label>
                </div>
            </nav>
        </div>
    )
}

export default Appbar;