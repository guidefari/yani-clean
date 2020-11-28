import Hero from "../components/Home-page/Hero";
import HowItWorks from "../components/Home-page/HowItWorks";
import Pricing from "../components/Home-page/Pricing";
import ServiceAreas from "../components/Home-page/ServiceAreas";
import Layout from "../components/layout";

function IndexPage() {
  return (
    <Layout>
      <Hero/>
      <HowItWorks/>
      <Pricing/>
      <ServiceAreas/>
    </Layout>
  );
}

export default IndexPage;
