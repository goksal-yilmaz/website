import "../../style/HomePage/blog.scss";
import BlogImg1 from "../../assest/blog1.jpg";
import BlogImg2 from "../../assest/blog2.jpg";
import BlogImg3 from "../../assest/blog3.jpg";
import BlogImg4 from "../../assest/blog4.jpg";
import BlogImg5 from "../../assest/blog5.jpg";

import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";


const BlogData = [
    {
        title: "Yapay Zeka ile Kazanmak",
        img: BlogImg2,
        link:"yapay-zeka-ile-kazanmak",
    },
    {
        title: "Yapay Zeka Bir Sihir Değildir",
        img: BlogImg3,
        link:"yapay-zeka-bir-sihir-değildir",
    },
    {
        title: "Bir Benzetme: 'Kör GPU'lar ve Fil'",
        img: BlogImg4,
        link:"kör-gpular-ve-fil",
    },
    {
        title: "Veri Kültürü Oluşturmanın Önemi",
        img: BlogImg5,
        link:"veri-kültürü-oluşturmak",
    },
]

const Aside = () => {
    return(
        <div className="blog">
            <div className="blog-container">
                <div className="blog-header">
                    <h2>Ürünümüz ile ilgili blogları okuyabilirsiniz</h2>
                </div>
                <div className="blog-col1">
                    <div className="blog-tall">
                        <div className="tall-card">
                            <img src={BlogImg1} alt="blog"/>
                        </div>
                        <div className="tall-content">
                                <h4>Watson Anywhere: Gelecek</h4>
                                <p>Yapay zeka dünyasında bir paradoks var: Hayatımızın en büyük ekonomik fırsatı olsa da (2030'a kadar GSYİH'ya 16 trilyon ABD doları katkıda bulunacağı tahmin ediliyor), yapay zekanın kurumsal olarak benimsenmesi 2018'de %4'ün altındaydı</p>
                                <div className="blog-btn">
                                    <Link className="link" to="/gelecek">Devamı <BiRightArrowAlt/></Link>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="blog-col2">
                    {BlogData.map((item) => (
                        <div className="blog-card">
                            <div className="blog-header">
                                <img src={item.img} alt="blogImg"/>
                            </div>
                            <div className="blog-content">
                                <h4>{item.title}</h4>
                                <Link to={'/' + item.link} className="blog-btn">
                                    <span>Devamı</span>
                                    <span><BiRightArrowAlt/></span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>  
            </div>
        </div>
    )
}

export default Aside;