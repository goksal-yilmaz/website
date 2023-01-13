import Banner from "../../assest/blog/blog3/banner.jpg";

const Article3 = () => {
    return(
        <div className="about-article">
            <div className="about-article-container">
                <figure>
                    <img src={Banner} alt="aboutbanner"/>
                </figure>
                <aside className="top-aside">
                    <h2>Bir Benzetme: "Kör GPU'lar ve Fil"</h2>
                    <p>…Her kör adam filin vücudunun farklı bir kısmını hisseder, ancak sadece bir kısmını, örneğin yan tarafını veya dişini hisseder. Daha sonra kısmi deneyimlerine dayanarak fili tarif ederler ve tanımları bir filin ne olduğu konusunda tamamen anlaşmazlık içindedir.” – Rigveda</p>
                    <br/>
                    <p>Bu benzetme, çözmekte olduğumuz sorunu ve derin öğrenme ile görüntü tanımada elde ettiğimiz umut verici erken sonuçların bağlamını açıklamakta yardımcı olur. Başlangıçtaki anlaşmazlığa rağmen, bu insanlara yeterince zaman verilirse, bir filin oldukça doğru bir toplu resmini bir araya getirmek için yeterli bilgiyi paylaşabilirler.</p>
                    <br/>
                    <p>Derin öğrenme, bilgisayarların, insanların dünyanın çoğunu deneyimlediği görüntü ve sesleri anlamasına ve bunlardan anlam çıkarmasına yardımcı olmak için yaygın olarak kullanılan bir yapay zeka yöntemidir. Tüketici mobil uygulama deneyimlerinden tıbbi görüntüleme teşhisine kadar her şeyde çığır açma sözü veriyor. Ancak derin öğrenmeyi geniş ölçekte devreye almanın doğruluğu ve pratikliğindeki ilerleme, eğitim sürelerinin günler ve haftalarla ölçüldüğü bir süreç olan devasa ve karmaşık yapay zeka modellerini çalıştırma ihtiyacı gibi teknik zorluklarla sınırlanıyor.</p>
                    <br/>
                    <p>Kendi payımıza, IBM Research'teki ekibim, büyük veri kümelerine sahip büyük modeller için bu eğitim sürelerini azaltmaya odaklandı. Amacımız, derin öğrenme eğitimiyle ilişkili bekleme süresini günler veya saatlerden dakikalara veya saniyelere indirmek ve bu yapay zeka modellerinin doğruluğunu artırmaktır. Bunu başarmak için, derin öğrenmeyi çok sayıda sunucu ve GPU'ya dağıtmada büyük zorluk ölçeğindeki sorunları ele alıyoruz.</p>
                </aside>
            </div>
        </div>
    )
}

export default Article3;