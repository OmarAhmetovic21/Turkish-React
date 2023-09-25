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
         <Col md="3" style={{marginTop:"2%"}}>
         <h6><b>Details:</b></h6>
         <h6>In Service: 6</h6>
         <h6>Ordered: —</h6>
         </Col>
       </Row>

       <Row style={{marginTop:"10%"}}>
         <Col md="5">
         <img alt="..." src={require("assets/img/AirbusA320.jpg")}></img>
         </Col>

         <Col md="4">
         <h4>Airbus A320</h4>
         </Col>
         <Col md="3" style={{marginTop:"2%"}}>
         <h6><b>Details:</b></h6>
         <h6>In Service: 18</h6>
         <h6>Ordered: —</h6>
         </Col>
       </Row>

       <Row style={{marginTop:"10%"}}>
         <Col md="5">
         <img alt="..." src={require("assets/img/AirbusA320neo.jpg")}></img>
         </Col>

         <Col md="4">
         <h4>Airbus A320neo</h4>
         </Col>
         <Col md="3" style={{marginTop:"2%"}}>
         <h6><b>Details:</b></h6>
         <h6>In Service: 4</h6>
         <h6>Ordered: —</h6>
         </Col>
       </Row>

       <Row style={{marginTop:"10%"}}>
         <Col md="5">
         <img alt="..." src={require("assets/img/AirbusA321.jpg")}></img>
         </Col>

         <Col md="4">
         <h4>Airbus A321</h4>
         </Col>
         <Col md="3" style={{marginTop:"2%"}}>
         <h6><b>Details:</b></h6>
         <h6>In Service: 72</h6>
         <h6>Ordered: —</h6>
         </Col>
       </Row>

       <Row style={{marginTop:"10%"}}>
         <Col md="5">
         <img alt="..." src={require("assets/img/AirbusA321neo.jpg")}></img>
         </Col>

         <Col md="4">
         <h4>Airbus A321neo</h4>
         </Col>
         <Col md="3" style={{marginTop:"2%"}}>
         <h6><b>Details:</b></h6>
         <h6>In Service: 52</h6>
         <h6>Ordered: —</h6>
         </Col>
       </Row>

       <Row style={{marginTop:"10%"}}>
         <Col md="5">
         <img alt="..." src={require("assets/img/AirbusA330-200.jpg")}></img>
         </Col>

         <Col md="4">
         <h4>Airbus A330-200</h4>
         </Col>
         <Col md="3" style={{marginTop:"2%"}}>
         <h6><b>Details:</b></h6>
         <h6>In Service: 13</h6>
         <h6>Ordered: —</h6>
         </Col>
       </Row>

       <Row style={{marginTop:"10%"}}>
         <Col md="5">
         <img alt="..." src={require("assets/img/AirbusA330-300.jpg")}></img>
         </Col>

         <Col md="4">
         <h4>Airbus A330-300</h4>
         </Col>
         <Col md="3" style={{marginTop:"2%"}}>
         <h6><b>Details:</b></h6>
         <h6>In Service: 36</h6>
         <h6>Ordered: —</h6>
         </Col>
       </Row>

       <Row style={{marginTop:"10%"}}>
         <Col md="5">
         <img alt="..." src={require("assets/img/AirbusA350-900.jpg")}></img>
         </Col>

         <Col md="4">
         <h4>Airbus A350-900</h4>
         </Col>
         <Col md="3" style={{marginTop:"2%"}}>
         <h6><b>Details:</b></h6>
         <h6>In Service: 14</h6>
         <h6>Ordered: 12</h6>
         </Col>
       </Row>

       <Row style={{marginTop:"10%"}}>
         <Col md="5">
         <img alt="..." src={require("assets/img/Boeing737-800.jpg")}></img>
         </Col>

         <Col md="4">
         <h4>Boeing 737-800</h4>
         </Col>
         <Col md="3" style={{marginTop:"2%"}}>
         <h6><b>Details:</b></h6>
         <h6>In Service: 85</h6>
         <h6>Ordered: —</h6>
         </Col>
       </Row>

       <Row style={{marginTop:"10%"}}>
         <Col md="5">
         <img alt="..." src={require("assets/img/Boeing737-900ER.jpg")}></img>
         </Col>

         <Col md="4">
         <h4>Boeing 737-900ER</h4>
         </Col>
         <Col md="3" style={{marginTop:"2%"}}>
         <h6><b>Details:</b></h6>
         <h6>In Service: 15</h6>
         <h6>Ordered: —</h6>
         </Col>
       </Row>

       <Row style={{marginTop:"10%"}}>
         <Col md="5">
         <img alt="..." src={require("assets/img/Boeing737MAX8.jpg")}></img>
         </Col>

         <Col md="4">
         <h4>Boeing 737 MAX 8</h4>
         </Col>
         <Col md="3" style={{marginTop:"2%"}}>
         <h6><b>Details:</b></h6>
         <h6>In Service: 30</h6>
         <h6>Ordered: —</h6>
         </Col>
       </Row>

       <Row style={{marginTop:"10%"}}>
         <Col md="5">
         <img alt="..." src={require("assets/img/Boeing737MAX9.jpg")}></img>
         </Col>

         <Col md="4">
         <h4>Boeing 737 MAX 9</h4>
         </Col>
         <Col md="3" style={{marginTop:"2%"}}>
         <h6><b>Details:</b></h6>
         <h6>In Service: 5</h6>
         <h6>Ordered: —</h6>
         </Col>
       </Row>

       <Row style={{marginTop:"10%"}}>
         <Col md="5">
         <img alt="..." src={require("assets/img/Boeing787-9.jpg")}></img>
         </Col>

         <Col md="4">
         <h4>Boeing 787-9 Dreamliner</h4>
         </Col>
         <Col md="3" style={{marginTop:"2%"}}>
         <h6><b>Details:</b></h6>
         <h6>In Service: 18</h6>
         <h6>Ordered: 7</h6>
         </Col>
       </Row>

       <Row style={{marginTop:"10%"}}>
         <Col md="5">
         <img alt="..." src={require("assets/img/Boeing777-300er.jpg")}></img>
         </Col>

         <Col md="4">
         <h4>Boeing 777-300ER</h4>
         </Col>
         <Col md="3" style={{marginTop:"2%"}}>
         <h6><b>Details:</b></h6>
         <h6>In Service: 33</h6>
         <h6>Ordered: 1</h6>
         </Col>
       </Row>
    </Container>
    <br/> <br/> <br/> <br/> <br/>
        <DarkFooter />
      </div>
    </>
  );
}

export default Fleet;
