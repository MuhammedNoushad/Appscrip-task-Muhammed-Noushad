import Hero from "../components/heroSection/Hero";
import NavBar from "../components/navbarSection/NavBar";
import Shop from "../components/shopSection/Shop";

const Home = () => {
  return (
    <div>
      <NavBar />
        <Hero />
        <Shop />
    </div>
  );
};

export default Home;
