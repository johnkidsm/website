import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Footer, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <div className="relative">
          <Hero />
          <div className="relative z-0">
            <About />
            <Experience />
            <Tech />
            <Feedbacks />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

