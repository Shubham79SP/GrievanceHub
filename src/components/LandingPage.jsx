import Header from "./LandingPage/NavbarLanding.jsx";
import HeroSection from "./LandingPage/HeroSection.jsx";
import FeaturesSection from "./LandingPage/FeaturesSection.jsx";
import FooterLanding from "./LandingPage/FooterLanding.jsx"
import AboutSection from "./LandingPage/AboutSection.jsx";
import FacultySection from "./LandingPage/FacultySection.jsx";
import StudentSection from "./LandingPage/StudentSection.jsx";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      {/* <HeroSection /> */}
      
      
      {/* Registration process section removed, now only faculty and student sections remain */}
      <div className="py-5" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <FacultySection />
            </div>
            <div className="col-lg-6">
              <StudentSection />
            </div>
          </div>
        </div>
      </div>
      <AboutSection/>
      <FooterLanding/>
      
    </div>
  )
}

export default LandingPage
