import { Link } from "react-router-dom";
import "../../style/HomePage/company.scss";



const Company = () => {
    return( 
        <div className="company">
            <div className="company-container">
                <aside className="company-aside">
                    <h5>Başlamak için Erken Erişim İsteyin</h5>
                    <h2>Birkaç kolay adımda daha iyi bir geleceğe adım at.</h2>
                </aside>
                <div className="company-btn">
                    <div className='btn'>
                        <Link to='/iletisim' className="link">Hemen Başla</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company;