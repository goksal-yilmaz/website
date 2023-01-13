import "../../style/HomePage/company.scss";
import "../../style/Hax/info.scss";
import InfoGif from "../../assest/hax/a.gif"
const Info = () => {
    return(
        <div className="about">
            <div className="about-container">
                <div className="hax-info">
                    <h3>HAX'in Yapabilecekleri Karşısında Büyülenmemek Elde Değil!</h3>
                    <p><b>Dili işleyebilen ve iletebilen</b> akıllı makineler geliştirmek için yapay zeka, konuşma tanıma ve doğal dil işleme kullanıyoruz. Bu teknoloji, işletmeler tarafından rekabet avantajı elde etmek ve müşteri hizmetlerini geliştirmek için kullanılıyor.</p>
                    <br/>
                    <p><b>Karmaşık iş sorunlarını çözmek için</b> yüz tanıma, vücut ölçümü ve nesne tanıma dahil olmak üzere Görüntü İşleme teknolojisinden yararlanıyoruz. Ele alınan sorunların sürekli genişleyen listesi güvenlik, emniyet, sağlık ve dolandırıcılığın önlenmesini içerir.</p>
                    <br/>
                    <p><b>Akıllı tahmine dayalı modeller oluşturmak için</b> yeni istatistiksel kalıpları optimize etmek ve ortaya çıkarmak için makine öğrenimi algoritmaları uyguluyoruz.</p>
                    <br/>
                    <p><b>Makine öğrenimi, daha sonra kullanıcı deneyimini özelleştirmek ve kişiselleştirmek için</b> kullanılan her bireyin benzersiz bir profilini geliştirmek için kullanılır.</p>
                    <br/>
                    <p>Makine öğrenimi ve diğer bilişsel yaklaşımlar, verilerdeki kalıpları tanımlamak ve belirli bir veri parçasının mevcut bir kalıba uyup uymadığına veya bir aykırı değer olup olmadığına dair içgörü sağlayabilen bilgiler arasındaki yüksek sıralı bağlantıları öğrenmek için kullanılır.</p>
                    <br/>
                    <p><b>Deneme yanılma yinelemeleri yoluyla</b> en uygun çözümü bulmaya yardımcı olmak için makine öğrenimi ve diğer bilişsel yaklaşımları uyguluyoruz.</p>
                </div>
                <figure className="about-figure">
                    <img src={InfoGif} alt="info" className='about-img'/>
                </figure>
            </div>
        </div>
    )
}

export default Info;