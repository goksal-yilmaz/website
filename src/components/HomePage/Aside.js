import "../../style/HomePage/aside.scss";

const DetailsData = [
    {
        title: "Konuşma ve İnsan Etkileşimi",
        description: "Dili işleyebilen ve iletebilen akıllı makineler geliştirmek için yapay zeka, konuşma tanıma ve doğal dil işleme kullanıyoruz. Bu teknoloji, işletmeler tarafından rekabet avantajı elde etmek ve müşteri hizmetlerini geliştirmek için kullanılıyor."
    },
    {
        title: "Tanıma ve Bilgisayarla Görme",
        description: "Karmaşık iş sorunlarını çözmek için yüz tanıma, vücut ölçümü ve nesne tanıma dahil olmak üzere Görüntü İşleme teknolojisinden yararlanıyoruz. Ele alınan sorunların sürekli genişleyen listesi güvenlik, emniyet, sağlık ve dolandırıcılığın önlenmesini içerir."
    },
    {
        title: "Patern ve Anormallik Tespiti",
        description: "Makine öğrenimi ve diğer bilişsel yaklaşımlar, verilerdeki kalıpları tanımlamak ve belirli bir veri parçasının mevcut bir kalıba uyup uymadığına veya bir aykırı değer olup olmadığına dair içgörü sağlayabilen bilgiler arasındaki daha yüksek dereceli bağlantıları öğrenmek için kullanılır."
    }
]

const Aside = () => {
    return(
        <div className="aside">
            <div className="aside-container">
                <div className="aside-header">
                    <h3>Gelecek Şimdi ve Sadece Farkına Varmanız Gerekiyor. Geleceğe Bugün Adım Atın ve Gerçekleştirin.</h3>
                </div>
                <div className="aside-details">
                    {DetailsData.map((item) => (
                        <div className="aside-box">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Aside;