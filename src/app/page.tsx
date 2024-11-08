import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Projects from "@/components/Projects";
import Exten from "@/components/Exten";
import Costomize from "@/components/Costomize"
import Plans from "@/components/Plan";
import Every from "@/components/Every";
import Data from "@/components/Data";
import Favour from "@/components/Favour";
import Clients from "@/components/Clients";
import Whitepace from "@/components/Whitepace";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Projects />
      <Exten />
      <Costomize/>
      <Plans />
      <Every />
      <Data />
      <Favour/>
      <Clients/>
      <Whitepace/>
      <Footer/>
    </div>
  );
}