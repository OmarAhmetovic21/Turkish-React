import React from "react";
import { BrowserView, MobileView} from 'react-device-detect';
import {
    Container,
    Row,
    Col,
  } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "./Headers/LandingPageHeader";
import DarkFooter from "components/Footers/DarkFooter.js";

// sections for this page




function Fleet() {
    React.useEffect(() => {
        document.body.classList.add("index-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
          document.body.classList.remove("index-page");
          document.body.classList.remove("sidebar-collapse");
        };
      });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <LandingPageHeader />
    <Container>
        
        <Row style={{marginTop:"10%"}}>
         <Col md="5">
         <img alt="..." src={require("assets/img/AirbusA319.jpg")}></img>
         </Col>

         <Col md="4">
         <h4>Airbus A319</h4>
         </Col>
         <Col md="3">
         <h6><b>Details:</b></h6>
         <h6>In Service: 6</h6>
         <h6>Ordered: —</h6>
         </Col>
       </Row>
    </Container>
    <br/> <br/>
        <DarkFooter />
      </div>
    </>
  );
}

export default Fleet;
