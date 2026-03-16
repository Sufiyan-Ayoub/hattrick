import Badges from './landing/Badges'
import Banner from './landing/Banner'
import Comments from './landing/Comments'
import HeroSection from './landing/HeroSection'
import Innovation from './landing/Innovation'
import LandingWrapper from './landing/LandingWrapper'
import Services from './landing/Services'
import Team from './landing/Team'
import OurTeam from './landing/OurTeam'
import Workflow from './landing/Workflow'

const Page = () => {
    return (
        <LandingWrapper>
            <div className={`--pg-landing flex cols`}>
                <HeroSection />
                <Badges />
                <Innovation />
                <Services />
                <Workflow />
                <Comments />
                <OurTeam noPg={true} />
                <Team />
                <Banner />
            </div>
        </LandingWrapper>
    )
}

export default Page