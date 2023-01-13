import Banner from "../components/HomePage/Banner";
import About from "../components/HomePage/About";
import Blog from "../components/HomePage/Blog";
import Company from "../components/HomePage/Company";
import Feature from "../components/HomePage/Feature";
import Aside from "../components/HomePage/Aside";
import Info from "../components/HomePage/Info";

const HomePage = () => {
    return(
        <div>
            <Banner/>
            <About/>
            <Feature/>
            <Aside/>
            <Info/>
            <Company/>
            <Blog/>
        </div>
    )
}

export default HomePage;