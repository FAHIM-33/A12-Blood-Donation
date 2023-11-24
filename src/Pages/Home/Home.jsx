import { Helmet } from "react-helmet";
import Loading from "../../Components/Loading";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <section className="">
            <Helmet>
                <title>BDC | Home</title>
            </Helmet>
            <Banner></Banner>
        </section>
    );
};

export default Home;