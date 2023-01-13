import Banner from "../../assest/blog/blog1/banner.jpg";
import Aside1 from "../../assest/blog/blog1/aside1.jpg";
import Aside2 from "../../assest/blog/blog1/aside2.png";
const Article1 = () => {
    return(
        <div className="about-article">
            <div className="about-article-container">
                <figure>
                    <img src={Banner} alt="aboutbanner"/>
                </figure>
                <aside className="top-aside">
                    <h2>Watson Anywhere: Gelecek</h2>
                    <p>Yapay zeka dünyasında bir paradoks var: Hayatımızın en büyük ekonomik fırsatı olsa da (2030'a kadar GSYİH'ya 16 trilyon ABD doları katkıda bulunacağı tahmin ediliyor), yapay zekanın kurumsal olarak benimsenmesi 2018'de %4'ün altındaydı. Yakın tarihli Gartner anketi, 2018'deki %4'ün şimdi 2019'da %14'e çıktığını söyledi. Ancak yine de bu yetersiz. Bunun çeşitli nedenleri vardır: beceri eksikliği, araç eksikliği, güven eksikliği vb. Ancak en büyük sorun kültüreldir.</p>
                    <br/>
                    <p>Teknolojide yenilik ve zenginlik yaratmanın bu aşamasına katılmak isteyen kuruluşlar için en önemli şey, yeni başlayanların zihniyetidir; deneme isteği ve başarısızlığın kabulü. Kuruluşlar, %50'den fazlasının başarısız olacağını bilerek yılda 100 AI deneyi yapmaya çalışmalıdır. Birçok şirket kültürü buna uygun değildir. Daha tipik bir yaklaşım, çok sayıda insan, zaman ve para harcayarak büyük bir yapay zeka projesi etrafında toplanmaktır. Bu yaklaşımı tavsiye etmiyorum. AI, büyük bir proje uygulaması değil, toplu deneylerle ilgilidir. Bu ERP değil.</p>
                    <br/>
                    <p>Şans cesurdan yanadır. Tüm deneme yanılma sürecinin geçtiğine ve yaşanmaya devam edeceğine, olumlu sonuçlara değer olduğuna inanıyorum. Sadece ekonomik fırsat nedeniyle değil, aynı zamanda işletmelere, tüketicilere ve nihayetinde içinde yaşadığımız dünyaya yardımcı olma potansiyeli nedeniyle. Daha fazla deneme, daha fazla başarısızlık, daha fazla başarı olacak. Ve kesinlikle, nasıl yaşadığımız ve çalıştığımızla ilgili pek çok değişiklik. Bu değişikliklerin daha iyi olmasını sağlamak hepimize bağlı.</p>
                </aside>
                <div className='about-art-container'>
                    <figure>
                        <img src={Aside1} alt="aboutbanner" className="about-art-img"/>
                    </figure>
                    <aside className="mid-aside">
                        <h2>Hırsımız gevşemedi</h2>
                        <p>Watson Anywhere, yapay zeka yapmanın harika bir yolundan daha fazlasıdır. </p>
                        <p>Şans cesurdan yanadır. Tüm deneme yanılma sürecinin geçtiğine ve yaşanmaya devam edeceğine, olumlu sonuçlara değer olduğuna inanıyorum. Sadece ekonomik fırsat nedeniyle değil, aynı zamanda işletmelere, tüketicilere ve nihayetinde içinde yaşadığımız dünyaya yardımcı olma potansiyeli nedeniyle. Daha fazla deneme, daha fazla başarısızlık, daha fazla başarı olacak. Ve kesinlikle, nasıl yaşadığımız ve çalıştığımızla ilgili pek çok değişiklik. Bu değişikliklerin daha iyi olmasını sağlamak hepimize bağlı.</p>
                    </aside>
                </div>
                <aside className="top-aside">
                    <p>Buna neden inanıyorum? Çünkü yapay zekanın başarılı olması için çok önemli bir unsur güvendir. Şirketler, deneme yanılma sorunlarına rağmen, verilere dayalı anlamlı bağlantılar ve öneriler oluşturmak için yapay zekaya nihai olarak güvenebileceklerinden emin olmalıdır. Bu nedenle, AI söz konusu olduğunda, hangi şirketlerin başarılı olup hangilerinin olmayacağını belirlemede güven son derece önemli olacaktır. IBM hakkında pek çok şey söyleyebilirsiniz, ancak kimsenin IBM'e güvenilemeyeceğini düşündüğünü sanmıyorum. Bir kurum olarak geçmiş performansımız kendisi için konuşur.</p>
                    <br/>
                    <p>AI istemci ürün referanslarımızı göz önünde bulundurun. AI'da diğer tüm şirketlerden daha fazla halka açık referansımız var. Ve seçtiğim sözcüklere dikkat edin: bunlar referans olarak özel hizmet taahhütleri değildir. Birkaç isim vermek gerekirse, ilk iki gönderide anlattığım Watson OpenScale , Assistant ve AutoAI gibi ürünleri kullanan müşterilerden bahsediyorum . Şimdi, bazı durumlarda, müşteriler yardımcı olması için IBM hizmetlerini (veya diğer sistem entegratörlerinin hizmetlerini) işe alıyor mu? Kesinlikle. Ancak Watson, özel hizmetlerin çok ötesine geçti.</p>
                    <br/>
                    <p>Ve daha fazla müşterimiz yapay zeka hikayelerini anlattıkça, diğerlerini de düşünmeye, katılmaya ve denemeye teşvik ediyor. Özellikle çeşitli sektörlerde benimsenme kapsamı beni heyecanlandırıyor. Şimdiye kadar, sektöre göre gördüğüm en yaygın kullanım durumları aşağıdaki gibidir:</p>
                </aside>
                <figure>
                    <img src={Aside2} alt="aboutbanner"/>
                </figure>
            </div>
        </div>
    )
}

export default Article1;