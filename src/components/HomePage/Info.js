import "../../style/HomePage/info.scss";
import InfoImg from "../../assest/info.png"
const Info = () => {
    return(
        <div className="info">
            <div className="info-container">
                <div className="info-details">
                    <h5>Başlamak için Erken Erişim İsteyin</h5>
                    <h3>Tahmine Dayalı Analitik ve Karar Desteği</h3>
                    <p>Akıllı tahmine dayalı modeller oluşturmak için yeni istatistiksel kalıpları optimize etmek ve ortaya çıkarmak için makine öğrenimi algoritmaları uyguluyoruz.</p>
                </div>
                <figure className="info-figure">
                    <img src={InfoImg} alt="info"/>
                </figure>
            </div>
        </div>
    )
}

export default Info;