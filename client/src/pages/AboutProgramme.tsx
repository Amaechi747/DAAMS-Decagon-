import { FC } from 'react';
import { HiringPartners } from "../components"
import { decadev_studying, java_stack, node_stack, dot_net, python, android, ios, decadev_curriculum, decagon_img } from "../images"

interface Props {

}

const AboutProgramme: FC<Props> = (props) => {
    return (
        <div>
            <div className="sc-pNWdM izfJEe">
                <div id="programs" className="sc-lmgQwP hpRDUw">
                    <h1>About the Program</h1>
                    <div className="flex-content">
                        <div className="half-content">
                            <p>At Decagon Institute, we believe that the student’s well-being is crucial to their success in our
                                training program.</p>
                            <p>As a result, we provide our decadevs with laptops, accommodation, meal allowance and a stipend to
                                ensure they are focused and in the best position to thrive.</p>
                            <h2>Training</h2>
                            <p>We deliver an intensive 6-month program where our software developers learn both full-stack
                                software development and additional soft skills in an immersive environment. Through an agile
                                delivery methodology, mentor matching and leadership modules, our elite engineers are equipped
                                with techniques and a leadership mindset that enables them to work competitively in any team
                                globally.</p>
                        </div>
                        <div className="photo"><img src={decadev_studying} alt="decadev-studying" /></div>
                    </div>
                    <div className="full-content">
                        <h2>Projects</h2>
                        <p>As part of our curriculum, we expose our engineers to real-life applications and projects. During
                            these projects, we ensure they are well-equipped to design programs both individually and in teams.
                            This aspect of our program provides our engineers with verifiable work experience and the confidence
                            to excel in their jobs after graduation.</p>
                        <h2>Internships</h2>
                        <p>We offer a select number of organizations a free non-committal 2 months internship with our
                            outstanding developers prior to graduation.</p>
                        <h2>Placement</h2>
                        <p>At the end of the program, most Decagon developers are matched with our hiring partners to join their
                            engineering teams full-time, either remotely or in person.</p>
                    </div>
                </div>
                <div id="curriculum" className="sc-iJCRrE bojiJp">
                    <h1>Our Best-in-Class Curriculum</h1>
                    <div className="main-div">
                        <p>Gain fluency with the core software engineering techniques needed to tap into a fast-growing field.
                            Our curriculum is curated by following best practices and innovative teaching approaches for our
                            decadevs to meet evolving employer demands.</p>
                    </div>
                    <div className="flex-content">
                        <div className="half-content">
                            <p>At Decagon Institute, our curriculum is broken down into 6 units of 4 weeks each (6months): There
                                will be content for each of the 6 units.</p>
                            <p>We have 6 stacks that our decadevs learn and become proficient in using upon graduation from the
                                program. These include: Java, Node, .NET, Python, Android and iOS.</p>
                        </div>
                        <div className="photo"><img src={decadev_curriculum} alt="decadev-curriculum" /></div>
                    </div>
                    <div className="stackdiv">
                        <div className="sc-giAqHp bYgUJS">
                            <div></div>
                            <div className="img"><img src={java_stack} alt="stack-logo" /></div>
                            <div className="content">
                                <h4>Java Stack</h4>
                                <p>View Curriculum</p>
                            </div>
                        </div>
                        <div className="sc-giAqHp bYgUJS">
                            <div></div>
                            <div className="img"><img src={node_stack} alt="stack-logo" /></div>
                            <div className="content">
                                <h4>Node Stack</h4>
                                <p>View Curriculum</p>
                            </div>
                        </div>
                        <div className="sc-giAqHp bYgUJS">
                            <div></div>
                            <div className="img"><img src={dot_net} alt="stack-logo" /></div>
                            <div className="content">
                                <h4>.NET Stack</h4>
                                <p>View Curriculum</p>
                            </div>
                        </div>
                    </div>
                    <div className="stackdiv">
                        <div className="sc-giAqHp bYgUJS">
                            <div></div>
                            <div className="img"><img src={python} alt="stack-logo" /></div>
                            <div className="content">
                                <h4>Python Stack</h4>
                                <p>View Curriculum</p>
                            </div>
                        </div>
                        <div className="sc-giAqHp bYgUJS">
                            <div></div>
                            <div className="img"><img src={android} alt="stack-logo" /></div>
                            <div className="content">
                                <h4>Andriod Dev Stack</h4>
                                <p>View Curriculum</p>
                            </div>
                        </div>
                        <div className="sc-giAqHp bYgUJS">
                            <div></div>
                            <div className="img"><img src={ios} alt="stack-logo" /></div>
                            <div className="content">
                                <h4>IOS Dev Stack</h4>
                                <p>View Curriculum</p>
                            </div>
                        </div>
                    </div>
                    <div className="full-content">
                        <p>Every week we follow a specific agenda designed for you to pick up new skills quickly. Individual
                            progress assessment is built into every corner of our digital program allowing students to repeat
                            content until mastery has been demonstrated.</p>
                        <p>A typical day/week in the life of a decadev is reflected in our weekly schedule below:</p>
                        <div className="sc-bYwzuL fDDjHD">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="time-row">TIME</th>
                                        <th className="activity-row">ACTIVITY</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="time">9am - 11am </td>
                                        <td className="buttonBlack">
                                            <h3>Instructor Led Class</h3>
                                            <p>Get guidance, feedback, and more from experts who are dedicated to supporting
                                                your learning and career goals.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="time">11am - 12 pm</td>
                                        <td className="buttonBlack">
                                            <h3>Break</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="time">12pm - 2pm</td>
                                        <td className="buttonBlack">
                                            <h3>Algorithms</h3>
                                            <p>Student should be proficient in algorithms, to help them solve real life
                                                problems.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="time">2pm - 3pm</td>
                                        <td className="buttonBlack">
                                            <h3>Break</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="time">3pm - 6pm</td>
                                        <td className="buttonBlack">
                                            <h3>Project/Task Deliverables</h3>
                                            <p>You will be able to create an amazing portfolio that showcases your skills and
                                                experience.</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <HiringPartners />

                <footer className="sc-fujyAs fEiLSA">
                    <div className="upper-footer">
                        <div className="logo"><img src={decagon_img} alt="decagon-logo" /></div>
                        <div className="footer-nav">
                            <li className="sc-dlnjwi dqVhjI"><a href="/program" target="_blank" rel="noreferrer">Our Program</a>
                            </li>
                            <li className="sc-dlnjwi dqVhjI"><a href="/testimonials" target="_blank"
                                rel="noreferrer">Testimonials</a></li>
                            <li className="sc-dlnjwi dqVhjI"><a href="/faq" target="_blank" rel="noreferrer">FAQs</a></li>
                        </div>
                        <div className="d-flex flex-wrap justify-content-center">
                            <p>For more enquiries:</p>
                            <p><a href="mailto:recruit@decagonhq.com"
                                style={{ marginLeft: "1rem", color: "rgb(52,168,83", textDecoration: "none" }}>recruit@decagonhq.com</a>
                            </p>
                        </div>
                    </div>
                    <hr />
                </footer>
            </div>
        </div>
    )
};

export default AboutProgramme;