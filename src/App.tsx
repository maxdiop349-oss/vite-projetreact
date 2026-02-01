
import FeatureSection from "./composants/Feature-section";
import Footer from "./composants/footer";
import Herosection from "./composants/hero-section";
import Navbar from "./composants/Navbar";
import Pricing from "./composants/pricing";
import Testimonial from "./composants/Testimonial";
import Workflow from "./composants/workflow";

const App = () =>{
  return (
    <>
      <Navbar/>
  <Herosection />
  <FeatureSection />
  <Workflow />
  <Pricing/>
<Testimonial />
<Footer/>
    </>
  );
};


export default App;
