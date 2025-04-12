import Layout from "../layouts";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Communities from "../components/Communities";
import Learn from "../components/Learn";
import CTA from "../components/CTA";
import Testimonial from "../components/Testimonial";

export default function App() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Communities />
      <Learn />
      <Testimonial />
      <CTA />
    </Layout>
  );
}
