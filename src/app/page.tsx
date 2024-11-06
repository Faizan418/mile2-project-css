import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Skills from "../../components/Skills/Skills";
import Work from "../../components/Work/Work";

export default function Home() {
  return (
    <div>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Footer/>
    </div>
  );
}
