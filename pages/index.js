import About from "../src/components/About";
import Heading from "../src/components/Heading";
import Layout from "../src/components/Layout";
import Work from "../src/components/Work";

export default function Home() {
  return (
    <Layout>
      <Heading />
      <Work />
      <About />
    </Layout>
  );
}
