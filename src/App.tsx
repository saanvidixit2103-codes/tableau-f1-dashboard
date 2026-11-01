import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import KpiStrip from "@/components/KpiStrip";
import ProjectOverview from "@/components/ProjectOverview";
import Dashboard from "@/components/Dashboard";
import Story from "@/components/Story";
import Insights from "@/components/Insights";
import Drivers from "@/components/Drivers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-track-950">
      <Navbar />
      <main>
        <Hero />
        <KpiStrip />
        <ProjectOverview />
        <Dashboard />
        <Story />
        <Insights />
        <Drivers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
