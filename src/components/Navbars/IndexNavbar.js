import React from "react";
import { BrowserView, MobileView} from 'react-device-detect';
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 99 ||
        document.body.scrollTop > 99
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" style={{backgroundColor: "#c70a0c"}}>
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="/index">
              <BrowserView>
              <img alt="..." src={require("assets/img/apple-icon.svg.png")} style={{height:"20%", width:"30%"}}></img>
              </BrowserView>

              <MobileView>
              <img alt="..." src={require("assets/img/apple-icon.svg.png")} style={{height:"35%", width:"45%"}}></img>
              </MobileView>
            
            </NavbarBrand>
            
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar" style={{backgroundColor:"black"}}></span>
              <span className="navbar-toggler-bar middle-bar" style={{backgroundColor:"black"}}></span>
              <span className="navbar-toggler-bar bottom-bar" style={{backgroundColor:"black"}}></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink href="/fleet">
                <h5 style={{color:"black"}}><b>Fleet</b></h5>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/index">
                <h5 style={{color:"black"}}><b>Lounges</b></h5>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://www.facebook.com/turkishairlinesBiH"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i style={{color:"black"}} className="fab fa-facebook-square"></i>
                  <p style={{color:"black"}} className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
  
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/turkishairlines/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i style={{color:"black"}} className="fab fa-instagram"></i>
                  <p style={{color:"black"}} className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
