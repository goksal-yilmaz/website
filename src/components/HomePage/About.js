import AboutImg from '../../assest/about.png';

import "../../style/HomePage/about.scss";

import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

const About = () => {
    return(
        <div className='about'>
            <div className='about-container'>
                <figure className='about-figure'>
                    <img src={AboutImg} alt="about-img" className='about-img'/>
                </figure>
                <aside className='about-aside'>
                    <h5>İşletme maliyetinizi azalatmak ister misiniz?</h5>
                    <h2>Akıllı işletmeler için akıllı çözümler</h2>
                    <p>ARASAKA, iş hizmetleri operasyonları için yapay zekanın önde gelen geliştiricisidir. ARASAKA, benzersiz sistemleri öğrenmek, sürekli değişen ortamlara uyum sağlamak ve karmaşık iş akışları için kapsamlı otomasyon ve analitik sağlamak için müşteri verileri üzerinde güvenli bir şekilde eğitilmiş en son yapay zeka ve makine öğrenimi ile insan zekasını ölçeklendirir.</p>
                    <div className='btn'>
                        <Link className='link' to="/hakkimizda">
                            <span>
                                Devamı <BiRightArrowAlt/>
                            </span>
                        </Link>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default About