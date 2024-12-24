import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar,
Tech, Footer, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover w-full
        bg-no-repeat bg-center">
          <Navbar />
          
        </div>
        <Hero />
        <About />
        <Experience />
        <Tech />
        {/* <Works /> */}
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <Footer />
          <StarsCanvas />
          
        </div>
        
      </div>
    </BrowserRouter>
  )
}

export default App

