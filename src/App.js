import { Route, Routes } from "react-router-dom";
import Appbar from "./components/HomePage/Appbar";
import Footer from "./components/HomePage/Footer";
import HaxPage from "./scenes/HaxPage";
import HomePage from "./scenes/HomePage";
import AboutPage from "./scenes/AboutPage";
import ContactPage from "./scenes/ContactPage";
import Article1 from "./components/BlogPage/Article1";
import Article2 from "./components/BlogPage/Article2";
import Article3 from "./components/BlogPage/Article3";
import Article4 from "./components/BlogPage/Article4";
import Article5 from "./components/BlogPage/Article5";


function App() {
  return (
    <div className="App">
      <header>
        <Appbar/>
      </header>
      <main>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
        <Routes>
            <Route path="/hax" element={<HaxPage/>}/>
        </Routes>
        <Routes>
            <Route path="/hakkimizda" element={<AboutPage/>}/>
        </Routes>
        <Routes>
            <Route path="/iletisim" element={<ContactPage/>}/>
        </Routes>
        <Routes>
            <Route path="/gelecek" element={<Article1/>}/>
        </Routes>
        <Routes>
            <Route path="/yapay-zeka-ile-kazanmak" element={<Article2/>}/>
        </Routes>
        <Routes>
            <Route path="/kör-gpular-ve-fil" element={<Article3/>}/>
        </Routes>
        <Routes>
            <Route path="/yapay-zeka-bir-sihir-değildir" element={<Article4/>}/>
        </Routes>
        <Routes>
            <Route path="/veri-kültürü-oluşturmak" element={<Article5/>}/>
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
