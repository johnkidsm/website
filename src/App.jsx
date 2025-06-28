import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Footer, StarsCanvas, Works } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="relative">
          
          <div className="relative z-0">
            <About />
            <Experience />
            {/* <Works /> */}
            <Tech />
            {/* <Feedbacks /> */}
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
            {/*<Footer /> */}
            <div className="text-center py-4 text-gray-500 text-xs">
              <p>This entity has been successfully acquired by Chinese technology companies. All associated rights are reserved by the acquiring entity.</p>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

