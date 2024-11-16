import React from 'react';
import { Refund, termsconditions, privacypolicy } from '../../services/services';
import './conditions.css'; 
import {ArrowUp} from 'iconsax-react'

const Conditions = () => {
    
    const renderContent = (item) => (
        <div key={item.id}>
            {item.section && <h4 className="terms-heading">{item.section}</h4>}
            {item.section1 && <h6 className="terms-subheading">{item.section1}</h6>}
            {item.section2 && <h6 className="terms-subheading">{item.section2}</h6>}
            {item.section3 && <h6 className="terms-subheading">{item.section3}</h6>}
            {item.section4 && <h6 className="terms-subheading">{item.section4}</h6>}
            {item.section5 && <h6 className="terms-subheading">{item.section5}</h6>}
            {item.section6 && <h6 className="terms-subheading">{item.section6}</h6>}
            {item.section7 && <h6 className="terms-subheading">{item.section7}</h6>}
            {item.section8 && <h6 className="terms-subheading">{item.section8}</h6>}
            {item.section9 && <h6 className="terms-subheading">{item.section9}</h6>}
            {item.section10 && <h6 className="terms-subheading">{item.section10}</h6>}
            {item.section11 && <h6 className="terms-subheading">{item.section11}</h6>}
            {item.section12 && <h6 className="terms-subheading">{item.section12}</h6>}
            {item.section13 && <h6 className="terms-subheading">{item.section13}</h6>}
            {item.section14 && <h6 className="terms-subheading">{item.section14}</h6>}
            {item.section15 && <h6 className="terms-subheading">{item.section15}</h6>}
            {item.section16 && <h6 className="terms-subheading">{item.section16}</h6>}
            {item.section17 && <h6 className="terms-subheading">{item.section17}</h6>}
            {item.section18 && <h6 className="terms-subheading">{item.section18}</h6>}
            {item.section19 && <h6 className="terms-subheading">{item.section19}</h6>}
            {item.section20 && <h6 className="terms-subheading">{item.section20}</h6>}
            {item.section21 && <h6 className="terms-subheading">{item.section21}</h6>}
            {item.section22 && <h6 className="terms-subheading">{item.section22}</h6>}
            {item.section23 && <h6 className="terms-subheading">{item.section23}</h6>}
            {item.content1 && <p>{item.content1}</p>}
            {item.content2 && <p>{item.content2}</p>}
            {item.content3 && <p>{item.content3}</p>}
            {item.content4 && <p>{item.content4}</p>}
            {item.content5 && <p>{item.content5}</p>}
            {item.content6 && <p>{item.content6}</p>}
            {item.content7 && <p>{item.content7}</p>}
            {item.content8 && <p>{item.content8}</p>}
            {item.content9 && <p>{item.content9}</p>}
            {item.content10 && <p>{item.content10}</p>}
            {item.content11 && <p>{item.content11}</p>}
            {item.content12 && <p>{item.content12}</p>}
            {item.content13 && <p>{item.content13}</p>}
            {item.content14 && <p>{item.content14}</p>}
            {item.content15 && <p>{item.content15}</p>}
            {item.content16 && <p>{item.content16}</p>}
            {item.content17 && <p>{item.content17}</p>}
            {item.content18 && <p>{item.content18}</p>}
            {item.content19 && <p>{item.content19}</p>}
            {item.content20 && <p>{item.content20}</p>}
            {item.content21 && <p>{item.content21}</p>}
            {item.content22 && <p>{item.content22}</p>}
            {item.content23 && <p>{item.content23}</p>}
            {item.content24 && <p>{item.content24}</p>}
            {item.content25 && <p>{item.content25}</p>}
            {item.content26 && <p>{item.content26}</p>}
            {item.content27 && <p>{item.content27}</p>}
            {item.content28 && <p>{item.content28}</p>}
            {item.content29 && <p>{item.content29}</p>}
            {item.content30 && <p>{item.content30}</p>}
            {item.content31 && <p>{item.content31}</p>}
            {item.content32 && <p>{item.content32}</p>}
            {item.content33 && <p>{item.content33}</p>}
            {item.content34 && <p>{item.content34}</p>}
            {item.content35 && <p>{item.content35}</p>}
            {item.content36 && <p>{item.content36}</p>}
            {item.content37 && <p>{item.content37}</p>}
            {item.content38 && <p>{item.content38}</p>}
            {item.content39 && <p>{item.content39}</p>}
            {item.content40 && <p>{item.content40}</p>}
            {item.content41 && <p>{item.content41}</p>}
            {item.content42 && <p>{item.content42}</p>}
            {item.content43 && <p>{item.content43}</p>}
            {item.content44 && <p>{item.content44}</p>}
            {item.content45 && <p>{item.content45}</p>}
            {item.content46 && <p>{item.content46}</p>}
            {item.content47 && <p>{item.content47}</p>}
            {item.content48 && <p>{item.content48}</p>}
            {item.content49 && <p>{item.content49}</p>}
            {item.content50 && <p>{item.content50}</p>}
            {item.content51 && <p>{item.content51}</p>}
            {item.content52 && <p>{item.content52}</p>}
            {item.content53 && <p>{item.content53}</p>}
            {item.content54 && <p>{item.content54}</p>}
            {item.content55 && <p>{item.content55}</p>}
        </div>
    );

    return (
        <div className="terms-container">
            <h1 style={{fontFamily: 'Algerian, sans-serif',float:'left',color:'black'}}>Terms & Conditions.</h1>
            <div className="terms-card">
                <h3 style={{ color: 'skyblue' }}>TERMS OF SERVICE</h3>
                {termsconditions.map(renderContent)}
            </div>
            <div className="terms-card">
                <h3 style={{ color: 'skyblue' }}>Privacy Policy</h3>
                {privacypolicy.map(renderContent)}
            </div>
            <div className="terms-card">
                <h3 style={{ color: 'skyblue' }}>Return, Refund & Cancellation Policy</h3>
                {Refund.map(renderContent)}
            </div>
            
            <div style={{float:'right',marginRight:32,padding:5}}>
    <a href="#" class="back-to-top"><ArrowUp size="25" color="black" variant="Bold"/></a>
    </div>

        </div>
    );
};

export default Conditions;