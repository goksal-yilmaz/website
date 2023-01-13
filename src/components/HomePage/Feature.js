import "../../style/HomePage/feature.scss";

const InfoData = [
    {
        title: "AI Ürün Geliştirme",
        description: "Önce AI yaklaşımını kullanan tasarım ve geliştirme ekiplerimiz, titiz geliştirme ile birlikte basit ve zarif tasarımlar üreterek AI destekli ürününüzün olağanüstü kullanıcı deneyimini, güvenilirliğini ve bakımını garanti eder.",
    },
    {
        title: "AI Strateji Danışmanlığı",
        description: "Bir iş sorununuz var ama nereden başlayacağınızdan emin değil misiniz? Mimarlardan, veri bilimcilerden ve ürün başarısı vizyonerlerinden oluşan ekibimiz, mevcut teknolojilerinizi gözden geçirmek, fırsatları belirlemek ve en iyi yapay zeka teknolojisi çözümünü sunmak için size danışır.",
    },
    {
        title: "AI Etkinleştirme",
        description: "İşletmelerin yapay zekanın gücüyle mevcut sistemlerini geliştirmelerine yardımcı oluyoruz. Bakımı yapılabilir  ölçeklenebilir ve üçüncü taraf sistemlerle kolayca entegre olabilen çözümler oluşturmak için makine öğrenimi modellerini sıfırdan geliştiriyor veya mevcut sistemlere entegre ediyoruz.",
    },
]

const Feature = () => {
    return(
        <div className="feature">
            <div className="feature-container">
                <div className="col-1">
                    <h3>Arasaka Kim?</h3>
                    <p>Dili işleyebilen ve iletebilen akıllı makineler geliştirmek için yapay zeka, konuşma tanıma ve doğal dil işleme kullanıyoruz. Bu teknoloji, işletmeler tarafından rekabet avantajı elde etmek ve müşteri hizmetlerini geliştirmek için kullanılıyor.</p>
                </div>
                <div className="col-2">
                    <h2>Olasılıklar hayal gücünüzün ötesinde</h2>
                </div>
                <div className="col-3">
                    {InfoData.map((item) => (
                        <div className="info-box">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Feature;