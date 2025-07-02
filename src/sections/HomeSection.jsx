import Header from "../components/Home/Header/Header.jsx";
import AddInfoHome from "../components/Home/AddInfoHome.jsx";
import SloganHome from "../components/Home/SloganHome.jsx";
import VideoHome from "../components/Home/VideoHome.jsx";

export default function HomeSection() {



    return (
        <section className="relative text-white overflow-x-hidden flex flex-col">

            <div className="z-30 xl:absolute xl:inset-x-0 xl:top-0">
                <Header/>
            </div>

            <SloganHome/>

            <VideoHome/>

            <AddInfoHome/>

        </section>
    );
}