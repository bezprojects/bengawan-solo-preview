import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import Hours from "@/components/Hours";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Hours />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
