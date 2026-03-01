import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Works from "@/components/sections/Works";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import Header from "@/components/header";


export default function Home() {
    return (
        <>
            <PageTransition/>
            <div className="relative z-10 min-h-screen w-full overflow-x-clip">
                <Header/>
                <Hero/>
                <Services/>
                <Works/>
                <About/>
                <Contact/>
                <Footer/>
            </div>
        </>
    );
}
