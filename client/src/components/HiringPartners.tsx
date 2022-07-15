import { access, cowrywise, farmcrowdy, mastercard, piggyvest, seamfix } from "../images"

type Props = {}

const HiringPartners = (props: Props) => {
 return (
  <div id="partners" className="sc-jJMGnK laKGqb">
   <div className="elements-items"><div>
    <h1>Our Hiring Partners</h1></div>
    <div>
     <p>At Decagon Institute, we believe the decision you make to invest in your future is worth it! One of the ways we ensure this, is by providing our decadevs with the opportunity to intern and potentially transition to a full-time career as a software engineer/developer with any of our reputable hiring partners.</p></div>
   </div>
   <div className="sc-hiKfDv dRsyqq">
    <div className="sc-iklJeh hbusih">
     <div className="logo">
      <img src={access} alt="card logo" />
     </div>
    </div>
    <div className="sc-iklJeh hbusih">
     <div className="logo"><img src={seamfix} alt="card logo" /></div>
    </div>
    <div className="sc-iklJeh hbusih">
     <div className="logo"><img src={cowrywise} alt="card logo" /></div>
    </div>
    <div className="sc-iklJeh hbusih">
     <div className="logo"><img src={piggyvest} alt="card logo" /></div>
    </div>
    <div className="sc-iklJeh hbusih">
     <div className="logo"><img src={mastercard} alt="card logo" /></div>
    </div>
    <div className="sc-iklJeh hbusih">
     <div className="logo"><img src={farmcrowdy} alt="card logo" /></div>
    </div>
   </div>
  </div>
 )
}

export default HiringPartners