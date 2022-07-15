import { FC } from 'react';
import { HiringPartners } from "../components"
import { Link } from "react-router-dom"

interface Props {
}

const ApplicationProcedure: FC<Props> = (props) => {
    return (
        <>
            <div id="admission" className="sc-kLojOw iehvjW dRsyqq">
                <div>
                    <h2>Admissions Process</h2>
                    <h3>Before you fill out and submit your application form, please ensure you meet the following
                        requirements:</h3>
                    <ul>
                        <li>You possess a track record of exceptional personal, academic and professional performance.</li>
                        <li>You are a fast learner with excellent learning and cognitive ability.</li>
                        <li>You possess the determination to work hard and excel as a software engineer.</li>
                        <li>You have either a Higher National Diploma(HND), Bachelor's degree, or Masters.</li>
                        <li>You have completed NYSC or Have an Exemption Letter.</li>
                        <li>You must have a credible Guarantor</li>
                    </ul>
                    <h3>Do you think you have what it takes to become a Decadev? </h3>
                    <p>If you are in agreement with the requirements listed above and believe you have what it takes to
                        become an outstanding Decadev in our intensive program, fill out the application form below and stay
                        tuned for the next steps. </p><Link to="/"><button type="submit" className="sc-iCoGMd jgRvOJ">Apply Now</button></Link>
                </div>
            </div>
            <div className="sc-cBoqAE lRfdj dRsyqq">
                <div className="container">
                    <div className="heading">
                        <h1>Flexible Financing Options</h1>
                    </div>
                    <div className="content">
                        <div className="sc-ciSkZP bwSYJA">
                            <div id="financing" className="sc-carFqZ kMTwTP">
                                <h2 className="title-header">Learn first, Pay later</h2>
                                <div className="description"></div>
                            </div>
                            <div id="financing" className="sc-carFqZ jiJkuH">
                                <h2 className="title-header">Learn-Then-Earn (LTE) payment credit</h2>
                                <div className="description"></div>
                            </div>
                        </div>
                        <div className="sc-jcwpoC kyvWZW">
                            <div className="sc-gXfVKN jKLUHq">
                                <div className="highlight-item">
                                    <div className="description">
                                        <p>At Decagon, bridging the gap between the best talent and the best opportunities
                                            in tech is our priority. We believe affordability of our progam should not be a
                                            barrier to entry for our prospective students. Hence, we have developed the
                                            Learn-Then-Earn (LTE) payment credit plan.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sterling">Powered by <img src="./images/ster.dacc93b3.svg" alt="sterling" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HiringPartners />
            <footer className="sc-fujyAs fEiLSA">
                <div className="upper-footer">
                    <div className="logo"><img src="./images/decagon.0cbc0fc4.svg" alt="decagon-logo" /></div>
                    <div className="footer-nav">
                        <li className="sc-dlnjwi dqVhjI"><a href="/program" target="_blank" rel="noreferrer">Our Program</a>
                        </li>
                        <li className="sc-dlnjwi dqVhjI"><a href="/testimonials" target="_blank" rel="noreferrer">Testimonials</a>
                        </li>
                        <li className="sc-dlnjwi dqVhjI"><a href="/faq" target="_blank" rel="noreferrer">FAQs</a></li>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center">
                        <p>For more enquiries:</p>
                        <p><a href="mailto:recruit@decagonhq.com"
                            style={{ marginLeft: "1rem", color: "rgb(52, 168, 83)", textDecoration: "none" }}>recruit@decagonhq.com</a>
                        </p>
                    </div>
                </div>
                <hr />
            </footer>
        </>


    )
};

export default ApplicationProcedure;
