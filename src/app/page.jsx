import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portais from "@/components/Portais";
import Sobre from "@/components/Sobre";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portais />
        <Sobre />
      </main>
      <Footer />
    </>
  );
}
