import "../../style/HomePage/banner.scss";
import Bannergif from '../../assest/bannerGif.gif';

const Banner = () => {
    return(
        <div className="banner">
            <div className="banner-content">
                <aside className="banner-aside">
                    <h1>Yeni Nesil <span>Yapay Zeka</span> Teknolojisi</h1>
                    <br/>
                    <p>Güvenilir yapay zeka iş ortağınız olarak Veri Bilimi danışmanlarımız, kritik iş zorluklarınıza orijinal çözümler geliştirmek için makine öğrenimi modelleri kullanır.</p>
                </aside>
                <figure className="banner-figure">
                    <img src={Bannergif} alt="gif" className="banner-image w-img"/>
                </figure>
            </div>
        </div>
    )
}

export default Banner;