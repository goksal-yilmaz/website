import "../../style/AboutPage/about-article.scss";
import AboutImg from '../../assest/about/about.jpg';
import Banner from '../../assest/about/about-banner.jpg'
const About = () => {
    return(
        <div className="about-article">
            <div className="about-article-container">
                <figure>
                    <img src={Banner} alt="aboutbanner"/>
                </figure>
                <aside className="top-aside">
                    <h2>Neden Buradayız?</h2>
                    <p>Verimsizlik ve israf, günümüz organizasyonlarında büyük bir sorundur. Bunun zaman, maliyet, doğruluk, verim ve hatta fiziksel atık olarak ölçülüp ölçülmediği. Verimsizlikler büyümeyi engeller ve siz ölçeklendikçe zorluk artar.
                    Arasaka, AI'nın sorumlu kullanımının bugün kuruluşların karşı karşıya olduğu en zorlu zorlukların çoğunu çözebileceğine inanıyor. Ayrıca yapay zekanın yalnızca kurumsal düzeyde değil, herkes tarafından erişilebilir olması gerektiğine inanıyoruz. AI kullanmak için artık derin ceplere ihtiyacınız yok.
                    Modern AI teknolojileriyle imkansız sorunlarınızı çözmek için veri bilimini bir sonraki seviyeye taşıyoruz.
                    Yaklaşımımız açık ve işbirliğine dayalıdır. İleri teknolojiden sorumlu olurken, onunla mümkün olanın alemlerine meydan okuyor ve onları zorluyoruz. Tüm işletmelerin yapılandırılmamış verileri basit ve kolay bir şekilde devreye almalarını ve anında değer yaratmak için yapay zekayı kullanmaya başlamalarını sağlayan uzman veri bilimi ve belge zekası çözümleri sunuyoruz.</p>
                </aside>
                <br/>
                <br/>
                <div className='about-art-container'>
                    <figure>
                        <img src={AboutImg} alt="aboutbanner" className="about-art-img"/>
                    </figure>
                    <aside className="mid-aside">
                        <h2>Biz Kimiz?</h2>
                        <p>Arasaka, Ocak 2016'da her büyüklükteki şirketin akıllı uygulamalar oluşturmasına yardımcı olma vizyonuyla doğdu. Deneyimlerimiz bize, şirketlerin hızla dijitalleşen bir dünyada rekabet edebilmek için modern teknolojileri benimsemeleri gerektiğini söyledi.</p>
                        <br/>
                        <p>Ancak gerçek şu ki, çoğu işletme uygun maliyetle yenilik ve modernizasyon yapamıyor. Dışarıda yeterince iyi, iyi eğitimli yazılım geliştirme ekipleri yok. Ve Doğu Avrupa ve Güney Asya'ya offshore yapmak, bir iletişim ve tutarlılık enkazı yarattı.
                        İlk müşterimiz olan Twitter'dan bu yana, yüksek kaliteli web, mobil, veri ve bulut uygulamaları oluşturmak isteyen 100'den fazla şirketle çalıştık. Müşterilerimiz her gün, iyi eğitimli, kıyıya yakın yazılım geliştirme ekiplerimizle gerçek zamanlı olarak işbirliği yapıyor.</p>
                        <br/>
                        <p>İşleri halletmek veya iletişim kurmak için bir ofiste küp sıralarında oturmayız veya süper şık dik masalarda durmayız. Biz, tamamı kıyıya yakın, %100 uzak yeteneklerle kurulmuş, dağıtılmış bir şirketiz. 2016'dan beri her yerden verimli bir şekilde çalışmaya odaklanan bir iş kurduk.</p>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default About;