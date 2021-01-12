import Hero from "../components/Home-page/Hero";
import HowItWorks from "../components/Home-page/HowItWorks";
import Pricing from "../components/Home-page/Pricing";
import WhyUs from "../components/Home-page/WhyUs";
import Testimonial from "../components/Home-page/Testimonial";
import ServiceAreas from "../components/Home-page/ServiceAreas";
import Layout from "../components/layout.jsx";

function IndexPage() {
  return (
    <Layout>
      <Hero/>
      <HowItWorks/>
      <Pricing/>
      <Testimonial/>
      <WhyUs/>
      <ServiceAreas/>
    </Layout>
  );
}

export default IndexPage;
