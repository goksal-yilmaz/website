import Banner from "../../assest/blog/blog2/banner.jpg";
import Aside1 from "../../assest/blog/blog2/aside1.jpg";

const Article2 = () => {
    return(
        <div className="about-article">
            <div className="about-article-container">
                <figure>
                    <img src={Banner} alt="aboutbanner"/>
                </figure>
                <aside className="top-aside">
                    <h2>Yapay Zeka ile Kazanmak</h2>
                    <p>Ayrıca, yanıt verenlerin %80'inden fazlasının verileri ve iş yüklerini önümüzdeki yıl boyunca genel bulut ortamlarından özel bulutlara veya şirket içi konumlara taşımayı veya ülkelerine geri göndermeyi planladıklarını söylediği yakın tarihli bir IDC Bulut ve Yapay Zeka Benimseme Anketini [1] göz önünde bulundurun. , tek bir genel bulut sağlayıcısının ilk beklentileri gerçekleşmediğinden. Bu dinamikler, her CEO, CIO, CTO ve CDO'nun günlük olarak karşılaştığı kafa karışıklığına katkıda bulunuyor.</p>
                    <br/>
                    <p>Teknolojide yenilik ve zenginlik yaratmanın bu aşamasına katılmak isteyen kuruluşlar için en önemli şey, yeni başlayanların zihniyetidir; deneme isteği ve başarısızlığın kabulü. Kuruluşlar, %50'den fazlasının başarısız olacağını bilerek yılda 100 AI deneyi yapmaya çalışmalıdır. Birçok şirket kültürü buna uygun değildir. Daha tipik bir yaklaşım, çok sayıda insan, zaman ve para harcayarak büyük bir yapay zeka projesi etrafında toplanmaktır. Bu yaklaşımı tavsiye etmiyorum. AI, büyük bir proje uygulaması değil, toplu deneylerle ilgilidir. Bu ERP değil.</p>
                    <br/>
                    <p>Bu yaz IBM, bu muamma için yenilikçi bir yaklaşım ve çözüm başlattı. Yeni IBM Cloud Private for Data (ICP for Data), veri bilimini, veri mühendisliğini ve uygulama oluşturmayı, şirketlerin verilerinden daha önce gizlenmiş içgörüleri ortaya çıkarmak için kullanabilecekleri bir ortama entegre etmek için tasarlanmış modern bir veri platformudur . IBM Cloud Private üzerinde oluşturulan ICP for Data, veri birleştirme/sanallaştırma, veri ambarı, veri bütünleştirme, veri bilimi/makine öğrenimi ve tümleşik gösterge paneli oluşturma hizmetlerinin yanı sıra merkez olarak bir kurumsal meta-veri kataloğu içerir.</p>
                </aside>
                <div className='about-art-container'>
                    <figure>
                        <img src={Aside1} alt="aboutbanner" className="about-art-img"/>
                    </figure>
                    <aside className="mid-aside">
                        <h2>Hırsımız gevşemedi</h2>
                        <p>Kurumsal verilerden başlayarak bir kuruluştaki tüm verileri sorunsuz bir şekilde bağlamak için tasarlanmıştır ve tüm yeteneklerini veri mikro hizmetleri olarak sunar. Bunu veri devrimi için otoyol sistemi olarak düşünün .
                        Ancak kalıcı platformlar, bir ekosistemin yanı sıra anlamlı, tutarlı yenilik ve iyileştirme gerektirir. 29 Mayıs'ta Data için ICP lansmanından bu yana yaptığımız şey de bu.</p>
                    </aside>
                </div>
                <aside className="top-aside">
                    <p>Bu hafta, platformu daha da ileriye taşıyarak, ICP for Data'nın, platformun şirketin açık kaynak kapsayıcı uygulama platformu olan Red Hat OpenShift üzerinde çalışmasını onaylamak için Red Hat ile birlikte çalıştığını duyuruyoruz. Hareket , IBM'in kapsamlı ara katman yazılımı ve veri yönetiminin OpenShift ile kolay bütünleşmesini sağlamak için bu yaz Red Hat ile yaptığımız haberlere dayanıyor. Artık OpenShift sertifikalı ICP for Data ile müşteriler, bulut yerel iş yüklerini OpenShift'in geniş ortamında ve şirket içinde, genel ve özel bulutlarda çalıştırabilecekler.</p>
                    <br/>
                    <p>Ek olarak, yeni müşterilere platforma kolay ve sezgisel bir giriş sağlayan ücretsiz bir deneme sürümü olan ICP for Data Experiences adlı yeni bir ICP for Data sürümünü yayınlıyoruz. Çözüm sayesinde, geliştiriciler ve veri mühendisleri, makine öğrenimi modelleri için doğru verileri toplamak ve hazırlamak, gelecekteki sonuçları anlamak için tahmine dayalı analitik modelleri oluşturmak ve bunları dağıtmak ve yönetmek gibi işlemleri yapmak için gereken adımlarda hızla ilerleyebilir. modeller.</p>
                    <br/>
                    <p>Bugün ICP for Data'ya eklediğimiz bir diğer yenilikçi özellik , insanların sunuculardan, masaüstü bilgisayarlardan, mobil cihazlardan kuruluş genelindeki verilere erişebilen analitik sorguları yazmasını sağlamak için tasarlanmış türünün ilk örneği bir teknolojidir. , bir araba vb., sanki tek bir veritabanında arama yapıyormuşsunuz gibi. Sanki insanlara dünyayı SQL yapma yeteneği veriyoruz. Ve ICP for Data üzerinde olduğu için, bu yeni özellik ister şirket içinde, ister özel veya genel bulutlarda olsun, aradığınız verileri bulmanıza yardımcı olabilir.</p>
                </aside>
            </div>
        </div>
    )
}

export default Article2;