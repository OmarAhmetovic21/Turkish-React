/*eslint-disable*/
import React from "react";
import { BrowserView, MobileView} from 'react-device-detect';

// reactstrap components
import { Container } from "reactstrap";
// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/FleetPageCover.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
          <BrowserView>
            <h1 class="h1-seo" style={{color:"black"}}> <b>Turkish Airlines</b></h1>
            <h3 style={{color:"black"}}><b>Fleet</b></h3>
          </BrowserView>

          <MobileView>
            <h2 class="h1-seo" style={{color:"black"}}> <b>Turkish Airlines</b></h2>
            <h4 style={{color:"black"}}><b>Fleet</b></h4>
          </MobileView>

          </div>
          
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
