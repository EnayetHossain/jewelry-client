import Band from "../Band/Band";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Ring from "../Ring/Ring";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Experts></Experts>
      <Ring></Ring>
      <Band></Band>
    </div>
  );
};

export default Home;
