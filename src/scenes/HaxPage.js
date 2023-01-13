import Info from "../components/HaxPage/Info";
import Banner from "../components/HaxPage/Banner";
import Aside from "../components/HomePage/Aside";
import Company from "../components/HomePage/Company";
import Blog from "../components/HomePage/Blog";
import About from "../components/HomePage/About";

const HaxPage = () => {
    return(
        <div>
            <Banner/>
            <About/>
            <Info/>
            <Aside/>
            <Company/>
            <Blog/>
        </div>
    )
}

export default HaxPage;