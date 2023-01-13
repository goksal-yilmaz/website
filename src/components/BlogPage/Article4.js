import Banner from "../../assest/blog/blog4/banner.jpg";
import Aside1 from "../../assest/blog/blog4/aside1.jpg";

const Article4 = () => {
    return(
        <div className="about-article">
            <div className="about-article-container">
                <figure>
                    <img src={Banner} alt="aboutbanner"/>
                </figure>
                <aside className="top-aside">
                    <h2>Yapay Zeka Sihir Değildir: Gizemi Ortaya Çıkarma ve Uygulama Zamanı</h2>
                    <p>Yüzyıllar boyunca elektriğin, izleyicileri nereden geldiği ve nasıl üretildiği konusunda şaşkın bırakan sihirbazlar olan büyücülerin alanı olduğu düşünülüyordu. Benjamin Franklin ve çağdaşları, elektrik ve şimşek arasındaki bağlantıyı kanıtladığında bu fenomenin gayet iyi farkında olsalar da, 1752'de bunun pratik bir kullanımını tasavvur etmekte güçlük çekti. paratoner. Tüm yeni yenilikler benzer bir evrimden geçer: işten çıkarma, kaçınma, korku ve belki de sonunda kabullenme.</p>
                    <br/>
                    <p>Gerçek şu ki, yapay zekanın sihri yok elbette. Yapay Zeka terimi ilk olarak 1956'da ortaya çıktı ve o zamandan beri teknoloji ilerledi, hayal kırıklığına uğradı ve yeniden ortaya çıktı. Elektrikte olduğu gibi, AI atılımlarına giden yol, kitlesel deneylerle gelecek. Bu deneylerin çoğu başarısız olsa da, başarılı olanların önemli etkileri olacaktır.</p>
                    <br/>
                    <p>Bugün kendimizi bulduğumuz yer orasıdır. Andrew Ng gibi diğerlerinin önerdiği gibi, AI yeni elektriktir. Yapay zeka, her yerde bulunmasına ve giderek daha erişilebilir hale gelmesine ek olarak, dünya çapında işlerin yürütülme şeklini geliştiriyor ve değiştiriyor. Tahminleri üstün doğrulukla mümkün kılıyor ve iş süreçlerini ve karar vermeyi otomatikleştiriyor. Etki, daha iyi müşteri deneyimlerinden akıllı ürünlere ve daha verimli hizmetlere kadar çok geniştir. Ve sonunda, sonuç şirketler, ülkeler ve toplum için ekonomik etki olacaktır.</p>
                </aside>
                <div className='about-art-container'>
                    <figure>
                        <img src={Aside1} alt="aboutbanner" className="about-art-img"/>
                    </figure>
                    <aside className="mid-aside">
                        <h2>Zamanı Geri Alma Vakti</h2>
                        <p>Franklin'in şimşek deneyinden neredeyse iki yüz yıl sonra, kökeni hakkında hâlâ derin bir anlayışa sahip olmamamıza rağmen, insan rutin olarak elektriği kullanıyordu. 1928 tarihli Lineman's Handbook şu satırla başlar: “ Elektrik nedir? –</p>
                        <br/>
                        <p>Kimse bilmiyor .” Ancak ilk elektrik tesisatçıları için bu alan kılavuzuna göre, elektriğin yapısını anlamak önemli değildi. Daha önemli olan, elektriğin nasıl üretilebileceğini ve ışık, ısı ve güç için güvenli bir şekilde kullanılabileceğini bilmekti.</p>
                        <br/>
                        <p>Bugün çok fazla insan yapay zekayı (AI), nasıl çalıştığına dair çok az anlayışla işe koyulan başka bir sihirli teknoloji olarak görüyor . Yapay zekayı özel olarak görüyorlar ve onunla ustalaşan ve gözlerimizi kamaştıran uzmanlara havale edilmiş durumdalar. Bu ortamda AI, ihtişam vaatleriyle ve ölümlülerin ulaşamayacağı bir mistisizm havası aldı.</p>
                        <br/>
                        <p>Elbette, AI'da kitlesel deneyler yapan kuruluşlar, önümüzdeki on yıllık pazar fırsatını kazanacak. Yapay zekayı parçalamak ve gizemini çözmeye yardımcı olmak için, kategorinin iki temel öğesini dikkate almak gerekir: bileşen ve süreç . Başka bir deyişle, arkasında ne olduğunu ve nasıl benimsenebileceğini belirlemek.</p>
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default Article4;