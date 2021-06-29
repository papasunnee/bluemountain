import React from "react";
import Link from "next/link";
import SvgLoader from "bv-react-svgloader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars } from "@fortawesome/fontawesome-free-solid";
import {
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Navbar,
  Collapse,
} from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md">
          <NavbarBrand>
            <Link href="/">
              <a>
                <SvgLoader src="/static/svgs/images/logo.svg" />
              </a>
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link href="/">
                  <a className="nav-link">
                    <FontAwesomeIcon icon={faHome} size="md" color="#fff" />
                    <div style={{ width: "20px" }} />
                  </a>
                </Link>
              </NavItem>

              <NavItem>
                <Link href="/contact">
                  <a className="nav-link">
                    <button
                      className="btn btn-primary m-0 py-1"
                      style={{ fontSize: "12px" }}
                    >
                      CONTACT US
                    </button>
                    <div style={{ width: "20px" }} />
                  </a>
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <FontAwesomeIcon
                    icon={faBars}
                    size="lg"
                    style={{ fontSize: "20px" }}
                  />
                  <div style={{ width: "20px" }} />
                </DropdownToggle>
                <DropdownMenu right style={{ backgroundColor: "#d9c402" }}>
                  <DropdownItem>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/about">
                      <a
                        className="withSubmenu"
                        style={{ position: "relative" }}
                      >
                        About Us
                      </a>
                    </Link>
                    <div className="submenu">
                      <div>
                        <Link href="/about/vision-and-mission">
                          <a>VISION AND MISSION</a>
                        </Link>
                      </div>
                      <div>
                        <Link href="/about/strategy">
                          <a>STRATEGY</a>
                        </Link>
                      </div>
                      <div>
                        <Link href="/about/management-team">
                          <a>MANAGEMENT TEAM</a>
                        </Link>
                      </div>
                      <div>
                        <Link href="/about/partner">
                          <a>PARTNER</a>
                        </Link>
                      </div>
                      <div>
                        <Link href="/about/join-us">
                          <a>JOIN US</a>
                        </Link>
                      </div>
                    </div>
                  </DropdownItem>

                  <DropdownItem>
                    <Link href="/solutions">
                      <a>Solutions</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/functions">
                      <a>Functions</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/sectors">
                      <a>Sectors</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link href="/partners">
                      <a>Partners</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/insights">
                      <a>Insight</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/organisational-consulting">
                      <a>Organisational Consulting</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/featured-vacancies">
                      <a>Featured Vacancies</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <style jsx>
          {`
            a,
            a:hover,
            a:active,
            a:visited {
              display: block;
              text-decoration: none;
              color: #000;
              text-transform: uppercase;
              font-weight: 600;
            }
          `}
        </style>
      </div>
    );
  }
}
