import Banner from "../../assest/blog/blog5/banner.jpg";
import Aside1 from "../../assest/blog/blog5/aside1.jpg";

const Article5 = () => {
    return(
        <div className="about-article">
            <div className="about-article-container">
                <figure>
                    <img src={Banner} alt="aboutbanner"/>
                </figure>
                <aside className="top-aside">
                    <h2>Veri Kültürü Oluşturmanın Önemi</h2>
                    <p>Yapay zekayı (AI) kullanmak ve kullanmak, dünyadaki birçok işletme için bir hedeftir. Elbette bilişsel teknolojiyle çalışmaya başlamadan önce atılması gereken birkaç adım var. Yeni başlayanlar için yapay zeka, makine öğrenimi ve makine öğrenimi gerektirir, analitik gerektirir. Analitikle etkili bir şekilde çalışmak için basit, zarif bir veriye veya bilgi mimarisine (IA) ihtiyacınız var. Başka bir deyişle, IA olmadan AI yoktur.</p>
                    <br/>
                    <p>Ancak bu adımlar ne kadar zahmetli ve karmaşık görünse de yapay zekayı benimsemenin önündeki en büyük engeller değiller. Yapay zeka kullanımındaki gerçek başarı, bir kuruluşun veri merkezli bir kültürü benimseme becerisine bağlıdır.</p>
                    <br/>
                    <p>Kültürü hafife almayın. Bir şirketin en güçlü varlıklarından biri veya en büyük engeli olabilir. Bu durumda, yıllar boyunca binlerce işletme ile tanışmış olduğumuzdan, gerçek şu ki, çoğu işletmenin bir veri kültürü yoktur.</p>
                </aside>
                <div className='about-art-container'>
                    <figure>
                        <img src={Aside1} alt="aboutbanner" className="about-art-img"/>
                    </figure>
                    <aside className="mid-aside">
                        <h2>Zamanı Geri Alma Vakti</h2>
                        <p>Aslında, birçoğu ihtiyacı olduğunu bile bilmiyor. Bazen, ironik bir şekilde, mevcut kültürler bir işletmenin ihtiyacı görme yeteneğini gölgeleyebilir (yani, ağaçlar için ormanı göremezler). Diğer durumlarda, kuruluşlar ihtiyacın farkındadır, ancak algılanan veya gerçek karmaşıklıklar karşısında felç olur.</p>
                        <br/>
                        <p>Her iki durumda da bu değişmeli. İş ve teknoloji analisti ve yazar Ben Thompson bir keresinde şöyle yazmıştı: "Kültür başarıyı doğuran bir şey değildir, aksine onun bir ürünüdür." Bir kuruluş verilerle görünür/maddi bir başarı elde etmemişse, ondan bir veri kültürü oluşturması nasıl beklenebilir?</p>
                        <br/>
                        <p>Misyonumuz, verileri basit ve dünya için erişilebilir hale getirmektir. Başarılı bir sonuca ulaşmak için pratik bir yaklaşımla şirketlerin bir veri kültürünün tohumlarını atmasını sağlıyoruz. Başka bir deyişle, kuruluşların veri bilimini daha hızlı yapmalarını sağlıyoruz. Bu gerçekleştiğinde, sonuçlar somuttur, faydalar açıktır ve verilerin gücü açığa çıkar.</p>
                        <br/>
                        <p>Bir keresinde bir veri bilimi projesi ile bir yazılım mühendisliği projesi arasındaki farkın, birincisinin gerçekten işe yarayıp yaramayacağına dair hiçbir fikriniz olmaması olduğunu duymuştum. Sadık bir 'hızlı başarısız' destekçisi olsanız bile, bu pek çok kişi için çok fazla bir bilinmezliktir. Yatırım yapan çoğu kuruluş, bu yatırımın geri dönüşünü nasıl sağlayacaklarını anlamak ister. Bunun Silikon Vadisi mantrası olmadığını anlıyorum, ancak çoğu işletme Silikon Vadisi'nden farklı bir yatırım getirisi standardına tabi tutuluyor.</p>
                    </aside>
                </div>
                <aside className="top-aside">
                    <p>Benim gözlemim, makine öğrenimini oluşturmak ve dağıtmak için harcanan zamanın çoğunun algoritmalara ve modellere harcanmadığıdır. Bunun yerine, en sıradan görevlere harcanır: veri hazırlama, veri taşıma, özellik çıkarma vb. çöp girişi/çöp çıkışı düşük kesinliğe yol açar.</p>
                    <br/>
                    <p>AI, temel olarak, veriler üzerine kurulu uygulamaları etkinleştirmek için makine öğrenimi ve derin öğrenme tekniklerini kullanmakla ilgilidir. Bir veri kültürüne can atan her kuruluş, başlamak için bir yer seçmelidir. Derin öğrenme, daha önce olmayan verileri erişilebilir hale getirecek; bu, başarı şansı yüksek bir ivme yaratacaksa, başlamanız gereken yer burasıdır. Diğer kuruluşlar için daha iyi tahminler ve otomasyon, bir veri kültürünün oluşmasını sağlayacaktır. Hangi yolu seçerseniz seçin amaç aynıdır: veri bilimini daha hızlı yapın.</p>
                </aside>
            </div>
        </div>
    )
}

export default Article5;