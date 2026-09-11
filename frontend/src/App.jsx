import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import StoryStrip from "./Components/StoryStrip"
import InvoiceFlow from "./Components/InvoiceFlow"
import Leaderly from "./Components/Leaderly"
import Meetly from "./Components/Meetly"
import Growly from "./Components/Growly"
import Taskly from "./Components/Taskly"
import SelectedWork from "./Components/SelectedWork"
import HowIThink from "./Components/HowIThink"
import About from "./Components/About"
import BeyondWriting from "./Components/BeyondWriting"
import Contact from "./Components/Contacts"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StoryStrip />
      <SelectedWork />
      <HowIThink/>
      <About/>
      <BeyondWriting/>
      <Contact/>
      
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Case Studies */}
        <Route path="/invoiceflow" element={<InvoiceFlow />} />
        <Route path="/leaderly" element={<Leaderly />} />
        <Route path="/meetly" element={<Meetly />} />
        <Route path="/growly" element={<Growly />} />
        <Route path="/taskly" element={<Taskly />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App