import "../../style/HomePage/banner.scss";

import BannerGif from "../../assest/hax/banner.png"

const Banner = () => {
    return(
        <div className="banner">
            <div className="banner-content">
                <aside className="banner-aside">
                    <h2>HAX İle Geleceğe Adım Atın</h2>
                    <br/>
                    <p>Arasaka, süreçleri otomatikleştiren, işletme maliyetlerini azaltan ve yeni problem çözme fırsatlarını ortaya çıkaran son teknoloji yazılım çözümleri oluşturmak için makine öğrenimindeki derin uzmanlığından yararlanır.</p>
                </aside>
                <figure className="figure-filter">
                    <img src={BannerGif} alt="banner" className="banner-image"/>
                </figure>
            </div>
        </div>
    )
}

export default Banner;