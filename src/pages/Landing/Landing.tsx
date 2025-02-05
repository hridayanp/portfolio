import About from '../PageSections/About/About';
import ChallengeStructure from '../PageSections/ChallengeStructure/ChallengeStructure';
import ContactUs from '../PageSections/ContactUs/ContactUs';
import DataAccess from '../PageSections/DataAccess/DataAccess';
import EvaluationAndPrizes from '../PageSections/EvaluationPrizes/EvaluationPrizes';
import Features from '../PageSections/Features/Features';
import Home from '../PageSections/Home/Home';
import OpenSourceRequirements from '../PageSections/OpenSourceRequirements/OpenSourceRequirements';
// import OutreachStrategy from '../PageSections/OutreachStrategy/OutreachStrategy';
import Partners from '../PageSections/Partners/Partners';
// import PostEvent from '../PageSections/PostEvent/PostEvent';
import Prizes from '../PageSections/Prizes/Prizes';

const Landing = () => {
  return (
    <div className="overflow-x-hidden thin-scrollbar">
      {/* Sections */}
      <Home />
      <About />
      <Features />
      <DataAccess />
      <ChallengeStructure />
      <EvaluationAndPrizes />
      <Prizes />
      {/* <OutreachStrategy />
      <PostEvent /> */}
      <OpenSourceRequirements />
      <Partners />
      <ContactUs />
    </div>
  );
};

export default Landing;
